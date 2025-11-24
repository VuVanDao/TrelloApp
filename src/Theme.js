import { createTheme } from "@mui/material/styles";
const header_height = "50px";
const board_bar_height = "52px";
const boardContentHeight = `${header_height} - ${board_bar_height}`;
const ColumnWidth = "285px";
const CardWidth = "252px";
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
        background: {
          default: "#ffffff",
          paper: "#ffffff",
        },
        background_input_header: {
          main: "#396cb1",
          second: "#6b91c5",
        },
        board_bar: {
          main: "#115ba7",
        },
        board_content: {
          main: "#2a9bce",
        },
        list_background: {
          main: "#f1f2f4",
        },
        common_color_btn: {
          main: "#1868db",
        },
        text_common: {
          main: "#121212",
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
        background: {
          default: "#1d2125", // Nền chính
          paper: "#22272b", // Nền sidebar/card
        },
        text: {
          primary: "#b6c2cf", // Màu chữ chính
          secondary: "#9fadbc", // Màu chữ phụ
        },
        background_input_header: {
          main: "#242528",
          second: "#2b2c2f",
        },
        board_bar: {
          main: "#2e2e31",
        },
        board_content: {
          main: "#1f1f21",
        },
        list_background: {
          main: "#f1f2f4",
        },
        common_color_btn: {
          main: "#1868db",
        },
        text_common: {
          main: "#121212",
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
    header_height,
    board_bar_height,
    boardContentHeight,
    ColumnWidth,
    CardWidth,
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "10px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdc3c7",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#dbe1e5",
            cursor: "pointer",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          marginBottom: "4px",
          // Style riêng khi item được chọn (active)
          "&.Mui-selected": {
            backgroundColor: "rgba(87, 157, 255, 0.1)", // Xanh nhạt
            color: "#579dff", // Chữ xanh
            "& .MuiListItemIcon-root": {
              color: "#579dff",
            },
            "&:hover": {
              backgroundColor: "rgba(87, 157, 255, 0.15)",
            },
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.background.default, // Đồng bộ màu nền
          borderRight: `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)"
          }`,
        }),
      },
    },
  },
});
export default theme;
