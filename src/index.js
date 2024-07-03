import { createTheme, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "./index.css";
import App from "./App";

const theme = createTheme({
  colorScheme: "light",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
