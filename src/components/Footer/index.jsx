import { Hexagon } from "phosphor-react";
import { Container } from "./styles";


export function Footer() {
  return (
    <Container className="container">
      <div className="responsive-logo-footer">
        <Hexagon size={30} weight="fill"/>
        <span>food explorer</span>
      </div>

      <strong>© 2023 - Todos os direitos reservados.</strong>
    </Container>
  )
}