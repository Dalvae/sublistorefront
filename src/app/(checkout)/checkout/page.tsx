"use client"
import CheckoutTemplate from "@modules/checkout/templates"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
// import { Metadata } from "next"
// export const metadata: Metadata = {
//   title: "Checkout",
// }

export default function Checkout() {
  const router = useRouter()
  const [token, setToken] = useState("")

  useEffect(() => {
    // Asegúrate de que el router esté listo antes de acceder a sus propiedades
    if (router.isReady && router.query.token_ws) {
      setToken(router.query.token_ws as string)
    }
  }, [router.isReady, router.query])

  return <CheckoutTemplate token={token} />
}
