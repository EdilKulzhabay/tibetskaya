import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NavButton from "../components/NavButton";
import { SvgIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api";

import { ReactComponent as Users } from "../assets/icons/Users.svg";
import { ReactComponent as LogOut } from "../assets/icons/LogOut.svg";

const buttons = [
    {
        href: "/admin",
        title: "Франчайзилар",
        icon: Users,
        active: true,
    },
];

export default function Admin() {
    const auth = useContext(AuthContext);
    const [isAuth, setIsAuth] = useState(true);
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            auth.logout();
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            api.get("/auth/me", {
                headers: { "Content-Type": "application/json" },
            })
                .then(({ data }) => {
                    if (data._id) {
                        setIsAuth(true);
                    }
                })
                .catch(() => {
                    setIsAuth(false);
                });
        } else {
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth]);

    return (
        <div className="flex justify-between relative">
            <div className="w-[20%] relative flex flex-col justify-between min-h-screen px-5 py-6 bg-white">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="w-full text-3xl text-center">
                            Tibetskaya
                        </div>
                    </div>

                    <div className="mt-20 space-y-2">
                        {buttons.map((item) => (
                            <NavButton
                                key={item.title}
                                href={item.href}
                                title={item.title}
                                icon={item.icon}
                                active={item.active}
                            />
                        ))}
                    </div>
                </div>
                <div className="mb-5">
                    <button
                        onClick={logoutHandler}
                        className="w-full py-2.5 px-4 text-[#A3AED0] rounded-lg hover:bg-[#4318FF] hover:text-white text-left"
                    >
                        <SvgIcon
                            component={LogOut}
                            sx={{ color: "inherit", marginTop: "-4px" }}
                        />
                        <span className="inline-block ml-3">
                            Выйти из системы
                        </span>
                    </button>
                </div>
            </div>
            <div className="w-[80%] py-10 px-20 bg-[#F4F7FE]">
                <Outlet />
            </div>
        </div>
    );
}
