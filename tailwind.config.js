/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3376a5",
          "secondary": "#60dba8",                        
          "accent": "#9d6df2",
          "neutral": "#ffffff",                        
          "neutral": "#2a3137", 
          "base-100": "#eef0f6",
          "info": "#85b2e5",
          "success": "#5aeda1",
          "warning": "#fdd55e",
          "error": "#f65151",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
}
