import * as yup from "yup";

import { Container, Form, Logo } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Hexagon } from "phosphor-react";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";

export function SignIn() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <div className="flex-desktop">
        <Logo className="food-explorer">
          <Hexagon size={49} weight="fill"/>

          <h1>food explorer</h1>
        </Logo>

        <Form >
            <h2>Faça login</h2>
            
            <div>
              <span>Email</span>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Exemplo: exemplo@exemplo.com.br"
                />
            </div>
            <div>
              <span>Senha</span>
                <Input
                  type="password" 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="No mínimo 6 caracteres"
                />
            </div>

            <Button 
              onClick={handleSignIn}
              type="button" 
              title="Entrar" 
            />

            <Link to="/register">
              Criar uma conta
            </Link>
          </Form>
      </div>
        </Container>

  )
}