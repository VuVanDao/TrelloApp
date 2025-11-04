import { createTheme } from "@mui/material/styles";
const header_height = "50px";
const board_bar_height = "52px";
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
        background_input_header: {
          main: "#396cb1",
          second: "#6b91c5",
        },
        board_bar: {
          main: "#115ba7",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#1f1f21",
        },
        secondary: {
          main: "#ffffff",
        },
        background_input_header: {
          main: "#242528",
          second: "#2b2c2f",
        },
        board_bar: {
          main: "#2e2e31",
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
  trelloCustom: {
    header_height: header_height,
    board_bar_height,
  },
});
export default theme;
