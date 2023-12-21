import { useCart, useUpdatePaymentSession } from "medusa-react"
import { useCallback } from "react"

const useCheckoutActions = () => {
  const { cart } = useCart()
  const updatePaymentSession = useUpdatePaymentSession(cart?.id || "")

  const handleTransbankResponse = useCallback(async () => {
    const queryParams = new URLSearchParams(window.location.search)
    const tokenWs = queryParams.get("token_ws")

    if (cart?.id && tokenWs && cart.payment_session) {
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
  }, [cart, updatePaymentSession])

  // Aquí puedes agregar más acciones relacionadas con el checkout si es necesario

  return {
    handleTransbankResponse,
    // ... otras acciones
  }
}

export default useCheckoutActions
