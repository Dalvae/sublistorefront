import { useMutation } from "@tanstack/react-query"
import { useCart, useUpdatePaymentSession } from "medusa-react"

export const useHandleTransbankResponse = () => {
  const { cart } = useCart()
  const updatePaymentSession = useUpdatePaymentSession(cart?.id || "")

  const handleResponse = async (tokenWs: string) => {
    if (cart?.id && tokenWs && cart.payment_session) {
      try {
        await updatePaymentSession.mutateAsync({
          provider_id: cart.payment_session.provider_id,
          data: {
            transbankTokenWs: tokenWs,
          },
        })
        // Aquí podrías manejar la respuesta, como actualizar el estado del carrito
        console.log("Sesión de pago actualizada con Transbank")
      } catch (error) {
        console.error("Error al manejar la respuesta de Transbank:", error)
        throw error // Propaga el error para su manejo externo
      }
    }
  }

  return handleResponse
}
