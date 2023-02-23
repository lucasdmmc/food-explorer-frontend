import { Container } from "./styles";

import LogoIcon from "../../assets/logo-icon.svg"

export function Footer() {
  return (
    <Container className="container">
      <div>
        <img src={LogoIcon} alt="" />
        <span>food explorer</span>
      </div>

      <strong>© 2023 - Todos os direitos reservados.</strong>
    </Container>
  )
}