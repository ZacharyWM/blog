import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React from "react";
import { customThemes } from "../style/tailwind-custom-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const lightTheme = "fluentTheme";
export const darkTheme = "darkBlue";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-4">
      <FontAwesomeIcon
        className="cursor-pointer"
        icon={theme === darkTheme ? faSun : faMoon}
        onClick={toggleTheme}
        size="lg"
      />
    </div>
  );
}

/*
   <Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open Menu</Button>
  </DropdownTrigger>
  <DropdownMenu aria-label="Static Actions">
    {
      Object.keys(customThemes).map((theme) => {
        return <DropdownItem key={theme} textValue={theme} onClick={() => {
          console.log(`Setting theme to ${theme}`);
          setTheme(theme);
        }}>
        {theme}
      </DropdownItem>
      })
    }
    </DropdownMenu>
    </Dropdown>
*/
