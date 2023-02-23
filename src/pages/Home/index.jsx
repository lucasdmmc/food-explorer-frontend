import { Header } from "../../components/Header";
import { Container, ImgPosition, Intro } from "./styles";

import introImg from "../../../src/assets/intro.png"
import { Section } from "../../components/Section";
import { Desserts } from "../../components/OurFood/desserts";
import { Meals } from "../../components/OurFood/meals";
import { Drinks } from "../../components/OurFood/drinks";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Container className="container">
      <Header />
      <main>
        <Intro>
          <ImgPosition>
            <img src={introImg} alt="" />
          </ImgPosition>

          <div>
            <strong>Sabores Inigualáveis</strong>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </Intro>

        <Section title="Reifeições">
          <Meals />
        </Section>
        <Section title="Sobremesas">
          <Desserts />
        </Section>
        <Section title="Bebidas">
          <Drinks />
        </Section>

        <Footer />
      </main>
      
    </Container>
  )
}