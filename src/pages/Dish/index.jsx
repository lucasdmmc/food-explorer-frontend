import { CaretLeft, Minus, Plus, Receipt } from "phosphor-react"
import { Header } from "../../components/Header"
import { AmountFoodIncluded, Container, Content, Food, IngredientsContainer, AmountFood } from "./styles"

import { Ingredients } from "./components/Ingretients/Ingredients"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Link } from "react-router-dom"
import { useState } from "react"
import { MenuMobile } from "../../components/MenuMobile"
import { useAuth } from "../../hooks/useAuth"

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
        
        <Content className="content">
          <Link className="back-home-desktop" to="/">
            <CaretLeft size={24}/>
            Voltar
          </Link>
          <Food className="food-desktop">
            <img src={`/food/autunno.png`} alt="" />
            <div className="food-content">
              <strong>Salada Ravanello</strong>
              <IngredientsContainer className="ingredients">
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                <Ingredients />
              </IngredientsContainer>
            <AmountFoodIncluded >
              <AmountFood>
                <button><Minus size={18}/></button>
                <span>01</span>
                <button><Plus size={18}/></button>
              </AmountFood>
              <Button 
                icon={Receipt}
                title="Pedir ∙ R$ 25,00"
                className="receipt-btn"
              />
            </AmountFoodIncluded>

            </div>
          </Food>
        </Content>
          <Footer />
      </Container>
    </>
  )
}