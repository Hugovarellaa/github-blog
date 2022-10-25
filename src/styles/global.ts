import { globalCss } from "."

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    "-webkit-font-smoothing": "antialiased",
  },
  body: {
    background: "$baseBackground",
    color: "$baseText",
  },
  "body, input, select, textarea, button": {
    fontFamily: "$default, sans-serif",
    fontWeight: "normal",
    fontSize: "1rem",
    color: "$baseText",
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "$title",
  },
})
