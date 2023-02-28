import { Link } from "react-router-dom";
import { AmountFoodIncluded } from "../../../../components/AmountFoodIncluded";
import { Button } from "../../../../components/Button";
import { Tag } from "../../../../components/Tag";
import { Container, FoodInformation, Tags } from "./styles";

export function SelectedFood() {
  return (
    <Container>
      <img src="/public/food/peachy-pastrie.png" alt="" />
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

          <AmountFoodIncluded>
            <Link to="/payment">
              <Button 
                className="btn-include" 
                title="incluir ∙ R$ 25,00"
              />
            </Link>
          </AmountFoodIncluded>
        </FoodInformation>
    </Container>
  )
}