import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";

import "dotenv/config";

import { registerValidation } from "./validations.js";
import {
    UserController,
    FranchiseeController,
    ProductController,
} from "./Controllers/index.js";
import checkAuth from "./utils/checkAuth.js";

mongoose
    .connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB OK");
    })
    .catch((err) => {
        console.log("DB ERROR", err);
    });

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
    const fileName = req.file.filename;
    res.json({
        url: `/uploads/${fileName}`,
    });
});

app.get("/auth/me", checkAuth, UserController.info);
app.post("/auth/register", registerValidation, UserController.register);
app.post("/auth/login", UserController.login);

app.get("/getAllFranchisees", FranchiseeController.getAllFranchisees);
app.post("/getFranchisee", FranchiseeController.getFranchisee);
app.post("/getFranchiseeByPhone", FranchiseeController.getFranchiseeByPhone);
app.post("/addFranchisee", FranchiseeController.addFranchisee);
app.post("/deleteFranchisee", FranchiseeController.deleteFranchisee);
app.post("/updateFranchisee", FranchiseeController.updateFranchisee);

app.post("/addProduct", ProductController.addProduct);
app.post("/getProducts", ProductController.getProducts);
app.post("/deleteProduct", ProductController.deleteProduct);
app.post("/updateProduct", ProductController.updateProduct);

const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465, // Или 587 для TLS
    secure: true,
    auth: {
        user: "tibetskayat@mail.ru",
        pass: process.env.mailPassword,
    },
});

app.post("/sendEmail", (req, res) => {
    const { fullName, phone } = req.body;

    const mailOptions = {
        from: "tibetskayat@mail.ru",
        to: "akhmetov_kan@yahoo.com",
        subject: fullName,
        text: phone,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            //console.log(error);
            res.status(500).send("Ошибка при отправке письма");
        } else {
            //console.log("Email sent: " + info.response);
            res.status(200).send("Письмо успешно отправлено");
        }
    });
});

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }

    console.log("Server Ok");
});
