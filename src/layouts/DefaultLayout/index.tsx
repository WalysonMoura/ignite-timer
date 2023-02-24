import { Outlet } from "react-router-dom";

import * as Styles from "./style";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <Styles.LayoutConteiner>
      <Header />
      <Outlet />
    </Styles.LayoutConteiner>
  );
}
