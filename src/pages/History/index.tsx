import * as Style from "./style";

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
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>Tarefa</td>
              <td>Tarefa</td>
              <td>Tarefa</td>
            </tr>
          </tbody>
        </table>
      </Style.HistoryList>
    </Style.HistoryContainer>
  );
}
