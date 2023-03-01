import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Cycle, cyclesrReducer } from "../reducers/cycles/reducer";
import { interruptCurrentCycleAction } from "../reducers/cycles/actions";
import { markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions";
import { addNewCycleAction } from "../reducers/cycles/actions";

interface CreateCycleDate {
  task: string;
  minutesAmount: number;
}

interface CycleContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;

  markCurrentCycleAsFinished: () => void;
  setSecundsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleDate) => void;
  interruptCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CycleContextType);

interface CyclesContextProviderProsps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProsps) {
  const [cyclesState, dispatch] = useReducer(cyclesrReducer, {
    cycles: [],
    activeCycleId: null,
  }, () => {
    const storageStateAsJSON = localStorage.getItem("@ignite-timer:cycles-state-1.0.0");

    if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON);
    }
  });

  const { cycles, activeCycleId } = cyclesState;

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id == activeCycleId);

  function setSecundsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function createNewCycle({ task, minutesAmount }: CreateCycleDate) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));

    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecundsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
