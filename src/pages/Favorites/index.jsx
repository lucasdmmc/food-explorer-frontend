import { Container, Favorited, FavoriteFood } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { useAuth } from "../../hooks/useAuth";

export function Favorites() {
  const { favoriteFood, handleRemoveFavoriteFood } = useAuth()
  return (
    <Container>
      <Header />

      <Favorited className="favorite-food-desktop">
        <h1>Meus favoritos</h1>

      <main>
      {favoriteFood.map(food => {
        return (
          <FavoriteFood key={food.id}>
            <img src={`/food/${food.photo}`} alt="" />
            <div>
              <strong>{food.name}</strong>
              <button 
                onClick={() => handleRemoveFavoriteFood(food.id)}>
                  Remover dos Favoritos
                </button>
            </div>
          </FavoriteFood>
        )
      })}
      </main>  
      </Favorited>
      <Footer />
    </Container>
  )
}