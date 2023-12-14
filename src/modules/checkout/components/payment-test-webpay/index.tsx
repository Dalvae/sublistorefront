import React from "react"
import { PaymentSession } from "@medusajs/medusa"
import { useCart } from "medusa-react"

const TestWebpayButton = () => {
  const { cart } = useCart() // Use the useCart hook to access the cart context

  const handleWebpayTest = async () => {
    // Check if the cart and payment session data exist
    if (cart && cart.payment_session && cart.payment_session.data) {
      // Assuming transbankToken and redirectUrl are part of the payment session data
      const transbankToken = cart.payment_session.data.transbankToken
      const redirectUrl = cart.payment_session.data.redirectUrl

      if (transbankToken) {
        console.log("Transbank Token:", transbankToken)
      } else {
        console.log("Transbank Token not found in payment session data")
      }

      if (redirectUrl) {
        console.log("Redirect URL:", redirectUrl)
      } else {
        console.log("Redirect URL not found in payment session data")
      }
    } else {
      console.log("Cart or Payment Session Data is unavailable")
    }
  }

  return <button onClick={handleWebpayTest}>Test Webpay Payment</button>
}

export default TestWebpayButton
