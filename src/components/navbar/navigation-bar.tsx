import React from "react";
import { NAVIGATION_LINK } from "@/constants";
import { NavLink, NavLinksProps } from ".";

export const NavigationBar = () => {
  return (
    <header className="fixed top-0 w-screen px-[120px] py-6 flex justify-between items-center bg-black text-white">
      <h1>HeaderTitle</h1>
      <nav>
        <ul className="flex justify-between gap-4">
          {NAVIGATION_LINK.map((item: NavLinksProps) => {
            return <NavLink {...item} />;
          })}
        </ul>
      </nav>
      <button>Contact us</button>
    </header>
  );
};
