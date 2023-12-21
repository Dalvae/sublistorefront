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
    if (router?.isReady) {
      const tokenWs = router.query.token_ws
      if (tokenWs) {
        setToken(tokenWs as string)
      }
    }
  }, [router?.isReady, router?.query])

  return <CheckoutTemplate token={token} />
}
