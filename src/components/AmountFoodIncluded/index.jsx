import { FiMinus } from "react-icons/fi";
import { Button } from "../Button";
import { Container, FoodAmount } from "./styles";

export function AmountFoodIncluded() {
  return (
    <Container>
      <FoodAmount>
        <button className="minus" >
          <FiMinus size={24}/>
        </button>

        <span>01</span>

        <button className="minus" >
          <FiMinus size={24}/>
        </button>
      </FoodAmount>

      <Button title="incluir ∙ R$ 25,00"/>
    </Container>
  )
}