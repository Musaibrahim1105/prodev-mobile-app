/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{ts,tsx}", "./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#eefbff",
                    100: "#d6f3ff",
                    200: "#ade7ff",
                    300: "#7ad8ff",
                    400: "#45c4ff",
                    500: "#18aaf7",
                    600: "#0d86d4",
                    700: "#0c6bab",
                    800: "#0f598d",
                    900: "#124a73",
                },
            },
            fontFamily: {
                display: ["Poppins_700Bold", "System"],
                body: ["Poppins_400Regular", "System"],
                medium: ["Poppins_500Medium", "System"],
            },
        },
    },
    plugins: [],
};