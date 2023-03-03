import { X } from "phosphor-react";
import { FiSearch } from "react-icons/fi";
import { Input } from "../Input";
import { Container, Content, Header, Links } from "./styles";
import { Footer } from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  function handleSignOut() {
    navigate("/")
    signOut();
  }

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
            <Link to="/order">
              Histórico de pedidos
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              Meu favoritos
            </Link>
          </li>
          <li>
            <Link onClick={handleSignOut}>
              Sair
            </Link>
          </li>
        </ul>
      </Links>

    </Content>
    <Footer />
    </Container>
  )
}