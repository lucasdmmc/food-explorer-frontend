import produce from "immer";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [foodItem, setFoodItem] = useState([])
  const [favoriteFood, setFavoriteFood] = useState([])
  console.log(favoriteFood)

  const totalFoodPrice = foodItem.reduce((total, foodItem) => {
    return total + foodItem.price * foodItem.quantity
  }, 0)
  console.log(totalFoodPrice)

  const foodQuantity = foodItem.length

  function addFood({ id, name, description, price, photo, quantity}) {
    const food = {
      id,
      name,
      description,
      price,
      photo,
      quantity
    }

    const foodExistsInSummary = foodItem.
    findIndex(item => item.id === food.id)

    console.log(foodExistsInSummary)

    const newFood = produce(foodItem, (draft) => {
      if(foodExistsInSummary < 0) {
        draft.push(food)
      } else {
        draft[foodExistsInSummary].quantity += food.quantity
      }
    })

    setFoodItem(newFood)
  }

  function handleAddFoodInFavorite({ id, name, photo }) {
    const foodInFavorite = {
      id,
      name,
      photo
    }

    const alreadyExistsFavoriteFood = favoriteFood.find(food => food.id === foodInFavorite.id)

    if( alreadyExistsFavoriteFood) {
      return alert("Você já favoritou esse prato")
      
    } else{
      setFavoriteFood(state => [...state, foodInFavorite])
    }
  }
  
  function handleRemoveFavoriteFood(remove) {
    setFavoriteFood(state => state.filter(state => state.id !== remove))
  }

  function handleRemoveFood(remove) {
    setFoodItem(state => state.filter(food => food.id !== remove))

  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data

      localStorage.setItem("@food-explorer:user", JSON.stringify(user))
      localStorage.setItem("@food-explorer:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
        if(error.response){
          alert(error.response.data.message)
        } else {
          alert("Não foi possivel entrar")
        }
      }
    }
    
    function signOut() {
      localStorage.removeItem("@food-explorer:user")
      localStorage.removeItem("@food-explorer:token")

      setData({})
    }

    useEffect(() => {
      const user = localStorage.getItem("@food-explorer:user")
      const token = localStorage.getItem("@food-explorer:token")

      if(user && token ){
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`
        setData({
          user,
          // user: JSON.parse(user)
        })
      }
    }, [])
  return (
    <AuthContext.Provider value={{ 
      signIn, 
      user: data.user, 
      signOut,
      addFood,
      handleRemoveFood,
      foodItem,
      foodQuantity,
      totalFoodPrice,
      handleAddFoodInFavorite,
      favoriteFood,
      handleRemoveFavoriteFood
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}