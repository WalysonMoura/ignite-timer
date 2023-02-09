import { Play } from "phosphor-react";
import * as Style from "./style";

export function Home() {
  return (
    <Style.HomeContainer>
      <form action="">
        <Style.FormContainer>
          <label htmlFor="task">Vou trabalhar as</label>
          <input type="text" id="task" />

          <label htmlFor="minutesAmount"></label>
          <input type="number" id="minutesAmount" />
        </Style.FormContainer>

        <Style.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Style.Separator>:</Style.Separator>
          <span>0</span>
          <span>0</span>
        </Style.CountdownContainer>

        <Style.StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </Style.StartCountdownButton>
      </form>
    </Style.HomeContainer>
  );
}
