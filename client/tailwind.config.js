/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                mobile: "url('./images/MobileBG.png')",
                desktop: "url('./images/DesktopBG.png')",
                footer: "url('./images/FooterLeft.png')",
            },
        },
    },
    plugins: [],
};
