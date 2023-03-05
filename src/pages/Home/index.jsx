import { Header } from "../../components/Header";
import { Meals } from "../../components/OurFood/meals";


import introImg from "../../../src/assets/intro.png"
import introMobileImg from "../../../src/assets/intro-mobile.png"
import { Section } from "../../components/Section"
import { MenuMobile } from "../../components/MenuMobile";
import { useEffect, useState } from "react";
import { Container, Intro, IntroInformation, Main } from "./styles";
import { Desserts } from "../../components/OurFood/desserts";
import { Drinks } from "../../components/OurFood/drinks";
import { Footer } from "../../components/Footer";

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

      <Main>
        <Intro isMobile={false} isDesktop className="intro-desktop">
          <img className="intro-img-desktop" src={introImg} alt="" />
          <img className="intro-img-mobile" src={introMobileImg} alt="" />
          <IntroInformation className="intro-information-desktop">
            <strong>Sabores inigualáveis</strong>
            <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
          </IntroInformation>
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
      </Main>
      </Container>
    </>
  )
}