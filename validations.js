import { body } from "express-validator";

export const registerValidation = [
    body("userName", "Уажите имя").isLength({ min: 2 }),
    body("password", "Пароль должен быть минимум из 5 символов").isLength({
        min: 5,
    }),
];
