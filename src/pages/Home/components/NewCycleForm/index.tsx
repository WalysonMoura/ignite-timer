import { zodResolver } from "@hookform/resolvers/zod";
import * as Style from "./style";
import * as zod from "zod";
import { useForm, useFormContext } from "react-hook-form";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <Style.FormContainer>
      <label htmlFor="task">Vou trabalhar as</label>
      <Style.TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register("task", {})}
      />

      <details id="task-suggestions">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </details>

      <label htmlFor="minutesAmount"></label>
      <Style.MinutesAmountInput
        type="number"
        id="minutesAmount"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
    </Style.FormContainer>
  );
}
