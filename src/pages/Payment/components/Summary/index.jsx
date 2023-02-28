import { Container, Food, FoodInformation } from "./styles";

import imgFood from "../../../../../public/food/autunno.png"


export function Summary() {
  return (
    <Container>
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
    </Container>
  )
}