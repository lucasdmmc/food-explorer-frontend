import { Hexagon, Receipt, SignOut } from "phosphor-react";
import { useAuth } from "../../hooks/useAuth"
import { FiLogOut, FiMenu, FiSearch } from "react-icons/fi";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import { MenuMobile } from "../MenuMobile";
import { Container, InputContainer, Links, LogoHeader, Navigation } from "./styles";

export function Header({setMenuIsVisible}) {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  function handleSignOut() {
    navigate("/")
    signOut();
  }

  return (
    <>
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

            <Link to="/favorites">
              Meus favoritos
            </Link>

            <Link to="/order">
              Histórico de pedidos
            </Link>
          </Links>
        </Navigation>

        <div className="btn-order-signout">
          <Button 
            icon={Receipt}
            title={`Pedidos (0)`}
          />
          <FiLogOut onClick={handleSignOut} size={27}/>
        </div>
        
        <div className="receipt-btn">
          <Receipt size={30}/>
          <span>0</span>
        </div>
      </Container>
    </>

  )
}