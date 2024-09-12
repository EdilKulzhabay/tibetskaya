import FranchiseeModel from "../Models/Franchisee.js";

export const addFranchisee = async (req, res) => {
    try {
        const { name, phone, mail, whatsapp } = req.body;
        const candidateName = await FranchiseeModel.findOne({ name });
        if (candidateName) {
            return res.status(404).json({
                message: "Франчайзи с таким именем уже существует",
            });
        }
        const candidatePhone = await FranchiseeModel.findOne({ phone });
        if (candidatePhone) {
            return res.status(404).json({
                message: "Франчайзи с таким номером уже существует",
            });
        }
        const doc = new FranchiseeModel({
            name,
            phone,
            mail,
            whatsapp,
        });
        const franchisee = await doc.save();

        res.json({
            succes: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось добавить франчайзи",
        });
    }
};

export const getAllFranchisees = async (req, res) => {
    try {
        const franchisees = await FranchiseeModel.find();
        if (!franchisees) {
            return res.status(404).json({
                message: "Не удалось получить франчейзиларды",
            });
        }

        res.json(franchisees);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось получить франчейзиларды",
        });
    }
};

export const getFranchisee = async (req, res) => {
    try {
        const _id = req.body._id;
        const franchisee = await FranchiseeModel.findById(_id);
        if (!franchisee) {
            return res.status(404).json({
                message: "Не удалось получить франчейзиды",
            });
        }

        res.json(franchisee);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось получить франчейзиды",
        });
    }
};

export const getFranchiseeByPhone = async (req, res) => {
    try {
        const phone = req.body.phone;
        const franchisee = await FranchiseeModel.findOne({ phone });
        if (!franchisee) {
            return res.status(404).json({
                message: "Не удалось получить франчейзиды",
            });
        }

        res.json(franchisee);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось получить франчейзиды",
        });
    }
};

export const deleteFranchisee = async (req, res) => {
    try {
        const _id = req.body._id;
        const delRes = await FranchiseeModel.findByIdAndDelete(_id);
        if (!delRes) {
            return res.status(404).json({
                message: "Франчайзи не найден",
            });
        }
        res.json({
            succes: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Не удалось удалить франчайзи",
        });
    }
};

export const updateFranchisee = async (req, res) => {
    try {
        const { _id, name, phone, whatsapp, mail } = req.body;
        const updateResult = await FranchiseeModel.findByIdAndUpdate(
            _id,
            {
                name,
                phone,
                whatsapp,
                mail,
            },
            { new: true }
        );
        if (!updateResult) {
            return res.status(404).json({
                message: "Не удалось обновить франчайзи",
            });
        }
        res.json(updateResult);
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Не удалось обновить франчайзи",
        });
    }
};
