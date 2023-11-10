import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perfil",
  description: "Revisa y edita tu perfil de la tienda",
}

export default function Profile() {
  return <ProfileTemplate />
}
