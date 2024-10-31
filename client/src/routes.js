import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Franchisees from "./Pages/Franchisees";
import Franchisee from "./Pages/Franchisee";
import Franshiza from "./Pages/Franshiza";
import Gratitude from "./Pages/Gratitude";
import Supervisors from "./Pages/Supervisors";
import Accessories from "./Pages/Accessories";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Agreement from "./Pages/Agreement";

export const useRoutes = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/gratitude", element: <Gratitude /> },
        { path: "/accessories", element: <Accessories /> },
        { path: "/:id", element: <Home /> },
        { path: "/Franchise", element: <Franshiza /> },
        { path: "/login", element: <Login /> },
        { path: "/Tamshy/:name", element: <Supervisors /> },
        { path: "/agreement", element: <Agreement /> },
        { path: "/privacyPolicy", element: <PrivacyPolicy /> },
        {
            path: "/admin",
            element: <Admin />,
            children: [
                { index: true, element: <Franchisees /> },
                { path: "/admin/franchisee/:id", element: <Franchisee /> },
            ],
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ]);
    return router;
};
