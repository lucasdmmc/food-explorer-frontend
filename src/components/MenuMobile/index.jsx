import { X } from "phosphor-react";
import { FiSearch } from "react-icons/fi";
import { Input } from "../Input";
import { Container, Content, Header, Links } from "./styles";
import { Footer } from "../Footer";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <Container isVisible={menuIsVisible}>
      <Header>
        <button onClick={() => setMenuIsVisible(false)}>
          <X size={24}/>
        </button>
        <span>Menu</span>
      </Header>

    <Content>
      <Input
        icon={FiSearch}
        placeholder="Busque por pratos ou ingredientes"
      />

      <Links>
        <ul>
          <li>
            <a href="">Histórico de pedidos</a>
          </li>
          <li>
            <a href="">Meu favoritos</a>
          </li>
          <li>
            <a href="">Sair</a>
          </li>
        </ul>
      </Links>

    </Content>
    <Footer />
    </Container>
  )
}