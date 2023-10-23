import React from "react";
import { NavLinksProps } from "./navigation-props";

export const NavLink = (props: NavLinksProps) => {
  const { title, href } = props;
  return (
    <li>
      <a href={href}>{title}</a>
    </li>
  );
};
