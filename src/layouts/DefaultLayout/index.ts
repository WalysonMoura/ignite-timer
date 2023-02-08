import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import { LayoutConteiner } from "./style";
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

export function DefaultLayout() {
  return (
    <LayoutConteiner>
      <Header />
      <Outlet />
    </LayoutConteiner>
  );
}
