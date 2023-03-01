import { useContext, useEffect, useState } from "react";
import * as Style from "./style";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecundsPassed,
  } = useContext(CyclesContext);

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

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secundsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );

        if (secundsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();

          setSecundsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecundsPassed(secundsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Style.CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Style.Separator>:</Style.Separator>
      <span>{secunds[0]}</span>
      <span>{secunds[1]}</span>
    </Style.CountdownContainer>
  );
}
