import { HandPalm, Play } from "phosphor-react";
import * as Style from "./style";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import { useContext} from "react";


import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "o ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "o ciclo precisa ser de no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { register, handleSubmit, watch, reset } = newCycleForm;

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <Style.HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <Style.StoptCountdownButton
            onClick={interruptCurrentCycle}
            type="button"
          >
            <HandPalm size={24} />
            Começar
          </Style.StoptCountdownButton>
        ) : (
          <Style.StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Interroper
          </Style.StartCountdownButton>
        )}
      </form>
    </Style.HomeContainer>
  );
}
