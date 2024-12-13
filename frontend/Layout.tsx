import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Link } from "react-router-dom";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="py-6 flex justify-center">
        <nav className="flex items-center justify-between w-3/4 xl:w-1/2">
          <ul>
            <li>
              {
                <Link to="/">
                  <Button href="/">Home</Button>
                </Link>
              }
            </li>
          </ul>
          <div>{<ThemeSwitcher />}</div>
        </nav>
      </div>
      <main>{children}</main>
    </div>
  );
}
