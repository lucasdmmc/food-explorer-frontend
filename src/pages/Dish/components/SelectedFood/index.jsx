import { AmountFoodIncluded } from "../../../../components/AmountFoodIncluded";
import { Tag } from "../../../../components/Tag";
import { Container, FoodInformation, Tags } from "./styles";
// import food from "../../../assets/food/autunno.png"

export function SelectedFood() {
  return (
    <Container>
      <img src="/src/assets/food/autunno.png" alt="" />
        <FoodInformation>
          <strong>Salada Ravanello</strong>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados  <br /> 
            com gergelim. O pão naan dá um toque especial.
          </p>
          
        <Tags>
          <Tag name="alface"/>
          <Tag name="cebola"/>
          <Tag name="pão naan"/>
          <Tag name="pepino"/>
          <Tag name="rabanete"/>
          <Tag name="tomate"/>
        </Tags>

        <AmountFoodIncluded />
        </FoodInformation>
    </Container>
  )
}