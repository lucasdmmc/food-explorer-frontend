import { createContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      
      const { user, token } = response.data

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

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}