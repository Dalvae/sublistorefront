import React from "react"

const TestWebpayButton = () => {
  const handleWebpayTest = async () => {
    // Simula la llamada a tu procesador de pagos
    // Reemplaza esto con la lógica real si es posible
    const fakeResponse = {
      url: "https://webpay.example.com/payment-url",
      token: "some-fake-token",
    }

    console.log("Webpay Response:", fakeResponse)
  }

  return <button onClick={handleWebpayTest}>Test Webpay Payment</button>
}

export default TestWebpayButton
