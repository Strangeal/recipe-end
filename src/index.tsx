import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ProSidebarProvider } from "react-pro-sidebar";

export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto Mono', monospace",
  },
  palette: {
    primary: {
      main: "#ED6D06",
    },
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
