import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="py-6">
        <nav className="container flex items-center justify-between">
          <ul>
            <li>{/* <Link href='/'>Home</Link> */}</li>
          </ul>
          {<ThemeSwitcher />}
        </nav>
      </div>
      <main>{children}</main>
    </div>
  );
}
