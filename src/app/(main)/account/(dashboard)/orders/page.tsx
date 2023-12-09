import OrdersTemplate from "@modules/account/templates/orders-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ordenes",
  description: "Revisa tus ordenes anteriores",
}

export default function Orders() {
  return <OrdersTemplate />
}
