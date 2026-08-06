import React from "react";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";

export function Navbar() {
  return (
    <>
      {/* Mobile Version */}
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
    </>
  );
}
