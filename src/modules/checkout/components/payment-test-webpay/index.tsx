import React, { useState, useEffect } from "react"
import { useCart } from "medusa-react"

// Define una interfaz para los datos de Transbank
interface TransbankData {
  token: string
  url: string
  buyOrder?: string
  transbankTokenWs?: string // Agregada esta línea
}

const WebpayButton = () => {
  const { cart } = useCart()
  const [transbankData, setTransbankData] = useState<TransbankData | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search)
      const tokenWs = queryParams.get("token_ws")

      if (tokenWs) {
        console.log("Token WS recibido:", tokenWs)
        setTransbankData((prevData) => ({
          ...prevData,
          token: prevData?.token || "",
          url: prevData?.url || "",
          buyOrder: prevData?.buyOrder,
          transbankTokenWs: tokenWs,
        }))
      } else if (cart?.payment_session?.data) {
        // Asumiendo que transbankToken, redirectUrl y buyOrder son de tipo desconocido,
        // los tratamos como cadenas usando aserciones de tipo.
        const transbankToken =
          (cart.payment_session.data.transbankToken as string) || ""
        const redirectUrl =
          (cart.payment_session.data.redirectUrl as string) || ""
        const buyOrder = (cart.payment_session.data.buyOrder as string) || ""

        setTransbankData({
          token: transbankToken, // Ahora se trata como una cadena
          url: redirectUrl, // Ahora se trata como una cadena
          buyOrder: buyOrder, // Ahora se trata como una cadena
        })
      }
    }
  }, [cart])

  useEffect(() => {
    console.log("Transbank Data:", cart?.payment_session?.data)
  }, [transbankData])

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
    <div>
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: "#561456", color: "white" }}
        className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 hover:bg-gradient-to-br focus:outline-none focus:ring gap-x-1.5 px-3 py-1.5 !min-h-[0] h-10"
        disabled={!transbankData}
      >
        Ir a pagar
      </button>
    </div>
  )
}

export default WebpayButton
