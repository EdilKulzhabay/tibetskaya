import { Box } from "@mui/material";
import React from "react";

export default function PageHeader({ title, children, ...other }) {
    return (
        <Box {...other}>
            <div className=" lg:flex items-center">
                <div className="text-lg font-semibold lg:text-3xl flex-grow text-[#2B3674]">
                    {title}
                </div>

                {children && <Box className="mt-3 lg:mt-0">{children}</Box>}
            </div>
        </Box>
    );
}
