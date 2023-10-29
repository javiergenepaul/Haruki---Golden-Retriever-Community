import React from "react";
import { NAVIGATION_LINK } from "@/constants";
import { NavLink, NavLinksProps } from ".";
import { HarukIcon } from "..";

export const NavigationBar = () => {
  return (
    <header className="fixed top-0 w-screen px-[120px] py-6 flex justify-between items-center bg-[#FFFBF6] bg-opacity-10 backdrop-blur-150 border-b-1 z-10">
      <HarukIcon width="67" height="31" />
      <nav>
        <ul className="flex justify-between gap-10">
          {NAVIGATION_LINK.map((item: NavLinksProps, key: React.Key) => {
            return <NavLink key={key} {...item} />;
          })}
        </ul>
      </nav>
      <button>Contact us</button>
    </header>
  );
};
