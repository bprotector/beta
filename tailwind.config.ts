// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Scan all files in src/app
    './src/components/**/*.{js,ts,jsx,tsx}', // Scan all files in src/components
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px', // Ensure md breakpoint is defined
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      // Optional: Explicitly define custom utilities if needed
      width: {
        '33.33': '33.33%',
      },
      padding: {
        '4': '1rem', // Ensure px-4 is available
      },
    },
  },
  corePlugins: {
    // Ensure all core plugins are enabled (default behavior)
    preflight: true,
    container: true,
    padding: true,
    margin: true,
    width: true,
    // Add other plugins as needed
  },
  plugins: [],
};