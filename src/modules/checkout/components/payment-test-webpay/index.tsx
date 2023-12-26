import React, { useState, useEffect } from "react"
import { useCart } from "medusa-react"
import useCheckoutActions from "@lib/hooks/use-changepayment-data"
import { useCheckout } from "@lib/context/checkout-context"
import useGenerateNewBuyOrder from "@lib/hooks/use-generateNewBuyOrder"

interface TransbankData {
  token: string
  url: string
  buyOrder?: string
}

const WebpayButton = () => {
  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()
  const [transbankData, setTransbankData] = useState<TransbankData | null>(null)
  const [paymentCompletado, setPaymentCompletado] = useState(false)
  const { handleTransbankResponse } = useCheckoutActions()
  const { generateNewBuyOrderAndUpdateSession } = useGenerateNewBuyOrder()
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const tokenWs = queryParams.get("token_ws")

    const handleResponse = async () => {
      await handleTransbankResponse()
      setPaymentCompletado(true)
    }

    if (tokenWs && !paymentCompletado) {
      handleResponse()
    }
    if (cart?.payment_session?.data) {
      const { transbankToken, redirectUrl, buyOrder, transbankTokenWs } =
        cart.payment_session.data
      console.log("Transbank Session Data:", cart.payment_session.data)

      if (paymentCompletado || !!transbankTokenWs) {
        onPaymentCompleted()
      } else if (
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
  }, [cart, handleTransbankResponse, paymentCompletado])

  const handleSubmit = async () => {
    if (transbankData && transbankData.token && transbankData.url) {
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
        disabled={
          !transbankData ||
          paymentCompletado ||
          (cart?.payment_session?.data &&
            !!cart.payment_session.data.transbankTokenWs)
        }
      >
        Ir a pagar
      </button>
    </div>
  )
}
export default WebpayButton
