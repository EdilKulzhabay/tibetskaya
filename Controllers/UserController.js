import UserModel from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { validationResult } from "express-validator";

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(404).json(errors.array());
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            userName: req.body.userName,
            passwordHash: hash,
        });

        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id,
            },
            process.env.secretKey,
            {
                expiresIn: "30d",
            }
        );

        const { passwordHash, ...userData } = user._doc;
        res.json({ userData, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось зарегистрироваться",
        });
    }
};

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ userName: req.body.userName });

        if (!user) {
            return res.status(403).json({
                message: "Пользователь не найден",
            });
        }

        const isVaildPass = await bcrypt.compare(
            req.body.password,
            user.passwordHash
        );

        if (!isVaildPass) {
            return res.status(400).json({
                message: "Неверный пароль",
            });
        }

        const token = jwt.sign(
            {
                _id: user._id,
            },
            process.env.secretKey,
            {
                expiresIn: "30d",
            }
        );

        res.json({ userId: user._id, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось авторизоваться",
        });
    }
};

export const info = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(400).json({
                message: "Нет доступа",
            });
        }

        const { passwordHash, ...userData } = user._doc;

        res.json(userData);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Нет доступа",
        });
    }
};
