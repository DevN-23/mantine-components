import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import App from "@/App.tsx";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
  colors: {
    deepBlue: [
      "#eef3ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4",
      "#44639f",
      "#39588f",
      "#2d4b81",
    ],
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      theme={theme}
      defaultColorScheme="light"
      classNamesPrefix="app"
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
