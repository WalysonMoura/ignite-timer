import { Play } from "phosphor-react";
import * as Style from "./style";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "o ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "o ciclo precisa ser de no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const task = watch("task");
  const isSubmitDisabled = !task;

  function handleCreateNewCycle(data: NewCycleFormData) {
    reset()
  }

  return (
    <Style.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <Style.FormContainer>
          <label htmlFor="task">Vou trabalhar as</label>
          <Style.TaskInput
            type="text"
            id="task"
            list="task-suggestions"
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
            {...register("minutesAmount", { valueAsNumber: true })}
          />
        </Style.FormContainer>

        <Style.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Style.Separator>:</Style.Separator>
          <span>0</span>
          <span>0</span>
        </Style.CountdownContainer>

        <Style.StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </Style.StartCountdownButton>
      </form>
    </Style.HomeContainer>
  );
}
