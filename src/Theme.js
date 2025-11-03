import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#08479e",
        },
        secondary: {
          main: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#ffffff",
        },
        secondary: {
          main: "#000000",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
});
export default theme;
