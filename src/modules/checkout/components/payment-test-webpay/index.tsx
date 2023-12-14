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
  const [buyOrder, setBuyOrder] = useState<string | null>(null) // Nuevo estado para almacenar buyOrder
  useEffect(() => {
    // Función para cargar los datos de Transbank
    const loadTransbankData = async () => {
      if (cart && cart.payment_session && cart.payment_session.data) {
        const transbankToken = cart.payment_session.data.transbankToken
        const redirectUrl = cart.payment_session.data.redirectUrl
        const buyOrderFromCart = cart.payment_session.data.buyOrder // Asumiendo que buyOrder se almacena aquí

        if (
          typeof transbankToken === "string" &&
          typeof redirectUrl === "string" &&
          typeof buyOrderFromCart === "string"
        ) {
          setTransbankData({ token: transbankToken, url: redirectUrl })
          setBuyOrder(buyOrderFromCart) // Establecer buyOrder en el estado
          console.log("Buy Order:", buyOrderFromCart) // Realizar console.log de buyOrder
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
      className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 hover:bg-gradient-to-br focus:outline-none focus:ring gap-x-1.5 px-3 py-1.5 !min-h-[0] h-10"
      disabled={!transbankData} // Deshabilita el botón si los datos aún no están cargados
    >
      Ir a pagar
    </button>
  )
}

export default WebpayButton
