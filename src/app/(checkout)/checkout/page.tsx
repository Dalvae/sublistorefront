// Asegúrate de que la primera línea de tu archivo sea "use client"
"use client"

import CheckoutTemplate from "@modules/checkout/templates"
import { useRouter } from "next/router"
import { Metadata } from "next"
import { useEffect, useState } from "react"

export const metadata: Metadata = {
  title: "Checkout",
}

export default function Checkout() {
  const router = useRouter()
  const [token, setToken] = useState("")

  useEffect(() => {
    if (router.query.token_ws) {
      setToken(router.query.token_ws as string)
    }
  }, [router.query])

  return <CheckoutTemplate token={token} />
}
