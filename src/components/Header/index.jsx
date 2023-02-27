import { 
  Container, 
  Content, 
  Links, 
  LogoName, 
  ReceiptButton
 } from "./styles";
import { Input } from "../Input";
import { FiMenu, FiSearch } from "react-icons/fi"
import { Button } from "../Button";
import { Hexagon, Receipt, SignOut } from "phosphor-react";

export function Header({ setMenuIsVisible }) {
  return (
    <>
    <Container className="header">
      <div className="responsive-header">
      
        <button onClick={() => setMenuIsVisible(true)}>
          <FiMenu size={28}/>
        </button>
        
        <div className="logo">
          <Hexagon size={30} weight="fill"/>
          <span>food explorer</span>
        </div>

        <button className="receipt">
          <Receipt size={30}/>
          <span>0</span>
        </button>
      </div>

      <Content>
        <LogoName className="logoName">
          <Hexagon size={30} weight="fill"/>
          <span>food explorer</span>
        </LogoName>

        
        <Input
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
          className="search"
        />

        <Links className="links">

          <a href="#" className="a">
            Meus favoritos
          </a>

          <a href="#" >
            Histórico de pedidos
          </a>
        
        </Links>
        </Content>
      <ReceiptButton className="receipt" to="/payment">
        <Button 
          title={`Pedidos (0)`}
          icon={Receipt}
        />

        <SignOut size={35} weight="fill"/>
      </ReceiptButton>
    </Container>
    
    </>
  )
}