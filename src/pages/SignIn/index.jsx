import { Container } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

import LogoIcon from "../../assets/logo-icon.svg"

export function SignIn() {
  return (
    <Container>
      <div>
        <img src={LogoIcon} alt="" />
        <h1>food explorer</h1>
      </div>


      <form action="">
        <h2>Faça login</h2>

        <label htmlFor="">
          Email
          <Input placeholder="Exemplo: exemplo@exemplo.com.br"/>
        </label>
        <label htmlFor="">
          Senha
          <Input placeholder="No mínimo 6 caracteres"/>
        </label>

        <Button title="Entrar" />

        <Link to="/register">
          Criar uma conta
        </Link>
      </form>
    </Container>
  )
}