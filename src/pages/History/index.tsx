import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import * as Style from "./style";
import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";

const { cycles } = useContext(CyclesContext);

export function History() {
  return (
    <Style.HistoryContainer>
      <h1>Meu histórico</h1>

      <Style.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>pt
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>{formatDistanceToNow(cycle.startDate,{
                    addSuffix: true,
                    locale: ptBR
                  })}</td>
                  <td>
                    {cycle.finishedDate && ( 
                      <Style.Status statusColor="green">Concluído</Style.Status>
                    )}
                    {cycle.interruptedDate && (
                      <Style.Status statusColor="red">
                        Interrompido
                      </Style.Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Style.Status statusColor="yellow">
                        Em andamento
                      </Style.Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Style.HistoryList>
    </Style.HistoryContainer>
  );
}
