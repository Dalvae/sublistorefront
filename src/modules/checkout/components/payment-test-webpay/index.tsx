import React, { useState, useEffect } from "react"
import { useCart } from "medusa-react"

// Define una interfaz para los datos de Transbank
interface TransbankData {
  token: string
  url: string
  buyOrder?: string
  transbankTokenWs?: string
}

const WebpayButton = () => {
  const { cart } = useCart()
  const [transbankData, setTransbankData] = useState<TransbankData | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search)
      const tokenWs = queryParams.get("token_ws")

      // Actualiza el estado con los datos de Transbank y el token_ws
      setTransbankData((prevData) => {
        const defaultData = {
          token: "",
          url: "",
          buyOrder: "",
          transbankTokenWs: "",
        }

        const newData = prevData ? { ...prevData } : defaultData

        return {
          ...newData,
          transbankTokenWs: tokenWs || newData.transbankTokenWs,
        }
      })
    }
  }, [])

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
    </div>
  )
}

export default WebpayButton
