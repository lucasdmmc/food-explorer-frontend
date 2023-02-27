import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
import { Footer } from "../../components/Footer"

import { Summary } from "./components/Summary";
import { PaymentMethods } from "./components/PaymentMethods";

export function Payment() {
  return (
    <Container>
      <Header />
    
    <main>
      <Content>
        <Summary />
        <PaymentMethods />
      </Content>

      <Footer />
    </main>
      
    </Container>
  )
}