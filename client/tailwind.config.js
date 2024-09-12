/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                mobile: "url('./images/MobileBG.svg')",
                desktop: "url('./images/DesktopBG.svg')",
                footer: "url('./images/FooterLeft.png')",
            },
        },
    },
    plugins: [],
};
