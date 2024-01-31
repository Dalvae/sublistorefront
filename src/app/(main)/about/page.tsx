import React from "react"
import Image from "next/image"

export default function About() {
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
        <div className="pt-0 lg:pt-16">
          <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">
            ¿Quiénes Somos?
          </h1>
        </div>
        <div className="flex-1 flex flex-col justify-center h-full lg:pb-32">
          <p className="text-md text-gray-700 self-center text-justify">
            Mi Nombre es Myriam, creadora de Sublimahyca, pequeña tienda de
            regalos, con artículos personalizados, que nació en post pandemia,
            por la necesidad de dejar mi trabajo para ser cuidadora de mi madre.
            Se me hizo fácil inclinarme por este nombre, pues incluye mis
            iniciales y las iniciales de Casablanca, comuna de la V región con
            el valle más hermoso del mundo y que nos acogió hace algunos años.
            <p className=" text-md text-gray-700 self-center text-justify mt-3">
              {" "}
              La &quot;magia&quot; que se puede inferir de sus letras es lo que
              me inspiró, pues mi objetivo es añadir un toque mágico a cada
              producto, convirtiéndolo en algo único y especial, porque en
              Sublimahyca creemos que la magia de los regalos es que sean únicos
              y especiales para cada persona. Desde la selección cuidadosa de
              materiales hasta la atención meticulosa a los detalles, cada
              artículo que entregamos es una expresión de calidad y dedicación.
              Nos esforzamos por ofrecer no solo productos personalizados, sino
              experiencias que te hagan sonreír cada vez que los utilizas.
            </p>
            <p className=" text-md text-gray-700 self-center text-justify mt-3">
              {" "}
              En SUBLIMAHYCA, tu creatividad es nuestra guía para que
              &quot;magia&quot; no sea solo una palabra si no también un
              compromiso de que cada creación lleva consigo un diseño para
              inspirar sonrisas y crear recuerdos duraderos. Te invitamos a
              conocer nuestro trabajo. ¡Bienvenido a SUBLIMAHYCA, donde la magia
              se convierte en realidad!
            </p>
          </p>
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
