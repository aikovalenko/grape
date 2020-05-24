module.exports = {
  theme: {
    fontFamily: {
      'display': ['"Overpass Mono"', 'monospace']
    },
    extend: {
      colors: {
        main: "#101729",
        accent: "#00D664",
        disable: "#C6C3C3",
        white: "#ffffff",
        gray: {
          "50": "#F6F7F9",
          "100": "#E3E5E8",
          "200": "#CED2D7",
          "300": "#CCD0D6",
          "400": "#B9BFC6",
          "500": "#A4ABB4",
          "600": "#8F98A3",
          "700": "#6F767E",
          "800": "#4F545A",
          "900": "#2F3135"
        },
        blue: {
          "600": "#2372DB",
          "700": "#2069CA"
        },
        red: {
          "600": "#E71F1F",
          "700": "#A71B1B"
        },
        green: {
          "600": "#1BAC53",
          "700": "#137739"
        }
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "48px"
      },
      width: {
        "1": "1px",
        "8": "16px",
        "12": "24px",
        "16": "32px",
        "32": "64px",
        "48": "96px"
      },
      height: {
        "8": "16px",
        "12": "24px",
        "68": "68px",
      }
    }
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "focus-within"]
  },
  plugins: []
};
