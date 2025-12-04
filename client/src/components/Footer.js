import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Facebook } from "../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../assets/icons/Instagram.svg";
import { ReactComponent as Whatsapp } from "../assets/icons/Whatsapp.svg";
import { ReactComponent as Triangle1 } from "../assets/icons/Triangle1.svg";
import { ReactComponent as Triangle2 } from "../assets/icons/Triangle2.svg";
import { ReactComponent as Triangle3 } from "../assets/icons/Triangle3.svg";
import clsx from "clsx";

const Footer = forwardRef((props, ref) => {
    const url = useLocation();

    //url.pathname === "/franshiza"

    return (
        <>
            <footer
                className={clsx(
                    "bg-[#184059] pt-20 pb-8 relative",
                    url.pathname === "/Franchise" ? "mt-[250px]" : "mt-10"
                )}
                ref={ref}
            >
                {url.pathname === "/Franchise" && (
                    <>
                        <div className="absolute -top-[60%] sm:-top-[45%] md:-top-[35%] lg:-top-[50%] left-1/2 -translate-x-1/2 w-[90%] lg:w-[70%]  bg-white rounded-xl py-7 px-10">
                            <p className="text-center text-[20px] font-medium">
                                Если вы хотите стать нашим партнером, мы с
                                удовольствием проведем вам подробную
                                консультацию и экскурсию по нашему заводу
                            </p>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={props.whatsapp}
                                className="flex items-center justify-center mt-5 mx-auto max-w-max bg-[#EF4130] hover:bg-[#ef4030e2] py-3 px-14 text-white font-semibold rounded-3xl lg:mt-3"
                            >
                                <Whatsapp className="" />
                                <p className="ml-2 ">Связаться</p>
                            </a>

                            <div className="absolute -top-4 left-[33%]">
                                <Triangle1 />
                            </div>
                            <div className="absolute top-[60%] -left-2">
                                <Triangle2 />
                            </div>
                            <div className="absolute top-[65%] -right-2">
                                <Triangle3 />
                            </div>
                        </div>
                    </>
                )}
                <div className="container mx-auto  px-5 lg:px-10 xl:px-24">
                    <div className="grid grid-cols-3 gap-4 lg:hidden">
                        <div className="col-span-2">
                            <p className="text-[22px] text-white font-medium md:text-[28px]">
                                Контакты
                            </p>
                            <p className="mt-3 text-[#ECECEC] md:text-xl">
                                e-mail: {props.mail || "akhmetov_kan@yahoo.com"}
                            </p>
                            <p className="text-[22px] font-medium text-[#ECECEC] md:text-[28px]">
                                {props.phone}
                            </p>
                        </div>
                        <div className="">
                            <p className="text-[22px] text-white font-medium md:text-[28px]">
                                О бренде
                            </p>
                            <p className="mt-3 text-[#ECECEC] md:text-xl">
                                О воде
                            </p>
                            <p className="text-[#ECECEC] md:text-xl">Цена</p>
                            <p className="text-[#ECECEC] md:text-xl">
                                Доставка
                            </p>
                            {url.pathname !== "/Franchise" && (
                                <Link
                                    to={"/Franchise"}
                                    className="text-[#ECECEC] md:text-xl"
                                >
                                    Сотрудничество с нами
                                </Link>
                            )}
                        </div>

                        <div className="min-w-[220px] col-span-2">
                            <img
                                src="./images/FooterLogo.svg"
                                alt="FooterLogo"
                                className="md:w-[250px]"
                            />
                            <p className="mt-4 text-[#ECECEC] text-[10px] md:text-base">
                                Все права на торговую марку защищены
                                <br /> Tibetskaya @ 2023{" "}
                            </p>
                            <div className="mt-3">
                                <div>
                                    <Link to="/PublicOffer" className="text-[#ECECEC] text-[10px] md:text-sm">•  Публичная оферта</Link>
                                </div>
                                <div>
                                    <Link to="/PrivacyPolicy" className="text-[#ECECEC] text-[10px] md:text-sm">•  Политика конфиденциальности</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center w-full">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/TibetSu888?mibextid=LQQJ4d"
                                className=" flex justify-center items-center w-7 h-7 rounded-full bg-white"
                            >
                                <Facebook />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.instagram.com/tibetianwater?igsh=MXhsZ252eDY0bDVsdA=="
                                className="ml-2 flex justify-center items-center w-7 h-7 rounded-full bg-white"
                            >
                                <Instagram />
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-between">
                        <div className="min-w-[220px]">
                            <img
                                src="./images/FooterLogo.svg"
                                alt="FooterLogo"
                                className="md:w-[250px]"
                            />
                            <p className="mt-4 text-[#ECECEC] text-[10px] md:text-base">
                                Все права на торговую марку защищены
                                <br /> Tibetskaya @ 2023{" "}
                            </p>
                            <div className="mt-3">
                                <div>
                                    <Link to="/PublicOffer" className="text-[#ECECEC] text-[10px] md:text-sm">•  Публичная оферта</Link>
                                </div>
                                <div>
                                    <Link to="/PrivacyPolicy" className="text-[#ECECEC] text-[10px] md:text-sm">•  Политика конфиденциальности</Link>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-[22px] text-white font-medium ">
                                Контакты
                            </p>
                            <p className="mt-3 text-[#ECECEC] ">
                                e-mail: {props.mail || "akhmetov_kan@yahoo.com"}
                            </p>
                            <p className="text-[19px] font-medium text-[#ECECEC] ">
                                {props.phone}
                            </p>
                        </div>
                        <div className="">
                            <p className="text-[22px] text-white font-medium ">
                                О бренде
                            </p>
                            <p className="mt-3 text-[#ECECEC] ">О воде</p>
                            <p className="text-[#ECECEC] ">Цена</p>
                            <p className="text-[#ECECEC] ">Доставка</p>
                            {url.pathname !== "/Franchise" && (
                                <Link
                                    to={"/Franchise"}
                                    className="text-[#ECECEC]"
                                >
                                    Сотрудничество с нами
                                </Link>
                            )}
                        </div>
                        <div className="flex justify-end items-end">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/TibetSu888?mibextid=LQQJ4d"
                                className=" flex justify-center items-center w-7 h-7 rounded-full bg-white"
                            >
                                <Facebook />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.instagram.com/tibetianwater?igsh=MXhsZ252eDY0bDVsdA=="
                                className="ml-2 flex justify-center items-center w-7 h-7 rounded-full bg-white"
                            >
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
});

export default Footer;
