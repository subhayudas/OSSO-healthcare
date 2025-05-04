"use client";

import NavProvider from "@/providers/nav-provider";
import MainNavigationMenu from "@/components/navbar/main-navigation-menu";

export default function Navbar() {
  return (
    <main className="relative flex flex-col overflow-hidden">
      <NavProvider>
        <MainNavigationMenu />
      </NavProvider>
    </main>
  );
}
