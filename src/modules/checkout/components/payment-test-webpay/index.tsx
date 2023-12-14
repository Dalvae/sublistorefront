import React, { useState } from "react"
import { useCart } from "medusa-react"

// Define una interfaz para los datos de Transbank
interface TransbankData {
  token: string
  url: string
}

const TestWebpayButton = () => {
  const { cart } = useCart()
  const [transbankData, setTransbankData] = useState<TransbankData | null>(null)
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  const handleWebpayTest = async () => {
    if (cart && cart.payment_session && cart.payment_session.data) {
      const transbankToken = cart.payment_session.data.transbankToken
      const redirectUrl = cart.payment_session.data.redirectUrl

      if (
        typeof transbankToken === "string" &&
        typeof redirectUrl === "string"
      ) {
        setTransbankData({ token: transbankToken, url: redirectUrl })
        setIsDataLoaded(true)
      } else {
        console.log(
          "Datos de Transbank o URL de redireccionamiento no encontrados"
        )
      }
    } else {
      console.log("Datos del carrito o de la sesión de pago no disponibles")
    }
  }

  const handleSubmit = () => {
    if (transbankData) {
      const form = document.createElement("form")
      form.method = "post"
      form.action = transbankData.url

      const hiddenField = document.createElement("input")
      hiddenField.type = "hidden"
      hiddenField.name = "token_ws"
      hiddenField.value = transbankData.token

      form.appendChild(hiddenField)
      document.body.appendChild(form)
      form.submit()
    }
  }

  return (
    <button
      onClick={isDataLoaded ? handleSubmit : handleWebpayTest}
      style={{ backgroundColor: "#561456", color: "white" }}
    >
      {isDataLoaded ? "Ir a pagar" : "Test Webpay Payment"}
    </button>
  )
}

export default TestWebpayButton
