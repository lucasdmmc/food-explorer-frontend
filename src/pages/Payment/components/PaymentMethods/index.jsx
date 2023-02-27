import { useEffect, useState } from "react"
import { Button } from "../../../../components/Button"
import { Input } from "../../../../components/Input"
import { Container, Form, Methods, PixMethod, Validation } from "./styles"

import pix from "../../../../assets/pix.svg"
import credit from "../../../../assets/credit.svg"
import qrCode from "../../../../assets/qr-code.svg"
import { Receipt } from "phosphor-react"

export function PaymentMethods() {
  const [isActivePix, setIsActivePix] = useState(false)
  const [isActiveCredit, setIsActiveCredit] = useState(false)

  function handleActivePix() {
      setIsActivePix(true)
      setIsActiveCredit(false)
  }

  function handleActiveCredit() {
    setIsActiveCredit(true)
    setIsActivePix(false)
  }

  useEffect(() => {
    setIsActivePix(true)

  }, [])
  return (
    <Container>
      <strong>Pagamento</strong>
    
      <div>
        <Methods isActivePix={isActivePix} isActiveCredit={isActiveCredit}>
          <button onClick={handleActivePix} className="pix" >
            <img src={pix} alt="" />
            PIX
          </button>
          <div></div>
          <button onClick={handleActiveCredit} className="credit">
            <img src={credit} alt="" />
            Crédito
          </button>
        </Methods>
      
        {
          isActivePix && 
          <PixMethod>
            <img src={qrCode} alt="" />
          </PixMethod>
        }

        {
          isActiveCredit &&
          <Form action="">
            <div>
              <label htmlFor="">Número do Cartão</label>
              <Input placeholder="0000 0000 0000 0000"/>
            </div>

            <Validation>
              <div>
                <label htmlFor="">Validade</label>
                <Input placeholder="04/25" />
              </div>
              <div>
                <label htmlFor="">CVC</label>
                <Input placeholder="000" />
              </div>
            </Validation>


            <Button              
              type="submit"
              icon={Receipt} 
              title="Finalizar pagamento"
            />
          </Form>
        }
      
      </div>
    </Container>
  )
}