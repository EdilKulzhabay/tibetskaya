import { createTheme } from "@mui/material";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

const LinkBehavior = forwardRef(({ href, ...other }, ref) => (
    <RouterLink to={href} ref={ref} {...other} />
));

const theme = createTheme({
    typography: {
        fontFamily: ["TTNormsPro"].join(","),
        button: {
            fontSize: "1rem",
            textTransform: "none",
        },
    },
    spacing: 4,
    palette: {
        text: {
            primary: "#212123",
        },
        primary: {
            main: "#5e00ff",
        },
        error: {
            main: "#ff503e",
        },
        secondary: {
            main: "#f3f3f5",
        },
        success: {
            main: "#0a9963",
        },
        dark: {
            main: "#212123",
        },
        warning: {
            main: "#ff503e",
        },
        default: {
            main: "#212123",
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
                LinkComponent: LinkBehavior,
            },
            // styleOverrides: {
            //   root: {
            //     textTransform: "none",
            //     fontSize: "1rem",
            //     lineHeight: 1.5,
            //   },
            //   startIcon: ({ ownerState }) => ({
            //     ...(ownerState.size === "medium" && {
            //       ">*:nth-of-type(1)": {
            //         fontSize: "1.5rem",
            //       }
            //     })
            //   }),
            // },
            // variants: [
            //   {
            //     props: { size: "small" },
            //     style: {
            //       fontSize: "0.875rem",
            //     },
            //   },
            //   {
            //     props: { size: "medium" },
            //     style: {
            //       paddingTop: 10,
            //       paddingBottom: 10,
            //     }
            //   },
            //   {
            //     props: { color: "default" },
            //     style: {
            //       borderColor: "#ecebf0",
            //       backgroundColor: "#ffffff",
            //       "&:hover": {
            //         backgroundColor: "#f9f9f9",
            //         borderColor: "#ecebf0",
            //       },
            //       "&:active": {
            //         backgroundColor: "#ecebf0",
            //         borderColor: "#c7c6cc",
            //       },
            //     }
            //   }
            // ],
        },
        MuiChip: {
            variants: [
                {
                    props: { size: "large" },
                    style: {
                        fontSize: 14,
                        "& .MuiChip-label": {
                            paddingTop: 6,
                            paddingBottom: 6,
                        },
                        "& .MuiChip-deleteIcon": {
                            fontSize: 24,
                        },
                    },
                },
            ],
        },
    },
});

theme.shadows[1] =
    "0 0 2px 0 rgba(159, 162, 183, 0.12), 0 4px 8px 0 rgba(159, 162, 183, 0.16)";

export default theme;
