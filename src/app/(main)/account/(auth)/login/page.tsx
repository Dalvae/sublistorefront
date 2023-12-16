import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Inicia sección a tu cuenta Sublimahyca.",
}

export default function Login() {
  return <LoginTemplate />
}
