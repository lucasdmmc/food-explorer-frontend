import { Container, Favorites, AmountFoodContainer, AmountFoodIncluded, AmountFood } from "./styles";
import { FiHeart } from "react-icons/fi";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Minus, Plus } from "phosphor-react";
import { FormatMoney } from "../../utils/FormatMoney"


export function FoodCard({ id, name, description, price, photo}) {
  const { addFood, handleAddFoodInFavorite } = useAuth()
  const [quantity, setQuantity] = useState(1)
  const [isActive, setIsActive] = useState(false)

  const formattedMoney = FormatMoney(price)
  function handleAddFood() {

    const foods = {
      id,
      name,
      description,
      price,
      photo,
    }

    const addToCard = {
      ...foods,
      quantity
    }

    addFood(addToCard)
  }

  function handleIncrease() {
    setQuantity(state => state +1)
  }

  function handleDecrease() {
    setQuantity(state => state -1)
  }

  function handleFavorite() {
    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  return (
    <Container className="embla__slide responsive-card">

      
      <Link to="dish">
        <img src={`/food/${photo}`} alt="" />
      </Link>
      
      <strong>{name}</strong>

      <span className="description">{description}</span>

      <span className="price">{formattedMoney}</span>

      <AmountFoodContainer className="responsive-amountFood">
        <AmountFoodIncluded>
          <AmountFood>
            <button
              disabled={quantity <= 1} 
              onClick={handleDecrease}>
              <Minus size={20}/>
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleIncrease({quantity})}>
              <Plus size={20}/>
            </button>
          </AmountFood>
        </AmountFoodIncluded>
          <Button
            onClick={handleAddFood}
            title="Incluir"
            className="receipt-btn"
          />
      </AmountFoodContainer>


      <Favorites onClick={handleFavorite} isActive={isActive}>
        <FiHeart onClick={() => handleAddFoodInFavorite({ id, name, photo })} size={30}/>
      </Favorites>
    </Container>
  
  )
}