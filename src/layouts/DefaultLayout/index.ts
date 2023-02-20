import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import * as Style from "./style";


export function DefaultLayout() {
  return   
    (
    <Style.LayoutConteiner>
      <Header />
      <Outlet/>
    </Style.LayoutConteiner>
    )
  
}
