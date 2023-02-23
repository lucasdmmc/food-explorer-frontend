import { Input } from "../Input";
import { Container, Content, LogoName, ReceiptButton, ReceiptButtonContainer } from "./styles";
import { FiSearch } from "react-icons/fi"
 
import logoIcon from "../../assets/logo-icon.svg"
import receiptIcon from "../../assets/receipt.svg"
import logoutIcon from "../../assets/logout.svg"

export function Header() {
  return (
    <Container>
      <Content>
        <LogoName>
          <img src={logoIcon} alt="" />
          <span>food explorer</span>
        </LogoName>
        
        <Input
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
      </Content>

      <ReceiptButtonContainer>
        <ReceiptButton>
          <img src={receiptIcon} alt="" />
          <span>Pedidos (0)</span>
        </ReceiptButton>

        <img src={logoutIcon} alt="" />
      </ReceiptButtonContainer>
    </Container>
  )
}