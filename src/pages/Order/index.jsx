
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, Status, Table } from "./styles";

export function Order() {
  return (
    <Container>
      <Header />

      <h1>Histórico de pedidos</h1>

      <Table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Código</th>
            <th>Detalhamento</th>
            <th>Data e hora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Status variant="red">Pendente</Status>
            </td>
            <td>000000004</td>
            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>
              <Status variant="yellow">Preparando</Status>
            </td>
            <td>000000004</td>
            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td><Status variant="green">Entregue</Status></td>
            <td>000000004</td>
            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td><Status variant="green">Entregue</Status></td>
            <td>000000004</td>
            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
            <td>20/05 às 18h00</td>
          </tr>
        </tbody>
      </Table>
      <Footer />
    </Container>
  )
}