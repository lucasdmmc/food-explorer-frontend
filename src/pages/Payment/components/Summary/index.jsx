import { Container, Food, FoodInformation } from "./styles";

import { useAuth } from "../../../../hooks/useAuth";
import { FormatMoney } from "../../../../utils/FormatMoney";


export function Summary() {
  const { foodItem, totalFoodPrice, handleRemoveFood } = useAuth()

  const foodITemTotal = FormatMoney(totalFoodPrice)
  

  return (
    <Container>
      <strong>Meu pedido</strong>

      {foodItem.map(food => {
        return (
        <FoodInformation key={food.id}>

        <img src={`/food/${food.photo}`} alt="" />
        <Food>
          <span className="name">{food.quantity}x  {food.name}</span>
          <span className="price">{FormatMoney(food.price * food.quantity)}</span><br />
          <button onClick={() => handleRemoveFood(food.id)}>
            Excluir
          </button>
        </Food>
      </FoodInformation>

        )
      })}
      <span>Total: {foodITemTotal}</span>
      
    </Container>
  )
}