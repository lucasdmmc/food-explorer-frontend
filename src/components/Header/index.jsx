import { Hexagon, Receipt } from "phosphor-react";
import { useState } from "react";
import { FiLogOut, FiMenu, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import { MenuMobile } from "../MenuMobile";
import { Container, InputContainer, Links, LogoHeader, Navigation } from "./styles";

export function Header({setMenuIsVisible}) {
  // const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      {/* <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      /> */}
      <Container>
        <FiMenu
          onClick={() => setMenuIsVisible(true)}
          className="menu-btn" 
          size={24}
        />

        <LogoHeader className="logo-header">
          <Hexagon size={30} weight="fill"/>
          <strong>Food Explorer</strong>
        </LogoHeader>
      
        <Navigation className="navigation">
          <InputContainer className="input">
            <FiSearch size={24}/>
            <input 
              placeholder="Busque por pratos ou ingredientes"
              type="text" 
            />
          </InputContainer>
          <Links>

            <Link>
              Meus favoritos
            </Link>

            <Link>
              Histórico de pedidos
            </Link>
          </Links>
        </Navigation>

        <div className="btn-order-signout">
          <Button 
            icon={Receipt}
            title={`Pedidos (0)`}
          />
          <FiLogOut size={27}/>
        </div>
        
        <div className="receipt-btn">
          <Receipt size={30}/>
          <span>0</span>
        </div>
      </Container>
    </>

  )
}