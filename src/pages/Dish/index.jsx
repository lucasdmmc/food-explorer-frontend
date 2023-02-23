import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SelectedFood } from "./components/SelectedFood";
import { BackToHome, Container, Content} from "./styles";

export function Dish() {
  return (
    <Container className="container">
      <Header />

      <Content>
        <BackToHome>
          <FiArrowLeft size={24} />
          <Link to="/">
            <strong>Voltar</strong>
          </Link>
        </BackToHome>

      <SelectedFood />
      </Content>
      <Footer />
    </Container>
  )
}