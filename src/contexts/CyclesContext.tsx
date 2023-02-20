import { createContext } from "react";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CycleContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;

  markCurrentCycleAsFinished: () => void;
  setSecundsPassed: (seconds: number) => void;
}

export const CyclesContext = createContext({} as CycleContextType);

export function CyclesontextProvider() {
    return (
        <CyclesContext.
    )
}