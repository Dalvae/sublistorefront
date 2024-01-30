import React from "react"
import Image from "next/image"

export default function Devolucion() {
  return (
    <div className="min-h-[90vh] flex flex-wrap lg:flex-nowrap">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src="/heros.jpeg"
          layout="fill"
          quality={100}
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col p-8 relative">
        <div className="pt-0">
          <h1 className="text-2xl font-semibold text-gray-900 text-center">
            Política de Devolución de Sublimahyca
          </h1>
        </div>
        <div className="flex flex-col justify-start p-8 lg:mb-16 overflow-y-auto">
          <div className="text-md text-gray-700 self-center text-justify">
            <p>
              En Sublimahyca, valoramos a nuestros clientes y queremos asegurar
              su satisfacción. Nuestra política de devolución es la siguiente:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Las devoluciones se pueden realizar dentro de los 30 días
                posteriores a la recepción del producto.
              </li>
              <li>
                Los artículos deben estar en su condición original, sin usar y
                en su empaque original.
              </li>
              <li>
                Los gastos de envío para las devoluciones son por pagar y deben
                realizarse a través de Starken.
              </li>
              <li>
                Para iniciar una devolución, por favor contacta nuestro servicio
                al cliente en ventas@sublimahyca.cl.
              </li>
            </ul>
            <p>
              Tu satisfacción es nuestra prioridad. Si tienes alguna pregunta o
              inquietud acerca de tu producto o nuestra política de devolución,
              no dudes en contactarnos en ventas@sublimahyca.cl
            </p>
          </div>
        </div>
        <img
          className="md:mt-16 w-1/4 absolute bottom-2 right-2"
          src="/logo.png"
          alt="logo sublimahyca"
        />
      </div>
    </div>
  )
}
