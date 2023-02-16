import { HandPalm, Play } from "phosphor-react";
import * as Style from "./style";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import { useEffect, useState } from "react";
import { differenceInBusinessDays, differenceInSeconds } from "date-fns";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "o ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "o ciclo precisa ser de no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secundsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secundsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id == activeCycleId) {
                return {
                  ...cycle,
                  interruptedDate: new Date(),
                };
              } else {
                return cycle;
              }
            })
          );

          setAmountSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setAmountSecondsPassed(secundsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleCreateNewCycle({ task, minutesAmount }: NewCycleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);

    setAmountSecondsPassed(0);
    reset();
  }

  function handleInterruptCycle() {
    setActiveCycleId(null);

    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id == activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date(),
          };
        } else {
          return cycle;
        }
      })
    );

    setActiveCycleId(null);
  }

  const activeCycle = cycles.find((cycle) => cycle.id == activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secundsAmount = currentSeconds % 60;

  const secunds = String(minutesAmount).padStart(2, "0");
  const minutes = String(secundsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${secunds}`;
    }
  }, [minutes, secunds, activeCycle]);

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <Style.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
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

        <Style.CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Style.Separator>:</Style.Separator>
          <span>{secunds[0]}</span>
          <span>{secunds[1]}</span>
        </Style.CountdownContainer>

        {activeCycle ? (
          <Style.StoptCountdownButton
            onClick={handleInterruptCycle}
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
