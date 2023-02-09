import { Play } from "phosphor-react";
import * as Style from "./style";

export function Home() {
  return (
    <Style.HomeContainer>
      <form action="">
        <Style.FormContainer>
          <label htmlFor="task">Vou trabalhar as</label>
          <Style.TaskInput type="text" id="task" list="task-suggestions"/>

          <details id="task-suggestions">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </details>

          <label htmlFor="minutesAmount"></label>
          <Style.MinutesAmountInput type="number" id="minutesAmount" step={5} min={5} max={60} />
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
