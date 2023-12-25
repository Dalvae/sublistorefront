import { useCart, useUpdatePaymentSession } from "medusa-react"
import { useCallback } from "react"
import { v4 as uuidv4 } from "uuid" // Asegúrate de tener esta dependencia

const useGenerateNewBuyOrder = () => {
  const { cart } = useCart()
  const updatePaymentSession = useUpdatePaymentSession(cart?.id || "")

  const generateNewBuyOrderAndUpdateSession = useCallback(async () => {
    // Genera un nuevo buyOrder
    const newBuyOrder = uuidv4().replace(/-/g, "").substring(0, 26)

    if (cart?.id && cart.payment_session) {
      try {
        await updatePaymentSession.mutateAsync({
          provider_id: cart.payment_session.provider_id,
          data: {
            ...cart.payment_session.data,
            buyOrder: newBuyOrder, // Actualiza con el nuevo buyOrder
          },
        })
        console.log("Sesión de pago actualizada con nuevo buyOrder")
      } catch (error) {
        console.error("Error al actualizar la sesión de pago:", error)
      }
    }
  }, [cart, updatePaymentSession])

  return {
    generateNewBuyOrderAndUpdateSession,
  }
}

export default useGenerateNewBuyOrder
