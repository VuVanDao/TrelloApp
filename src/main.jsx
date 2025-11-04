import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import theme from "./Theme.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ a: { textDecoration: "none" } }} />
      <App />
    </CssVarsProvider>
  </StrictMode>
);
