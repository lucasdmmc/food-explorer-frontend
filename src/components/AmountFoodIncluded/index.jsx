import { FiMinus, FiPlus } from "react-icons/fi";
import { Button } from "../Button";
import { Container, FoodAmount } from "./styles";

export function AmountFoodIncluded({ children }) {
  return (
    <Container>
      <FoodAmount>
        <button className="minus" >
          <FiMinus size={24}/>
        </button>

        <span>01</span>

        <button className="plus" >
          <FiPlus size={24}/>
        </button>

        {children}
      </FoodAmount>
    </Container>
  )
}