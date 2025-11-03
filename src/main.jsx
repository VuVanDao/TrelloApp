import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./Theme.js";
import { CssBaseline, GlobalStyles } from "@mui/material";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ a: { textDecoration: "none" } }} />
      <App />
    </CssVarsProvider>
  </StrictMode>
);
