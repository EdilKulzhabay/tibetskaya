import { ReactComponent as Burger } from "../assets/icons/Burger.svg";
import { ReactComponent as Phone } from "../assets/icons/Phone.svg";
import { SwipeableDrawer, IconButton, SvgIcon } from "@mui/material";
import { ReactComponent as Close } from "../assets/icons/Close.svg";
import Logo from "../assets/icons/logo";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ onScrollToRef, refs, phone, callPhone }) {
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
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                anchor={anchor}
                open={open}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
            >
                <div className="bg-white ">
                    <div className="flex justify-end">
                        <IconButton
                            sx={{ ml: "auto" }}
                            onClick={() => setOpen(false)}
                        >
                            <SvgIcon component={Close} />
                        </IconButton>
                    </div>
                    <div className=" flex flex-col gap-y-3 px-10 sm:px-14 md:px-20">
                        <button
                            onClick={() => {
                                onScrollToRef(refs.aboutWaterMobRef);
                                setOpen(false);
                            }}
                            className="w-full py-2 text-center rounded-xl active:hover:bg-[#bbdcf1] hover:bg-[#bbdcf1]"
                        >
                            О воде
                        </button>
                        <button
                            onClick={() => {
                                onScrollToRef(refs.pricesRef);
                                setOpen(false);
                            }}
                            className="w-full py-2 text-center rounded-xl active:hover:bg-[#bbdcf1] hover:bg-[#bbdcf1]"
                        >
                            Цены
                        </button>
                        <button
                            onClick={() => {
                                onScrollToRef(refs.deliveryRef);
                                setOpen(false);
                            }}
                            className="w-full py-2 text-center rounded-xl active:hover:bg-[#bbdcf1] hover:bg-[#bbdcf1]"
                        >
                            Доставка
                        </button>
                        <button
                            onClick={() => {
                                onScrollToRef(refs.footerRef);
                                setOpen(false);
                            }}
                            className="w-full py-2 text-center rounded-xl active:hover:bg-[#bbdcf1] hover:bg-[#bbdcf1]"
                        >
                            Контакты
                        </button>
                    </div>
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
                        <Logo className="w-[200px] md:w-[270px] lg:w-[230px] xl:w-[260px] 2xl:w-[300px]" />
                    </Link>
                    {/* <img
                        src="./images/Logo.svg"
                        alt="Logo"
                        className="w-[200px] md:w-[270px] lg:w-[230px] xl:w-[260px] 2xl:w-[300px]"
                    /> */}
                </div>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={`tel:${callPhone}`}
                    className="p-2 bg-[#EF4130] rounded-full flex items-center justify-normal lg:hidden"
                >
                    <Phone className="w-4 h-4" />
                </a>
                <div className="hidden lg:flex items-center gap-x-10 2xl:gap-x-20">
                    <div className="flex items-center gap-x-3 font-medium 2xl:gap-x-10 xl:text-[22px]">
                        <button
                            onClick={() => onScrollToRef(refs.aboutWaterRef)}
                            className="px-3 py-1.5 rounded-xl hover:font-bold lg:hover:text-[18px] xl:hover:text-[24px] transition-all"
                        >
                            О воде
                        </button>
                        <button
                            onClick={() => onScrollToRef(refs.pricesRef)}
                            className="px-3 py-1.5 rounded-xl hover:font-bold lg:hover:text-[18px] xl:hover:text-[24px] transition-all"
                        >
                            Цены
                        </button>
                        <button
                            onClick={() => onScrollToRef(refs.deliveryRef)}
                            className="px-3 py-1.5 rounded-xl hover:font-bold lg:hover:text-[18px] xl:hover:text-[24px] transition-all"
                        >
                            Доставка
                        </button>
                        <button
                            onClick={() => onScrollToRef(refs.footerRef)}
                            className="px-3 py-1.5 rounded-xl hover:font-bold lg:hover:text-[18px] xl:hover:text-[24px] transition-all"
                        >
                            Контакты
                        </button>
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
        </>
    );
}
