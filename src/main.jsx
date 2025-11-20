import { createRoot } from "react-dom/client";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import theme from "./Theme.js";
import { BrowserRouter } from "react-router-dom";
import Index from "./Routers/Index.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { LoadingProvider } from "./page/LoadingProvider.jsx";
import { ConfirmProvider } from "material-ui-confirm";
import { Provider } from "react-redux";
import store from "./utils/Redux/ReduxStore.js";
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <ConfirmProvider>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={{ a: { textDecoration: "none" } }} />
          <LoadingProvider>
            <Index />
          </LoadingProvider>
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
        </CssVarsProvider>
      </ConfirmProvider>
    </Provider>
  </BrowserRouter>
);
