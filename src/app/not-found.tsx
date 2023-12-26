import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "Algo salió mal",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-gry-900">Página no encontrada</h1>
      <p className="text-small-regular text-gray-700">
        La página que intentaste acceder no existe.
      </p>
      <Link href="/" className="mt-4 underline text-base-regular text-gray-900">
        Ir a la página principal
      </Link>
    </div>
  )
}
