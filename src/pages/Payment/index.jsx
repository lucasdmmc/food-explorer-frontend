import { FullHeader } from "../../components/FullHeader";
import { Container, Content, Food, FoodInformation, PaymentMethods, Summary } from "./styles";
import { Footer } from "../../components/Footer"
import imgFood from "../../assets/food/autunno.png"
export function Payment() {
  return (
    <Container>
      <FullHeader />

      <Content>
        <Summary>
          <strong>Meu pedido</strong>
          <FoodInformation>
            <img src={imgFood} alt="" />
            <Food>
              <span className="name">1 x  Salada Radish</span>
              <span className="price">R$ 25,97</span><br />
              <button>
                Excluir
              </button>
            </Food>
          </FoodInformation>
          <FoodInformation>
            <img src={imgFood} alt="" />
            <Food>
              <span className="name">1 x  Salada Radish</span>
              <span className="price">R$ 25,97</span><br />
              <button>
                Excluir
              </button>
            </Food>
          </FoodInformation>
          <FoodInformation>
            <img src={imgFood} alt="" />
            <Food>
              <span className="name">1 x  Salada Radish</span>
              <span className="price">R$ 25,97</span><br />
              <button>
                Excluir
              </button>
            </Food>
          </FoodInformation>
          <FoodInformation>
            <img src={imgFood} alt="" />
            <Food>
              <span className="name">1 x  Salada Radish</span>
              <span className="price">R$ 25,97</span><br />
              <button>
                Excluir
              </button>
            </Food>
          </FoodInformation>
          <span>Total: R$ 103,88</span>
        </Summary>

        <PaymentMethods>
          <strong>Pagamento</strong>
        </PaymentMethods>

      </Content>
      <Footer />
    </Container>
  )
}