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

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-4">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {Object.keys(customThemes).map((t) => {
            return (
              <DropdownItem
                key={t}
                textValue={t}
                onClick={() => {
                  console.log(`Setting theme to ${t}`);
                  setTheme(t);
                }}
              >
                {t}
              </DropdownItem>
            );
          })}
          {/* <DropdownItem key="new">New file</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
