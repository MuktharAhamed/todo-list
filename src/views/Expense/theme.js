import { createMuiTheme } from "@material-ui/core/styles";
const font = "'Yanone Kaffeesatz', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    fontSize: 15,
    button: {
      textTransform: "none",
      fontSize: 17,
    },
    h4: {
      fontSize: 20,
    },
  },
});

export default theme;
