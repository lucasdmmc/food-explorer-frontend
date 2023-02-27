import { Container } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

import { Hexagon } from "phosphor-react";

export function SignUp() {
  return (
    <Container>
      <div>
        <Hexagon size={49} weight="fill"/>
        <h1>food explorer</h1>
      </div>


      <form action="">
        <h2>Crie sua conta</h2>

        <label htmlFor="">
          Seu nome
          <Input placeholder="Exemplo: Maria da Silva"/>
        </label>
        <label htmlFor="">
          Email
          <Input placeholder="Exemplo: exemplo@exemplo.com.br"/>
        </label>
        <label htmlFor="">
          Senha
          <Input placeholder="No mínimo 6 caracteres"/>
        </label>

        <Button title="Criar conta" />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </form>
    </Container>
  )
}