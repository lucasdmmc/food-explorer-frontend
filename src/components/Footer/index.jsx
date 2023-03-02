import { Hexagon } from "phosphor-react";
import { Container } from "./styles";
import { LogoFooter } from "./styles";

export function Footer() {
  return (
    <Container>
      <LogoFooter>
        <Hexagon size={22} weight="fill"/>
        <strong>Food Explorer</strong>
      </LogoFooter>

      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}