import mongoose from "mongoose";

const FranchiseeModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        whatsapp: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Franchisee", FranchiseeModel);
