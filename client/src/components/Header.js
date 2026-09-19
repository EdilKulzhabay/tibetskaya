import { ReactComponent as Burger } from "../assets/icons/Burger.svg";
import { ReactComponent as Phone } from "../assets/icons/Phone.svg";
import { SwipeableDrawer, IconButton, SvgIcon, Menu, MenuItem } from "@mui/material";
import { ReactComponent as Close } from "../assets/icons/Close.svg";
import Logo from "../assets/icons/logo";
import { useState } from "react";
import { Link } from "react-router-dom";

const CALL_PHONE_NUMBERS = [
    { display: "+7 (747) 531-55-58", tel: "+77475315558" },
    { display: "+7 (747) 531-44-48", tel: "+77475314448" },
    { display: "+7 (7273) 17-27-37", tel: "+77273172737" },
];

function ChevronIcon({ className }) {
    return (
        <svg
            viewBox="0 0 12 8"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Header({ onScrollToRef, refs }) {
    const anchor = "left";
    const [open, setOpen] = useState(false);
    const [phoneMenuAnchor, setPhoneMenuAnchor] = useState(null);
    const isPhoneMenuOpen = Boolean(phoneMenuAnchor);
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

    const openPhoneMenu = (event) => {
        setPhoneMenuAnchor(event.currentTarget);
    };

    const closePhoneMenu = () => {
        setPhoneMenuAnchor(null);
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
                <button
                    type="button"
                    onClick={openPhoneMenu}
                    aria-haspopup="listbox"
                    aria-expanded={isPhoneMenuOpen}
                    className="p-2 bg-[#EF4130] rounded-full flex items-center justify-normal lg:hidden hover:bg-[#ff5745] active:bg-[#d6371f] transition-colors"
                >
                    <Phone className="w-4 h-4" />
                </button>
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
                    <button
                        type="button"
                        onClick={openPhoneMenu}
                        aria-haspopup="listbox"
                        aria-expanded={isPhoneMenuOpen}
                        className="flex items-center gap-x-3 group"
                    >
                        <div className="p-2 bg-[#EF4130] rounded-full flex items-center justify-normal group-hover:bg-[#ff5745] transition-colors">
                            <Phone className="w-3 h-3" />
                        </div>
                        <div className="xl:text-[22px] font-semibold flex items-center gap-x-1.5">
                            Позвонить
                            <ChevronIcon
                                className={`w-2.5 h-2.5 text-[#EF4130] transition-transform duration-200 ${
                                    isPhoneMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            <Menu
                anchorEl={phoneMenuAnchor}
                open={isPhoneMenuOpen}
                onClose={closePhoneMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                slotProps={{
                    paper: {
                        className:
                            "mt-2 rounded-2xl border border-[#e3eef8] shadow-2xl overflow-hidden",
                        sx: { minWidth: 260 },
                    },
                    list: { className: "!py-2" },
                }}
            >
                {CALL_PHONE_NUMBERS.map((item) => (
                    <MenuItem
                        key={item.tel}
                        component="a"
                        href={`tel:${item.tel}`}
                        onClick={closePhoneMenu}
                        className="!px-4 !py-3 hover:!bg-[#bbdcf1] transition-colors"
                    >
                        <div className="flex items-center gap-x-3">
                            <div className="p-1.5 bg-[#EF4130] rounded-full flex items-center justify-center shrink-0">
                                <Phone className="w-3 h-3" />
                            </div>
                            <span className="text-[16px] font-medium text-[#1f2a37]">
                                {item.display}
                            </span>
                        </div>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
