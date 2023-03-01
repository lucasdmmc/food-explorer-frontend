import { Container } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";
import { Hexagon } from "phosphor-react";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  async function signIn({ email, password }) {
  try {
    const response = await api.post("/sessions", { email, password });
    console.log(response.data)
  } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possivel entrar")
      }
    }
  }

  function handleSignIn() {
    signIn({ email, password })
  }


  return (
    <Container>
      <div>
        <Hexagon size={49} weight="fill"/>

        <h1>food explorer</h1>
      </div>


      <form action="">
        <h2>Faça login</h2>

        <label htmlFor="">
          Email
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </label>
        <label htmlFor="">
          Senha
          <Input
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="No mínimo 6 caracteres"
          />
        </label>

        <Button 
          onClick={handleSignIn}
          type="button" 
          title="Entrar" 
        />

        <Link to="/register">
          Criar uma conta
        </Link>
      </form>
    </Container>
  )
}