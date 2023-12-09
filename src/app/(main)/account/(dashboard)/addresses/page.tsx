import AddressesTemplate from "@modules/account/templates/addresses-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Direccion",
  description: "Ve tus direcciones.",
}

export default function Addresses() {
  return <AddressesTemplate />
}
