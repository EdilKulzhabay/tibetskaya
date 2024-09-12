import ProductModel from "../Models/Product.js";
import fs from "fs";
import path from "path";

export const addProduct = async (req, res) => {
    try {
        const { name, price, description, imageUrl, franchisee } = req.body;
        const doc = new ProductModel({
            name,
            price,
            description,
            imageUrl,
            franchisee,
        });

        const product = await doc.save();

        res.json({
            succes: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось добавить продукт",
        });
    }
};

export const getProducts = async (req, res) => {
    try {
        const franchisee = req.body.franchisee;
        const products = await ProductModel.find({ franchisee });

        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось получить продукты",
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const _id = req.body._id;
        const fileName = req.body.fileName;
        const delRes = await ProductModel.findByIdAndDelete(_id);
        if (!delRes) {
            return res.status(404).json({
                message: "Товар не найден",
            });
        }

        const currentModuleUrl = import.meta.url;
        const currentModuleDir = path.dirname(
            new URL(currentModuleUrl).pathname
        );
        const filePath = path.join(currentModuleDir, "../", fileName);
        //console.log(filePath);

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "Не удалось удалить файл",
                });
            }
        });
        res.json({
            succes: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Не удалось удалить товар",
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { _id, name, price, description, imageUrl } = req.body;
        const updateResult = await ProductModel.findByIdAndUpdate(
            _id,
            {
                name,
                price,
                description,
                imageUrl,
            },
            { new: true }
        );
        if (!updateResult) {
            return res.status(404).json({
                message: "Не удалось обновить товарqwe",
            });
        }

        res.json(updateResult);
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Не удалось обновить товар",
        });
    }
};
