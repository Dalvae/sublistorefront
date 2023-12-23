import { useCart, useUpdatePaymentSession } from "medusa-react"
import { useCallback } from "react"

const useCheckoutActions = () => {
  const { cart } = useCart()
  const updatePaymentSession = useUpdatePaymentSession(cart?.id || "")

  const handleTransbankResponse = useCallback(async () => {
    const queryParams = new URLSearchParams(window.location.search)
    const tokenWs = queryParams.get("token_ws")

    if (
      cart?.id &&
      tokenWs &&
      cart.payment_session &&
      !cart.payment_session.data.transbankTokenWs
    ) {
      console.log("TokenWS encontrado")
      try {
        await updatePaymentSession.mutateAsync({
          provider_id: cart.payment_session.provider_id,
          data: {
            transbankTokenWs: tokenWs,
          },
        })
        console.log("Sesión de pago actualizada con Transbank")
      } catch (error) {
        console.error("Error al manejar la respuesta de Transbank:", error)
      }
    }
  }, [])

  return {
    handleTransbankResponse,
  }
}

export default useCheckoutActions
