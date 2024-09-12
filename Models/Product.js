import mongoose from "mongoose";

const ProductModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    franchisee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Franchisee",
    },
});

export default mongoose.model("Product", ProductModel);
