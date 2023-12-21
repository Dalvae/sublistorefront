import { useCheckout } from "@lib/context/checkout-context"
import React, { useState, useEffect } from "react"
import { useCart } from "medusa-react"

interface TransbankData {
  token: string
  url: string
  buyOrder?: string
}

const WebpayButton = () => {
  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()
  const [transbankData, setTransbankData] = useState<TransbankData | null>(null)
  const [paymentCompleted, setPaymentCompleted] = useState(false) // Estado para controlar la ejecución

  useEffect(() => {
    // Verifica si el token de Transbank está presente y si la transacción ha sido confirmada
    if (cart?.payment_session?.data?.transbankTokenWs && !paymentCompleted) {
      // Aquí debes asegurarte de que la transacción ha sido confirmada exitosamente
      // Quizás necesites una lógica adicional aquí
      onPaymentCompleted()
      setPaymentCompleted(true)
    } else if (cart?.payment_session?.data) {
      const transbankToken = cart.payment_session.data.transbankToken
      const redirectUrl = cart.payment_session.data.redirectUrl
      const buyOrder = cart.payment_session.data.buyOrder

      console.log("Transbank Session Data:", cart.payment_session.data)

      if (
        typeof transbankToken === "string" &&
        typeof redirectUrl === "string" &&
        typeof buyOrder === "string"
      ) {
        setTransbankData({
          token: transbankToken,
          url: redirectUrl,
          buyOrder: buyOrder,
        })
      }
    }
  }, [cart, onPaymentCompleted])

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
