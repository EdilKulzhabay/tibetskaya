import { ReactComponent as Burger } from "../assets/icons/Burger.svg";
import { ReactComponent as Phone } from "../assets/icons/Phone.svg";
import { SwipeableDrawer, IconButton, SvgIcon } from "@mui/material";
import { ReactComponent as Close } from "../assets/icons/Close.svg";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Gratitude() {
    const phone = "+7 747 531 55 58";
    const callPhone = "+77475315558";

    const anchor = "left";
    const [open, setOpen] = useState(false);
    const iOS =
        typeof navigator !== "undefined" &&
        /iPad|iPhone|iPod/.test(navigator.userAgent);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(open);
    };

    return (
        <>
            <Helmet>
                <title>Благодарность за Интерес к Франшизе 'Тибетская'</title>
                <meta
                    name="description"
                    content="Спасибо за ваш интерес к сотрудничеству с 'Тибетская'. Мы свяжемся с вами в ближайшее время."
                />
            </Helmet>
            <div className="min-h-screen bg-[#A7D1EC] flex flex-col justify-between">
                <div className="container mx-auto px-5 pt-4  lg:px-10 xl:px-24">
                    <div className="pb-10 lg:pb-0">
                        <SwipeableDrawer
                            disableBackdropTransition={!iOS}
                            disableDiscovery={iOS}
                            sx={{ width: "90%" }}
                            anchor={anchor}
                            open={open}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            <div className="bg-white min-w-[300px] sm:min-w-[550px] md:min-w-[700px] flex flex-col gap-y-3">
                                <div className="flex justify-end">
                                    <IconButton
                                        sx={{ ml: "auto" }}
                                        onClick={() => setOpen(false)}
                                    >
                                        <SvgIcon component={Close} />
                                    </IconButton>
                                </div>
                                <Link
                                    className="ml-5 font-semibold text-lg"
                                    to="/"
                                >
                                    На главную
                                </Link>
                            </div>
                        </SwipeableDrawer>
                        <header className="flex items-center justify-between relative">
                            <div className="lg:hidden"></div>
                            <button className="fixed top-7 left-3 p-1 rounded-full bg-[#7dcbf97d] hover:bg-[#afddf7a4] lg:hidden">
                                <Burger
                                    onClick={() => {
                                        setOpen(true);
                                    }}
                                />
                            </button>
                            <div>
                                <Link to="/">
                                    <img
                                        src="./images/Logo.svg"
                                        alt="Logo"
                                        className="w-[200px] md:w-[270px] lg:w-[230px] xl:w-[260px] 2xl:w-[300px]"
                                    />
                                </Link>
                            </div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={`tel:${callPhone}`}
                                className="p-2 bg-[#EF4130] rounded-full flex items-center justify-normal lg:hidden"
                            >
                                <Phone className="w-4 h-4" />
                            </a>
                            <div className="hidden lg:flex items-center gap-x-5 2xl:gap-x-10">
                                <div className=" font-medium 2xl:gap-x-10 lg:text-[20px] xl:text-[22px] ">
                                    <Link
                                        className="px-3 py-1.5 rounded-xl hover:font-bold lg:hover:text-[18px] xl:hover:text-[24px] transition-all"
                                        to="/"
                                    >
                                        На главную
                                    </Link>
                                </div>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`tel:${callPhone}`}
                                    className="flex items-center gap-x-3"
                                >
                                    <div className="p-2 bg-[#EF4130] rounded-full flex items-center justify-normal">
                                        <Phone className="w-3 h-3" />
                                    </div>
                                    <div className=" xl:text-[22px] font-semibold">
                                        {phone}
                                    </div>
                                </a>
                            </div>
                        </header>
                    </div>
                </div>

                <div className="text-center">
                    <p className="lg:text-[24px] font-semibold">
                        Благодарим вас!
                    </p>
                    <p className="mt-2 lg:text-[24px]">
                        Наш менеджер свяжется с вами в течении <br /> короткого
                        времени.
                    </p>
                </div>

                <Footer
                    phone="+7 747 531 55 58"
                    mail="akhmetov_kan@yahoo.com"
                />
            </div>
        </>
    );
}
