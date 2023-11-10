module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "variable-collection-bg": "var(--variable-collection-bg)",
        "variable-collection-blue1": "var(--variable-collection-blue1)",
        "variable-collection-blue2": "var(--variable-collection-blue2)",
        "variable-collection-blue3": "var(--variable-collection-blue3)",
        "variable-collection-dark-blue": "var(--variable-collection-dark-blue)",
        "variable-collection-dark-blue1": "var(--variable-collection-dark-blue1)",
        white: "var(--white)",
      },
      fontFamily: {
        h1: "var(--h1-font-family)",
        h2: "var(--h2-font-family)",
        h3: "var(--h3-font-family)",
        label: "var(--label-font-family)",
        "text-1": "var(--text-1-font-family)",
        "text-2": "var(--text-2-font-family)",
        "text-small-link": "var(--text-small-link-font-family)",
      },
      boxShadow: {
        large: "var(--large)",
        medium: "var(--medium)",
        small: "var(--small)",
        xlarge: "var(--xlarge)",
        xsmall: "var(--xsmall)",
        xxlarge: "var(--xxlarge)",
        xxsmall: "var(--xxsmall)",
      },
    },
  },
  plugins: [],
};