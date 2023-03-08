import { Hexagon, Receipt, SignOut } from "phosphor-react";
import { useAuth } from "../../hooks/useAuth"
import { FiLogOut, FiMenu, FiSearch } from "react-icons/fi";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import { MenuMobile } from "../MenuMobile";
import { Container, InputContainer, Links, LogoHeader, Navigation } from "./styles";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../ErrorMessage";

export function Header({setMenuIsVisible}) {
  const navigate = useNavigate()
  const { signOut, foodQuantity } = useAuth()
  const [error, setError] = useState(false)
  console.log(error)
  function handleSignOut() {
    navigate("/")
    signOut();
  }

  function handleErrorMessage() {
    if(error && foodQuantity <= 0) {
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <>
      {
        error &&
        <ErrorMessage
          title="Você não possui itens no carrinho"
        />
      }
      <Container>
        <FiMenu
          onClick={() => setMenuIsVisible(true)}
          className="menu-btn" 
          size={24}
        />
        <LogoHeader to="/" className="logo-header">
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
          <Link to={foodQuantity > 0 ? `/payment` : "/"}>
            <Button
              icon={Receipt}
              title={`Pedidos (${foodQuantity})`}
              onClick={handleErrorMessage}
            />
          </Link>
          <FiLogOut onClick={handleSignOut} size={27}/>
        </div>
        
        <div className="receipt-btn">
          <Link to={foodQuantity > 0 ? `/payment` : "/"}>
            <Receipt onClick={handleErrorMessage} size={30}/>
            <span>{foodQuantity}</span>
          </Link>
        </div>
      </Container>
    </>

  )
}