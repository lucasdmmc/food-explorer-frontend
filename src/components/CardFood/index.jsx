import { Container, FoodAmountContainer } from "./styles";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { Button } from "../Button";
import { Link, useParams } from "react-router-dom";

export function CardFood({ name, description, price, photo }) {

  const {id} = useParams()

  return (
    <Container className="embla__slide">
      <Link to={`/dish/${id}`}>
        <img src={`/src/assets/food/${photo}`} alt="" />
      </Link>
      
      <strong>{name}</strong>

      <span className="description">{description}</span>

      <span className="price">{price}</span>

      <FoodAmountContainer>
        <button className="minus">
          <FiMinus size={25}/>
        </button>
        <span>01</span>
        <button className="plus">
          <FiPlus size={25}/>
        </button>

        <Button title="Incluir"/>
      </FoodAmountContainer>
      <button>
        <FiHeart size={30}/>
      </button>
    </Container>
  
  )
}