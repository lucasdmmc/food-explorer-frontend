import { Container, Favorited, FavoriteFood } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import food from "../../../public/food/salada.png"

export function Favorites() {
  return (
    <Container>
      <Header />

      <Favorited className="favorite-food-desktop">
        <h1>Meus favoritos</h1>

      <main>
        <FavoriteFood >
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
      
      </main>  
      </Favorited>
      <Footer />
    </Container>
  )
}