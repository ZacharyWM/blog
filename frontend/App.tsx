import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./components/Home";
import SampleArticle from "./components/articles/SampleArticle";
import RootLayout from "./Layout";
import { ThemeProvider } from "next-themes";
import { lightTheme, darkTheme } from "./components/ThemeSwitcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme={darkTheme}
        themes={[darkTheme, lightTheme]}
      >
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article" element={<SampleArticle />} />
            </Routes>
          </RootLayout>
        </BrowserRouter>
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
