import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        darkBlack: "#100C27",
        darkPurple: "#19C1CE",
        lightPurple: "#6C5AE0",
        white: "#FFFFFF",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      sans: ["var(--font-nunito-sans)"],
      mono: ["var(--font-darker-grotesque)"],
    },
    fontSize: {
      hLg: [
        "56px",
        {
          lineHeight: "100%",
          fontWeight: 900,
        },
      ],
      mhLg: [
        "40px",
        {
          lineHeight: "100%",
          fontWeight: 900,
        },
      ],
      hMd: [
        "40px",
        {
          lineHeight: "100%",
          fontWeight: 900,
        },
      ],
      mhMd: [
        "32px",
        {
          lineHeight: "100%",
          fontWeight: 900,
        },
      ],
      hSm: [
        "32px",
        {
          lineHeight: "110%",
          fontWeight: 900,
        },
      ],
      mhSm: [
        "24px",
        {
          lineHeight: "100%",
          fontWeight: 900,
        },
      ],
      hXs: [
        "24px",
        {
          lineHeight: "110%",
          fontWeight: 800,
        },
      ],
      mhXs: [
        "20px",
        {
          lineHeight: "110%",
          fontWeight: 800,
        },
      ],
      sSm: [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: 400,
        },
      ],
      msSm: [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: 400,
        },
      ],
      sXs: [
        "14px",
        {
          lineHeight: "120%",
          fontWeight: 400,
        },
      ],
      bodyLg: [
        "20px",
        {
          lineHeight: "150%",
          fontWeight: 400,
        },
      ],
      bodyMd: [
        "16px",
        {
          lineHeight: "150%",
          fontWeight: 400,
        },
      ],
      bodySm: [
        "14px",
        {
          lineHeight: "150%",
          fontWeight: 400,
        },
      ],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
