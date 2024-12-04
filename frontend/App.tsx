import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import Page from "./components/Page";
import RootLayout from "./Layout";
import { ThemeProvider } from "next-themes";
import { lightTheme, darkTheme } from "./components/ThemeSwitcher";

const App = () => {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme={darkTheme}
        themes={[darkTheme, lightTheme]}
      >
        <RootLayout>
          <Page />
        </RootLayout>
      </ThemeProvider>
    </NextUIProvider>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
