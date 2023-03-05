import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button";
import { Container, FoodAmount } from "./styles";

export function AmountFoodIncluded({ children }) {
  const { foodQuantity, handleAddFood, foods } = useAuth()
  const [quantity, setQuantity] = useState(1)

  function handleAddFoodInQuantity() {
    const foodToAdd = {
      ...foods,
      quantity,
    }
    handle
  }

  function handleIncrease() {
    setQuantity(state => state +1)
  }

  function handleDecrease() {
    setQuantity(state => state -1)
  }

  return (
    <>
    <Container>
      <FoodAmount className="food-amount">
        <button
          disabled={quantity <= 1}
          onClick={handleDecrease} 
          className="minus" >
          <FiMinus size={24}/>
        </button>

        <span>{quantity}</span>

        <button onClick={handleIncrease} className="plus" >
          <FiPlus size={24}/>
        </button>

      </FoodAmount>
    </Container>
    
    {children}
    </>
  )
}