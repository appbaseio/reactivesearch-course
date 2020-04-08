const blue = "dodgerblue";

export default {
  googleFont:
    "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap",
  fonts: {
    body: '"Open Sans", sans-serif',
  },
  colors: {
    text: "rgb(59, 62, 68)",
    background: "#fff",
    primary: blue,
    blue,
    black: "#000",
    codeColor: "#666666",
    codeBackground: "#f7f7f7",
    inlineCode: "brown",
  },
  fontWeights: {
    heading: 600,
    bold: 600,
  },
  styles: {
    a: {
      color: blue,
    },
    p: {
      padding: 10,
      textAlign: "center",
    },
    pre: {
      color: "codeColor",
      bg: "codeBackground",
      padding: 15,
      fontSize: 18,
    },
    code: {
      color: "inlineCode",
    },
  },
};
