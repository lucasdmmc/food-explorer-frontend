import { Container, Content, GoBack } from "./styles";
import { Header } from "../../components/Header"
import { CaretLeft, Plus, UploadSimple, X } from "phosphor-react";
import { Input } from "../../components/Input";
import { Textarea } from "./components/Textarea";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function AddDish() {
  return (
    <Container>
      <Header />

      <GoBack>
        <button>
          <CaretLeft size={26}/>
          Voltar
        </button>
        <h1>Adicionar prato</h1>
      </GoBack>


      <Content>
        <div className="part-1">
          <div className="input-one">
            <label className="file" htmlFor="">
            <span>Imagem do prato</span>
              <Input 
                type="file"
                icon={UploadSimple}
              />
            </label>
          </div>

          <div className="input-two">
            <label className="file" htmlFor="">
            <span>Nome</span>
              <Input 
                type="text"
                placeholder="Ex: Salada Ceasar"
              />
            </label>
          </div>

          <div className="select">
            <span>Categoria</span>
            <div className="background">
              <select name="" id="">
                <option value="">Refeição</option>
                <option value="">Sobremesa</option>
                <option value="">Bebidas</option>
              </select>
            </div>
          </div>
        </div>

        <div className="part-2"> 
          <div className="ingredients">
            <span>Ingredientes</span>
            <div className="background">
              <span className="remove">
                Pão Naan
                <X />
              </span>
              <span className="plus">
                Adicionar
                <Plus />
              </span>
            </div>
          </div>

          <div className="price">
            <span>Preço</span>
              <Input 
                type="text"
                placeholder="R$ 00,00"
              />
          </div>

        </div>

        <div className="textarea">
          <span>Descrição</span>
          <Textarea 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
        </div>

        <Button title="Salvar alterações"/>
      </Content>
      <Footer />
    </Container>
  )
}