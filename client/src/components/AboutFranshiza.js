import React, { forwardRef, useState } from "react";
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    SvgIcon,
    TextField,
} from "@mui/material";
import api from "../api";

import { ReactComponent as Close } from "../assets/icons/Close.svg";

import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const AboutFranshiza = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    const sendMail = () => {
        const formData = new FormData();
        formData.append("fullName", fullName);
        formData.append("phone", phone);

        api.post("/sendEmail", formData, {
            headers: { "Content-Type": "application/json" },
        })
            .then(() => {
                navigate("/gratitude");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Dialog
                open={open}
                fullWidth={true}
                maxWidth="xs"
                onClose={() => setOpen(false)}
            >
                <DialogTitle sx={{ backgroundColor: "#184059" }}>
                    <div className="flex justify-between bg-[#184059]">
                        <div className="text-[20px] lg:text-[28px] text-white">
                            Оставьте заявку
                        </div>
                        <IconButton
                            sx={{ ml: "auto" }}
                            onClick={() => setOpen(false)}
                        >
                            <SvgIcon component={Close} />
                        </IconButton>
                    </div>
                </DialogTitle>

                <DialogContent>
                    <div className="text-center mt-3 text-[20xp]">
                        Оставьте свои контакты и наш менеджер вам перезвонит
                    </div>
                    <Box component="form">
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"fullName"}
                                label={"Ваше имя"}
                                fullWidth
                                autoFocus
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"phone"}
                                label={"+7 (999) 999-99-99"}
                                fullWidth
                                autoFocus
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Box>
                    </Box>
                </DialogContent>

                <DialogActions sx={{ justifyContent: "center" }}>
                    <button
                        onClick={sendMail}
                        className="bg-[#EF4130] py-[14px] px-[60px] rounded-full text-white font-semibold text-center"
                    >
                        Отправить
                    </button>
                </DialogActions>
            </Dialog>
            <div className="bg-[#c9e5f7] pt-8 lg:pt-10" ref={ref}>
                <section
                    className="pb-10 container mx-auto flex flex-col gap-y-7 px-5 lg:flex-row lg:gap-x-14 lg:px-10 xl:px-24"
                    ref={ref}
                >
                    <div className="lg:w-1/3">
                        <div className="bg-[#EF4130] w-10 h-1"></div>
                        <p className="text-[32px] md:text-[40px] font-semibold xl:text-[60px]">
                            ФРАНШИЗА
                        </p>
                        <p className="mt-7">
                            Начни свой бизнес по доставке воды «Тибетская» и
                            начни зарабатывать от 1 млн ₸ с 2-го месяца
                        </p>
                        <button
                            onClick={() => setOpen(true)}
                            className="hidden bg-[#EF4130] py-[14px] px-[60px] rounded-full text-white font-semibold text-center lg:mt-10 lg:block"
                        >
                            Начать
                        </button>
                    </div>

                    <div className="">
                        <p className="text-[22px] font-medium text-center lg:text-[40px] lg:mt-5">
                            На чем вы будете зарабатывать?
                        </p>
                        <div className="grid grid-cols-1 gap-y-8 mt-8 lg:grid-cols-3 lg:gap-x-10 place-items-stretch">
                            <Cards
                                kol={"1"}
                                title={"Бренд"}
                                text={
                                    "Мы предоставим вам право использования известного бренда воды «Тибетская», которую знает весь Казахстан"
                                }
                            />
                            <Cards
                                kol={"2"}
                                title={"Высокая маржа"}
                                text={
                                    "Вы будете покупать 19 литровые бутыли за 200 ₸ и продавать их за 1200 ₸, получая маржу в 600%"
                                }
                            />
                            <Cards
                                kol={"3"}
                                title={"Клиентский портфель"}
                                text={
                                    "Мы научим вас находить клиентов и зарабатывать на этом от 1 миллиона ₸ в месяц"
                                }
                            />
                        </div>
                        <div className="lg:hidden text-center">
                            <button
                                onClick={() => setOpen(true)}
                                className="mt-10 bg-[#EF4130] py-[14px] px-[60px] rounded-full text-white font-semibold text-center"
                            >
                                Начать
                            </button>
                        </div>
                    </div>
                </section>
            </div>{" "}
        </>
    );
});

export default AboutFranshiza;
