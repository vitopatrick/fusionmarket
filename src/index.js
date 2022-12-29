// ? Import the react components
import React from "react";
import ReactDOM from "react-dom";

// ? Import the stylesheets for bootstrap,react-toastify and the index or global stylesheet
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

// ? Import the react router dom
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

// ? Imports from material ui
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

// ? Import the user context that will Cover the applications and control authentication state
import UserProvider from "./context/UserContext";
import ThemeChanger from "./context/themeContext";

ReactDOM.render(
  <UserProvider>
    <ThemeChanger>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ThemeChanger>
  </UserProvider>,
  document.getElementById("root")
);
