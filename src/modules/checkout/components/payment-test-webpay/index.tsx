import React, { useState, useEffect } from "react"
import { useCart, useUpdatePaymentSession } from "medusa-react"

interface TransbankData {
  token: string
  url: string
  buyOrder?: string
  transbankTokenWs?: string
}

const WebpayButton = () => {
  const { cart } = useCart()
  const [transbankData, setTransbankData] = useState<TransbankData | null>(null)
  const [isPaymentSessionUpdated, setIsPaymentSessionUpdated] = useState(false)

  const updatePaymentSession = useUpdatePaymentSession(cart?.id || "")

  useEffect(() => {
    const updateSession = async () => {
      if (
        !isPaymentSessionUpdated &&
        typeof window !== "undefined" &&
        cart?.id &&
        cart.payment_session?.provider_id
      ) {
        const queryParams = new URLSearchParams(window.location.search)
        const tokenWs = queryParams.get("token_ws")

        if (tokenWs) {
          try {
            await updatePaymentSession.mutateAsync({
              provider_id: cart.payment_session.provider_id,
              data: {
                transbankTokenWs: tokenWs,
              },
            })
            console.log("Sesión de pago actualizada:")
            setIsPaymentSessionUpdated(true)
          } catch (error) {
            console.error("Error al actualizar la sesión de pago:", error)
          }
        } else if (cart.payment_session?.data) {
          // Extrae los datos de Transbank si el token_ws no está presente
          const transbankToken =
            typeof cart.payment_session.data.transbankToken === "string"
              ? cart.payment_session.data.transbankToken
              : ""
          const redirectUrl =
            typeof cart.payment_session.data.redirectUrl === "string"
              ? cart.payment_session.data.redirectUrl
              : ""
          const buyOrder =
            typeof cart.payment_session.data.buyOrder === "string"
              ? cart.payment_session.data.buyOrder
              : ""

          setTransbankData({
            token: transbankToken,
            url: redirectUrl,
            buyOrder: buyOrder,
          })
        }
      }
    }

    updateSession()
  }, [cart, updatePaymentSession, isPaymentSessionUpdated])

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
