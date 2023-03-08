import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
 
import { Container, Form, Logo } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Hexagon } from "phosphor-react";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { InputErros } from "../../components/InputErrors";

const validationSignIn = yup.object({
  email: yup.string().required("O email é obrigatório"),
  password: yup.string().required(" A senha é obrigatória"),
})

export function SignIn() {
  const { signIn } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSignIn)
  })

  function handleSubmitSignIn(data) {
    signIn(data)
  }

  return (
    <Container>
      <div className="flex-desktop">
        <Logo className="food-explorer">
          <Hexagon size={49} weight="fill"/>

          <h1>food explorer</h1>
        </Logo>

        <Form onSubmit={handleSubmit(handleSubmitSignIn)}>
            <h2>Faça login</h2>
            
            <div>
              <span>Email</span>
                <Input
                  type="email"
                  placeholder="Exemplo: exemplo@exemplo.com.br"
                  {...register("email")}
                />
                <InputErros title={errors.email?.message}/>
                
            </div>
            <div>
              <span>Senha</span>
                <Input
                  type="password"
                  placeholder="No mínimo 6 caracteres"
                  {...register("password")}
                  />
                  <InputErros title={errors.password?.message}/>
            </div>

            <Button 
              type="submit" 
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