/* eslint-disable prettier/prettier */

import { HeaderConteiner } from "./style";
import { Timer, Scroll } from "phosphor-react";
import logoIgnite from "../../assets/logo-Ignite.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderConteiner>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderConteiner>
  );
}
