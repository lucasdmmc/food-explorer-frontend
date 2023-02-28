import { Container, Favorited, FavoriteFood } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import food from "../../../public/food/salada.png"

export function Favorites() {
  return (
    <Container>
      <Header />
      <h1>Meus favoritos</h1>

      <Favorited>
        <FavoriteFood>
          <img src={food} alt="" />
          <div>
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </FavoriteFood>
        <FavoriteFood>
          <img src={food} alt="" />
          <div>
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </FavoriteFood>
        <FavoriteFood>
          <img src={food} alt="" />
          <div>
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </FavoriteFood>
        <FavoriteFood>
          <img src={food} alt="" />
          <div>
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </FavoriteFood>
        <FavoriteFood>
          <img src={food} alt="" />
          <div>
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </FavoriteFood>
        <FavoriteFood>
          <img src={food} alt="" />
          <div>
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </FavoriteFood>
        <FavoriteFood>
          <img src={food} alt="" />
          <div>
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </FavoriteFood>
        <FavoriteFood>
          <img src={food} alt="" />
          <div>
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </FavoriteFood>
      </Favorited>
      <Footer />
    </Container>
  )
}