
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Content, Status, StatusOrder, StatusOrderContainer, Table } from "./styles";

export function Order() {
  return (
    <Container>
      <Header />


      <Content>
        <strong>Histórico de pedidos</strong>

        <main>
          <StatusOrderContainer className="statusOder-mobile">
            <StatusOrder>
              <span>000004</span>
              <div>
                <Status variant="red">Pendente</Status>
              </div>
              <span>20/05 às 18h00</span>
            </StatusOrder>
            <span>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</span>
          </StatusOrderContainer>

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
                  <Status className="status" variant="red">Pendente</Status>
                </td>
                <td>000000004</td>
                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td>20/05 às 18h00</td>
              </tr>
            </tbody>
          </Table>
      </main>
      </Content>
      <Footer />

    </Container>
  )
}