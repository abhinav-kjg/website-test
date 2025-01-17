/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                "footer-background": "#F0F0F0",
                "footer-light-gray": "#D1D1D1",
                "primary-blue": "#1868DB",
                "secondary-blue": "#307EED",
                "secondary-code": "#2ACDBC",
                "custom-gray-bg": "#F6F6F6",
                "custom-gray-text": "#656565",
            },

            backgroundImage: {
                "gradient-custom-blue":
                    "linear-gradient(90deg, #1868DB33 0%, #2ACDBC33 100%)",
            },
            screens: {
                "custom-770": { max: "770px" },
                "min-custom-770": { min: "770px" },
            },
            fontFamily: {
                SignPainterHouseScript: ["SignPainter", "sans-serif"], 
              },
        },
    },
    plugins: [],
};
