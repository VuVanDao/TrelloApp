import { createRoot } from "react-dom/client";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import theme from "./Theme.js";
import { BrowserRouter } from "react-router-dom";
import Index from "./Routers/index.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <CssVarsProvider theme={theme}>
    <BrowserRouter basename="/">
      <CssBaseline />
      <GlobalStyles styles={{ a: { textDecoration: "none" } }} />
      <Index />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  </CssVarsProvider>
);
