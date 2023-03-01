import { Container, Form } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

import { Hexagon } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      console.log(name, email, password)
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possivel cadastrar")
      }
    })
  }
  return (
    <Container>
      <div>
        <Hexagon size={49} weight="fill"/>
        <h1>food explorer</h1>
      </div>


      <Form>
        <h2>Crie sua conta</h2>

        <label htmlFor="">
          Seu nome
          <Input
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="">

          Email
          <Input
            type="text"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Senha
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button
          onClick={handleSignUp}
          title="Criar conta" 
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}