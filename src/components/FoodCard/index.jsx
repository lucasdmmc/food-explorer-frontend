import { Container, Favorites, AmountFoodContainer } from "./styles";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { AmountFoodIncluded } from "../AmountFoodIncluded";
import { useState } from "react";

export function FoodCard({ name, description, price, photo }) {

  const [isActive, setIsActive] = useState(false)

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
        <img src={`/public/food/${photo}`} alt="" />
      </Link>
      
      <strong>{name}</strong>

      <span className="description">{description}</span>

      <span className="price">{price}</span>

      <AmountFoodContainer className="responsive-amountFood">
        <AmountFoodIncluded/>
        <Button title="Incluir" />
      </AmountFoodContainer>


      <Favorites onClick={handleFavorite} isActive={isActive}>
        <FiHeart size={30}/>
      </Favorites>
    </Container>
  
  )
}