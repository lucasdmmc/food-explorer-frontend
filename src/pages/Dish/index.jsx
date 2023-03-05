import { CaretLeft, Minus, Plus, Receipt } from "phosphor-react"
import { Header } from "../../components/Header"
import { AmountFoodIncluded, Container, Content, Food, IngredientsContainer, AmountFood } from "./styles"

import { Ingredients } from "./components/Ingretients/Ingredients"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Link } from "react-router-dom"
import { useState } from "react"
import { MenuMobile } from "../../components/MenuMobile"

export function Dish() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Container menuIsVisible={menuIsVisible}>
        <Header setMenuIsVisible={setMenuIsVisible}/>
        
        <Content>
          <Link to="/">
            <CaretLeft size={24}/>
            Voltar
          </Link>

          <Food>
            <img src="" alt="" />
            <strong>Salada Ravanello</strong>
          </Food>

          <IngredientsContainer>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <Ingredients />
          </IngredientsContainer>

          <AmountFoodIncluded>
            <AmountFood>
              <button><Minus size={20}/></button>
              <span>01</span>
              <button><Plus size={20}/></button>
            </AmountFood>
            <Button 
              icon={Receipt}
              title="Pedir ∙ R$ 25,00"
              className="receipt-btn"
            />
          </AmountFoodIncluded>
        </Content>
        <Footer />
      </Container>
    </>
  )
}