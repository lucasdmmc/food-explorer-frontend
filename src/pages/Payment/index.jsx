import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
import { Footer } from "../../components/Footer"

import { Summary } from "./components/Summary";
import { PaymentMethods } from "./components/PaymentMethods";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Payment() {
const { foodQuantity } = useAuth()
const navigate = useNavigate()

  useEffect(() => {
    if(foodQuantity === 0) {
      navigate("/")
    }
  }, [foodQuantity])
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