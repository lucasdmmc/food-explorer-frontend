import { Header } from "../../components/Header";
import { Container, ImgPosition, Intro } from "./styles";

import introImg from "../../../src/assets/intro.png"
import { Section } from "../../components/Section";
import { Desserts } from "../../components/OurFood/desserts";
import { Meals } from "../../components/OurFood/meals";
import { Drinks } from "../../components/OurFood/drinks";
import { Footer } from "../../components/Footer";
import { MenuMobile } from "../../components/MenuMobile";
import { useState } from "react";

export function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
    <Container menuIsVisible={menuIsVisible}>
      <Header setMenuIsVisible={setMenuIsVisible}/>
      <main className="responsive-main">
        <Intro className="intro">

          <ImgPosition>
            <img src={introImg} alt="" />
          </ImgPosition>

          <div className="intro-text">
            <strong>Sabores Inigualáveis</strong>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </Intro>

        <Section title="Refeições">
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
    </>
  )
}