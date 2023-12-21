"use client"
import CheckoutTemplate from "@modules/checkout/templates"
// import { useRouter } from "next/router"
import { useEffect, useState } from "react"
// import { Metadata } from "next"
// export const metadata: Metadata = {
//   title: "Checkout",
// }

export default function Checkout() {
  const [token, setToken] = useState("")

  useEffect(() => {
    // Asegúrate de que este código se ejecute solo en el cliente
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const tokenWs = urlParams.get("token_ws")
      if (tokenWs) {
        setToken(tokenWs)
      }
    }
  }, [])

  return <CheckoutTemplate token={token} />
}
