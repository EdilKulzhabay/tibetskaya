import React, { forwardRef, useState } from "react";
import { ReactComponent as Chelik } from "../assets/icons/Chelik.svg";
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
import { useNavigate } from "react-router-dom";
import FranshizaCard from "./FranshizaCard";
import Advantages from "./Advantages";

const Point = () => {
    return (
        <div className="min-w-8 h-8 bg-[#EF4130] rounded-full lg:my-auto"></div>
    );
};

const cards = [
    {
        subtitle: "Франшиза для 18,9 л",
        titile: <span>«БАЗОВЫЙ ПАКЕТ»</span>,
        list: [
            "Право использования бренда «Тибетская» вода",
            "Возможность покупки бутилированной воды по уникальной цене",
            "CRM программа для учета продаж и клиентов",
            "Первые 100 бутылей объемом 18,9 литра с водой",
        ],
        image: "./images/19l.png",
        price: "2 000 000",
    },
    {
        subtitle: "Франшиза для 18,9 л",
        titile: <span>«РАСШИРЕННЫЙ ПАКЕТ»</span>,
        list: [
            "Право использования бренда «Тибетская» вода",
            "Возможность покупки бутилированной воды по уникальной цене",
            "CRM программа для учета продаж и клиентов",
            "Первые 100 бутылей объемом 18,9 литра с водой",
            "5 фирменных футболок",
            "Тележка для удобства в транспортировке товаров",
            "10 баннеров для рекламы в социальных сетях",
        ],
        image: "./images/19l.png",
        price: "3 000 000",
    },
    {
        subtitle: "Франшиза для 18,9 л",
        titile: <span>«VIP-ПАКЕТ»</span>,
        list: [
            "Право использования бренда «Тибетская» вода",
            "Возможность покупки бутилированной воды по уникальной цене",
            "CRM программа для учета продаж и клиентов",
            "Первые 100 бутылей объемом 18,9 литра с водой",
            "5 фирменных футболок",
            "Тележка для удобства в транспортировке товаров",
            "10 баннеров для рекламы в социальных сетях",
            "Лендинг страница в интернете для расширения онлайн-присутствия",
            "Дополнительная персонализированная поддержка или консультации",
        ],
        image: "./images/19l.png",
        price: "5 000 000",
    },
];

const advantages = [
    {
        title: "1. «ВЫСОКАЯ ЦЕНА РЕАЛИЗАЦИИ»:",
        text: "Заказчики воды на дом готовы платить высокую цену за удобство и своевременную доставку. Это создает выгодные условия для бизнеса и повышает маржинальность.",
    },
    {
        title: "2. «ЭФФЕКТИВНОЕ РЕШЕНИЕ ПРОБЛЕМЫ ДОСТАВКИ»:",
        text: "Открытие аквамаркетов в каждом районе города решает проблему невыгодной доставки в условиях пробок и малых объемов, обеспечивая быструю и эффективную доставку.",
    },
    {
        title: "3. «НИЗКАЯ КОНКУРЕНЦИЯ»:",
        text: "В отличие от заказов от организаций, доставка воды на дом часто игнорируется конкурентами. Это открывает уникальные возможности для бизнеса в услугах доставки на дом.",
    },
    {
        title: "4. «НИЗКИЙ РИСК ПОТЕРИ КЛИЕНТА»:",
        text: "Потеря небольшого заказчика на дом оказывает минимальное воздействие на бизнес в сравнении с потерей крупного заказчика. Это обеспечивает стабильность и устойчивость бизнеса к возможным изменениям в клиентской базе.",
    },
    {
        title: "5. «НЕ ТРЕБУЮТСЯ ПОДАРКИ»:",
        text: "Заказчики на дом ценят прежде всего качество услуги и своевременную доставку. Они не нуждаются в подарках и аксессуарах, что снижает расходы на промоакции и упрощает бизнес-модель.",
    },
    {
        title: "6. «СПРОС НА УСЛУГИ ДОСТАВКИ»:",
        text: "В условиях современного ритма жизни все больше людей предпочитают комфорт и удобство. Заказ воды с доставкой на дом становится все более востребованным сервисом, что обеспечивает стабильный спрос.",
    },
    {
        title: "7. «БЫСТРАЯ И ЭФФЕКТИВНАЯ ОБСЛУЖИВАНИЕ»:",
        text: "Заказчики на дом ценят прежде всего скорость и эффективность. Быстрая доставка за час через аквамаркеты позволяет удовлетворить их потребности и установить долгосрочные отношения.",
    },
    {
        title: "8. «ЭКОНОМИЯ ВРЕМЕНИ И УСИЛИЙ»:",
        text: "Клиенты, заказывающие воду на дом, экономят свое время и усилия, избегая необходимости самостоятельного похода за водой или покупки в магазине. Это создает дополнительный стимул для использования услуги.",
    },
    {
        title: "9. «ГАРАНТИРОВАННАЯ ДОСТУПНОСТЬ»:",
        text: "Заказчики на дом могут быть уверены в постоянной доступности воды благодаря аквамаркетам в их жилых районах. Это создает доверие и лояльность к бренду.",
    },
    {
        title: "10. «СПЕЦИАЛЬНАЯ ЗАБОТА О КЛИЕНТАХ»:",
        text: "Уникальное внимание к потребностям клиентов на дом, их ожиданиям и предпочтениям создает возможность для бизнеса внедрять персонализированные подходы и укреплять связи с клиентами.",
    },
];

const Big = forwardRef((props, refs) => {
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

    const changeOpen = () => {
        setOpen(true);
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
            <section className="container mx-auto px-5 mt-10 pb-10 lg:mt-20 lg:px-10 xl:px-24 z-20">
                <p className="text-[22px] font-medium text-center lg:text-[40px]">
                    Интересные факты и цифры:
                </p>
                <div className="flex flex-col gap-y-8 items-center mt-10 py-8 px-16 bg-white rounded-xl lg:flex-row lg:gap-x-12 lg:items-start">
                    <div className="text-center">
                        <p className="text-[40px] font-bold lg:text-[30px] xl:text-[44px]">
                            30
                        </p>
                        <p className="mt-4 text-[#6D6D6D]">
                            Бренд «Тибетская» был основан около 30 лет назад
                        </p>
                    </div>
                    <Point />
                    <div className="text-center">
                        <p className="text-[40px] font-bold lg:text-[30px] xl:text-[44px]">
                            1 млн ₸
                        </p>
                        <p className="mt-4 text-[#6D6D6D]">
                            Продавая 50 бутылей в день, вы будете зарабатывать 1
                            млн ₸ чистой прибыли
                        </p>
                    </div>
                    <Point />
                    <div className="text-center">
                        <p className="text-[40px] font-bold lg:text-[30px] xl:text-[44px]">
                            36+
                        </p>
                        <p className="mt-4 text-[#6D6D6D]">
                            За один выезд, доставка развозит 36 бутылей
                        </p>
                    </div>
                    <Point />
                    <div className="text-center">
                        <p className="text-[40px] font-bold lg:text-[30px] xl:text-[44px]">
                            ∞
                        </p>
                        <p className="mt-4 text-[#6D6D6D]">
                            Вода - единственный продукт, который покупает все
                            люди без исключения
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-center lg:hidden">
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-[#EF4130] py-[14px] px-[60px] rounded-full text-white font-semibold text-center"
                    >
                        Начать
                    </button>
                </div>
            </section>

            <div className="lg:hidden mt-10">
                <div className="flex items-center justify-center">
                    <img
                        src="./images/Chelik.svg"
                        className="md:w-[60%]"
                        alt="Человек с водой"
                    />
                </div>
                <div className="mt-8" ref={props.refs.bigMobRef}>
                    <p className="text-center text-[22px] font-medium">
                        Цена воды
                    </p>
                    <div className="bg-[#c9e5f7] mt-5">
                        <div className="grid grid-cols-3 py-4 px-3">
                            <div className="p-5 border-b border-r border-black text-[15px] font-medium"></div>
                            <div className="p-5 border-b border-r border-black text-[15px] font-medium">
                                Цена для франшизы
                            </div>
                            <div className="p-5 border-b border-black text-[15px] font-medium">
                                Цена реализации
                            </div>
                            <div className="p-5 border-b border-r border-black text-[15px]">
                                За 1 бутыль воды 18,9 л
                            </div>
                            <div className="p-5 border-b border-r border-black text-[22px] font-bold text-[#EF4130] text-center">
                                250 ₸
                            </div>
                            <div className="p-5 border-b border-black text-[22px] font-bold text-center">
                                1300 ₸
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 px-5">
                        <p className="text-[15px]">
                            Таким образом, ваша прибыль будет составлять{" "}
                            <span className="text-[#EF4130] font-medium">
                                550% с каждой проданной бутылки
                            </span>
                        </p>
                    </div>
                    <div className="text-center">
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-[#EF4130] mt-8 py-[14px] px-[60px] rounded-full text-white font-semibold text-center"
                        >
                            Начать
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block relative" ref={props.refs.bigRef}>
                <div className="bg-[#c9e5f7] absolute top-[34%] -translate-y-1/4 h-[220px] inset-x-0"></div>
                <div className="container mx-auto px-5 mt-10 pb-10 lg:mt-20 lg:px-10 xl:px-24 z-20 flex items-center ">
                    <div className="z-10">
                        <Chelik className="lg:w-[95%] z-10" />
                    </div>
                    <div className="ml-5 pt-14 z-10">
                        <p className="text-center text-[40px] font-medium">
                            Цена воды
                        </p>
                        <div className="flex items-center justify-center rounded-xl">
                            <div className="grid grid-cols-3 py-4 px-3 ">
                                <div className="p-5 border-b border-r border-black text-[20px] font-medium"></div>
                                <div className="p-5 border-b border-r border-black text-[20px] font-medium">
                                    Цена для франшизы
                                </div>
                                <div className="p-5 border-b border-black text-[20px] font-medium">
                                    Цена реализации
                                </div>
                                <div className="p-5 border-b border-r border-black text-[20px] 2xl:whitespace-nowrap">
                                    За 1 бутыль воды 18,9 л
                                </div>
                                <div className="p-5 border-b border-r border-black text-[30px] 2xl:text-[36px] font-bold text-[#EF4130] text-center">
                                    250 ₸
                                </div>
                                <div className="p-5 border-b border-black text-[30px] 2xl:text-[36px] font-bold text-center">
                                    1300 ₸
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <p className="text-[20px]">
                                Таким образом, ваша прибыль будет составлять{" "}
                                <span className="text-[#EF4130] font-medium">
                                    420% с каждой проданной бутылки
                                </span>
                            </p>
                        </div>
                        <button
                            onClick={() => setOpen(true)}
                            className="hidden bg-[#EF4130] py-[14px] px-[60px] rounded-full text-white font-semibold text-center lg:mt-10 lg:block"
                        >
                            Начать
                        </button>
                    </div>
                </div>
            </div>

            <section className="container mx-auto px-5 mt-14 lg:mt-14 lg:px-10 xl:px-24 z-20">
                <div className="bg-[#EF4130] w-10 h-1"></div>
                <p className="text-[32px] md:text-[40px] font-semibold xl:text-[60px]">
                    Виды Франшизы
                </p>
            </section>

            {cards.map((item, index) => {
                return (
                    <FranshizaCard
                        key={index}
                        subtitle={item.subtitle}
                        list={item.list}
                        price={item.price}
                        image={item.image}
                        id={index}
                        onclick={changeOpen}
                    >
                        {item.titile}
                    </FranshizaCard>
                );
            })}

            <div className="lg:flex lg:mt-[130px]">
                <div className="relative -mt-20 lg:mt-[10px] min-w-max">
                    <img
                        src="/images/FooterLeft.png"
                        alt="asdasd"
                        className="w-[320px] md:w-[400px] lg:w-[430px] xl:w-[480px] 2xl:w-[530px]"
                    />
                </div>

                <div className="relative z-10 -mt-24 lg:hidden container mx-auto px-5">
                    <p className="text-center text-[22px] font-medium">
                        Преимущества заказчиков воды <br /> на дом:
                    </p>
                    <div className="mt-5">
                        {advantages.map((item) => {
                            return (
                                <Advantages
                                    key={item.title}
                                    title={item.title}
                                    text={item.text}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="hidden lg:block pr-[50px] xl:pr-[120px] 2xl:pr-[180px]">
                    <p className="text-[40px] font-medium">
                        Преимущества заказчиков воды на дом:
                    </p>
                    <div className="mt-5">
                        {advantages.map((item) => {
                            return (
                                <Advantages
                                    key={item.title}
                                    title={item.title}
                                    text={item.text}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
});

export default Big;
