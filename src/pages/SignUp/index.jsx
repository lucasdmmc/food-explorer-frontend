import { Container, Form, Logo } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link, useNavigate } from "react-router-dom";
import { InputErros } from "../../components/InputErrors";

import { Hexagon } from "phosphor-react";
import { api } from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";


const validationSignUp = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().required("O email é obrigatório"),
  password: yup.string().required("A senha é obrigatória")
  .min(6, "A senha deve ter no minimo 6 caracteres"),
})

export function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSignUp)
  })

  const navigate = useNavigate()

  function handleSubmitSignUp(data) {
    api.post("/users", data)
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    })
  }
  return (
    <Container>
      <div className="flex-desktop">
        <Logo>
          <Hexagon size={49} weight="fill"/>
          <h1>food explorer</h1>
        </Logo>


        <Form onSubmit={handleSubmit(handleSubmitSignUp)}>
          <h2>Crie sua conta</h2>
        
          <div>
            <span>Seu nome</span>
            <Input
              type="text"
              placeholder="Exemplo: Maria da Silva"
              {...register("name")}
            />
            <InputErros title={errors.name?.message}/>
          </div>
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

          <Button title="Criar conta" />

          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </div>
    </Container>
  )
}