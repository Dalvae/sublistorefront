import { useCheckout } from "@lib/context/checkout-context"
import { Heading, Text, clx } from "@medusajs/ui"
import PaymentButton from "../payment-button"

const Review = () => {
  const {
    cart,
    editPayment: { state: isEditPayment },
    editAddresses: { state: isEditAddresses },
    editShipping: { state: isEditShipping },
  } = useCheckout()

  const previousStepsCompleted =
    !!cart?.shipping_address &&
    !!cart.shipping_methods?.[0]?.shipping_option.id &&
    !!cart?.payment_sessions

  const editingOtherSteps = isEditAddresses || isEditShipping || isEditPayment

  return (
    <div className="bg-white px-4 small:px-8">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none": editingOtherSteps,
            }
          )}
        >
          Review
        </Heading>
      </div>
      {!editingOtherSteps && previousStepsCompleted && (
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <Text className="txt-medium-plus text-ui-fg-base mb-1">
                Al hacer clic en el botón de "Realizar pedido", confirmas que
                has leído, comprendido y aceptado nuestros Términos de Uso,
                Términos de Venta y Política de Devoluciones, y reconoces que
                has leído la Política de Privacidad de Medusa Store.
              </Text>
            </div>
          </div>
          <PaymentButton paymentSession={cart?.payment_session} />
        </>
      )}
    </div>
  )
}

export default Review
