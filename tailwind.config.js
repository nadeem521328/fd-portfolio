/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "error": "#ffb4ab",
        "secondary-container": "#4a4949",
        "background": "#131313",
        "tertiary": "#c8c6c5",
        "surface-container-highest": "#353534",
        "on-primary-container": "#00285d",
        "on-tertiary-fixed-variant": "#474746",
        "on-secondary": "#313030",
        "inverse-surface": "#e5e2e1",
        "on-secondary-container": "#bab8b7",
        "outline": "#8c909f",
        "on-surface-variant": "#c2c6d6",
        "surface-container-high": "#2a2a2a",
        "on-tertiary": "#303030",
        "surface-container-lowest": "#0e0e0e",
        "on-primary-fixed": "#001a42",
        "secondary-fixed": "#e5e2e1",
        "tertiary-fixed-dim": "#c8c6c5",
        "on-secondary-fixed-variant": "#474646",
        "inverse-on-surface": "#313030",
        "tertiary-container": "#929090",
        "surface-variant": "#353534",
        "surface-container-low": "#1c1b1b",
        "error-container": "#93000a",
        "inverse-primary": "#005ac2",
        "primary-fixed-dim": "#adc6ff",
        "surface-tint": "#adc6ff",
        "surface-bright": "#3a3939",
        "on-background": "#e5e2e1",
        "on-surface": "#e5e2e1",
        "outline-variant": "#424754",
        "primary-fixed": "#d8e2ff",
        "on-error-container": "#ffdad6",
        "on-tertiary-container": "#2a2a2a",
        "on-primary-fixed-variant": "#004395",
        "on-tertiary-fixed": "#1b1c1c",
        "primary": "#adc6ff",
        "on-primary": "#002e6a",
        "primary-container": "#4d8eff",
        "secondary-fixed-dim": "#c8c6c5",
        "secondary": "#c8c6c5",
        "surface": "#131313",
        "tertiary-fixed": "#e4e2e1",
        "surface-container": "#201f1f",
        "on-error": "#690005",
        "surface-dim": "#131313",
        "on-secondary-fixed": "#1c1b1b"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "stack-sm": "8px",
        "gutter": "16px",
        "container-margin": "24px",
        "stack-lg": "32px",
        "stack-md": "16px",
        "unit": "4px",
        "section-gap": "120px",
        "container-max": "1200px"
      },
      fontFamily: {
        "headline-md": ["Geist", "sans-serif"],
        "body-md": ["Geist", "sans-serif"],
        "headline-xl": ["Geist", "sans-serif"],
        "headline-lg-mobile": ["Geist", "sans-serif"],
        "label-sm": ["Geist", "sans-serif"],
        "body-lg": ["Geist", "sans-serif"],
        "label-md": ["Geist", "sans-serif"],
        "body-sm": ["Geist", "sans-serif"],
        "headline-lg": ["Geist", "sans-serif"],
        "display": ["Geist", "sans-serif"]
      },
      fontSize: {
        "headline-md": [
          "24px",
          {
            "lineHeight": "32px",
            "letterSpacing": "0em",
            "fontWeight": "600"
          }
        ],
        "body-md": [
          "16px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "headline-xl": [
          "40px",
          {
            "lineHeight": "48px",
            "letterSpacing": "-0.02em",
            "fontWeight": "700"
          }
        ],
        "headline-lg-mobile": [
          "24px",
          {
            "lineHeight": "32px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "label-sm": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.05em",
            "fontWeight": "600"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "28px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "label-md": [
          "14px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0.02em",
            "fontWeight": "500"
          }
        ],
        "body-sm": [
          "14px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "headline-lg": [
          "32px",
          {
            "lineHeight": "40px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "display": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700" }]
      }
    },
  },
  plugins: [],
}
