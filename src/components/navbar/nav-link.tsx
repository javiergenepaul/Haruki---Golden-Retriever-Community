import React from "react";
import { NavLinksProps } from "./navigation-props";

export const NavLink = (props: NavLinksProps) => {
  const { title, href } = props;
  return (
    <li className="py-0.5 px-2">
      <a className="text-[#44280E] text-large font-semibold" href={href}>
        {title}
      </a>
    </li>
  );
};
