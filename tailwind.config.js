/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-poppins)"], // imported from next/font/google
            },
            boxShadow: {
                figma: "17.72px 11.76px 58.81px 0px rgba(199,199,199,0.60)",
            },
        },
    },
    plugins: [],
}
