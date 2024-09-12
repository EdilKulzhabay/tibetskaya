import { SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function NavButton({ href, title, icon, active }) {
    return (
        <Link
            to={href}
            className={clsx(
                "block w-full py-3 text-lg px-4 rounded-lg font-medium hover:bg-[#4318FF] hover:bg-opacity-50 hover:text-white",
                active ? "bg-[#4318FF] text-white" : "text-[#A3AED0]"
            )}
        >
            <SvgIcon
                component={icon}
                sx={{ color: "inherit", marginTop: "-4px" }}
            />
            <span className="inline-block ml-3">{title}</span>
        </Link>
    );
}
