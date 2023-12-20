import React, { useState, useEffect } from "react"
import { useCart } from "medusa-react"
import { useRouter } from "next/router"

// Define una interfaz para los datos de Transbank
interface TransbankData {
  token: string
  url: string
  buyOrder?: string // Agrega la propiedad buyOrder
}

const WebpayButton = () => {
  const { cart } = useCart()
  const [transbankData, setTransbankData] = useState<TransbankData | null>(null)
  const router = useRouter() // Utiliza useRouter para acceder a la URL actual y sus parámetros

  useEffect(() => {
    // Verificar si estamos en el lado del cliente
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search)
      const tokenWs = queryParams.get("token_ws")

      if (tokenWs) {
        console.log("Token WS recibido:", tokenWs)
        // Procesar el token_ws y confirmar la transacción
      } else if (cart?.payment_session?.data) {
        // Carga los datos de Transbank si el token_ws no está presente
        const transbankData = cart.payment_session.data
        const transbankToken =
          typeof transbankData.transbankToken === "string"
            ? transbankData.transbankToken
            : ""
        const redirectUrl =
          typeof transbankData.redirectUrl === "string"
            ? transbankData.redirectUrl
            : ""
        const buyOrder =
          typeof transbankData.buyOrder === "string"
            ? transbankData.buyOrder
            : ""

        setTransbankData({ token: transbankToken, url: redirectUrl, buyOrder })
      }
    }
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

  const handleTestClick = () => {
    if (transbankData) {
      console.log("Buy Order:", transbankData.buyOrder) // Hace console.log del buyOrder
    }
  }

  return (
    <div>
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: "#561456", color: "white" }}
        className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 hover:bg-gradient-to-br focus:outline-none focus:ring gap-x-1.5 px-3 py-1.5 !min-h-[0] h-10"
        disabled={!transbankData} // Deshabilita el botón si los datos aún no están cargados
      >
        Ir a pagar
      </button>
      <button
        onClick={handleTestClick}
        style={{ backgroundColor: "green", color: "white" }}
        className="rounded-md ml-2"
      >
        Test
      </button>
    </div>
  )
}

export default WebpayButton
