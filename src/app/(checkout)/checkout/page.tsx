import CheckoutTemplate from "@modules/checkout/templates"
import { Metadata } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const metadata: Metadata = {
  title: "Checkout",
}

export default function Checkout() {
  const router = useRouter()
  const [token, setToken] = useState("")

  useEffect(() => {
    // Si el token está disponible en la URL, lo establecemos en el estado
    if (router.query.token_ws) {
      setToken(router.query.token_ws as string)
    }
  }, [router.query])

  return <CheckoutTemplate token={token} />
}
