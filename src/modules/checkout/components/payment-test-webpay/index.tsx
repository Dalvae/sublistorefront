import React, { useState, useEffect } from "react"
import { useCart } from "medusa-react"

// Define una interfaz para los datos de Transbank
interface TransbankData {
  token: string
  url: string
}

const WebpayButton = () => {
  const { cart } = useCart()
  const [transbankData, setTransbankData] = useState<TransbankData | null>(null)

  useEffect(() => {
    // Función para cargar los datos de Transbank
    const loadTransbankData = async () => {
      if (cart && cart.payment_session && cart.payment_session.data) {
        const transbankToken = cart.payment_session.data.transbankToken
        const redirectUrl = cart.payment_session.data.redirectUrl

        if (
          typeof transbankToken === "string" &&
          typeof redirectUrl === "string"
        ) {
          setTransbankData({ token: transbankToken, url: redirectUrl })
        }
      }
    }

    // Carga los datos al montar el componente
    loadTransbankData()
  }, [cart])

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
      onClick={handleSubmit}
      style={{ backgroundColor: "#561456", color: "white" }}
      className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 hover:bg-gradient-to-br focus:outline-none focus:ring"
      disabled={!transbankData} // Deshabilita el botón si los datos aún no están cargados
    >
      Ir a pagar
    </button>
  )
}

export default WebpayButton
