import React, { useState, useContext, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const [form, setForm] = useState({
        userName: "",
        password: "",
    });

    const vertical = "bottom";
    const horizontal = "center";

    const { request } = useHttp();

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const loginHandler = async () => {
        try {
            const data = await request("/auth/login", "POST", { ...form });

            auth.login(data.token);
            setErrorText(false);
            navigate("/admin");
        } catch (error) {
            setErrorText(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setErrorText(false);
    };

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            api.get("/auth/me", {
                headers: { "Content-Type": "application/json" },
            }).then(({ data }) => {
                if (data._id) {
                    setIsAuth(true);
                }
            });
        }
    }, []);

    useEffect(() => {
        if (isAuth) {
            navigate("/admin");
        }
    }, [isAuth]);

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#F4F7FE]">
            <div className="min-w-[450px] flex flex-col items-center px-6 py-10 bg-white rounded-xl">
                <div className="mt-1 text-sm text-[#A3AED0]">
                    Пожалуйста, войдите в свой аккаунт и начните работу
                </div>
                <div className="w-full mt-7">
                    <div>
                        <input
                            error="true"
                            className="w-full p-3 border rounded-md"
                            placeholder="Имя"
                            id="userName"
                            type="text"
                            name="userName"
                            value={form.userName}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="mt-3">
                        <input
                            error="true"
                            className="w-full p-3 border rounded-md"
                            placeholder="Пароль"
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="w-full mt-8">
                    <button
                        onClick={loginHandler}
                        className="w-full py-2.5 text-center text-lg rounded-lg font-medium bg-[#4318FF] text-white"
                    >
                        ВОЙТИ
                    </button>
                </div>
            </div>
            <Snackbar
                open={errorText}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                >
                    Неверный пароль или логин
                </Alert>
            </Snackbar>
        </div>
    );
}
