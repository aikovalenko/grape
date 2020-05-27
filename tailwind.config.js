module.exports = {
  theme: {
    fontFamily: {
      'display': ['"Helvetica"']
    },
    extend: {
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
