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

  const handleWebpayTest = async () => {
    if (cart && cart.payment_session && cart.payment_session.data) {
      const transbankToken = cart.payment_session.data.transbankToken
      const redirectUrl = cart.payment_session.data.redirectUrl

      if (
        typeof transbankToken === "string" &&
        typeof redirectUrl === "string"
      ) {
        setTransbankData({ token: transbankToken, url: redirectUrl })
      } else {
        console.log(
          "Datos de Transbank o URL de redireccionamiento no encontrados"
        )
      }
    } else {
      console.log("Datos del carrito o de la sesión de pago no disponibles")
    }
  }

  return (
    <>
      <button
        onClick={handleWebpayTest}
        style={{ backgroundColor: "#561456", color: "white" }}
      >
        Test Webpay Payment
      </button>
      {transbankData && (
        <form method="post" action={transbankData.url}>
          <input type="hidden" name="token_ws" value={transbankData.token} />
          <input type="submit" value="Ir a pagar" />
        </form>
      )}
    </>
  )
}

export default TestWebpayButton
