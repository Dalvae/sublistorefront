import React from "react"
import Image from "next/image"

export default function Privacidad() {
  return (
    <div className="h-[90vh] flex flex-wrap lg:flex-nowrap">
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
            Política de Privacidad de Sublimahyca
          </h1>
        </div>
        <div className="flex flex-col justify-start p-8 lg:mb-16 overflow-y-auto">
          <div className="text-md text-gray-700 self-center text-justify">
            <h2 className="font-semibold text-md mb-2">1. Introducción</h2>
            <p>
              Bienvenido a Sublimahyca. Nos comprometemos a proteger la
              privacidad y seguridad de la información personal de nuestros
              usuarios y visitantes. Esta Política de Privacidad describe cómo
              recopilamos, usamos, compartimos y protegemos la información
              personal.
            </p>

            <h2 className="font-semibold text-md mb-2">
              2. Información que Recopilamos
            </h2>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Nombre y detalles de contacto (como correo electrónico, número
                de teléfono).
              </li>
              <li>Información de la cuenta (usuario y contraseña).</li>
              <li>Datos de transacciones y de pago.</li>
              <li>Interacciones con nuestro sitio web y servicios.</li>
            </ul>

            <h2 className="font-semibold text-md mb-2">
              3. Uso de la Información
            </h2>
            <p>
              Utilizamos la información recopilada para:
              <ul className="list-disc pl-5 mb-4">
                <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                <li>
                  Procesar transacciones y enviar notificaciones relacionadas.
                </li>
                <li>
                  Comunicarnos con los usuarios en relación con servicios o
                  consultas.
                </li>
                <li>Mejorar la seguridad y prevenir fraudes.</li>
              </ul>
            </p>

            <h2 className="font-semibold text-md mb-2">
              4. Compartir Información
            </h2>
            <p>
              No compartimos información personal con terceros, excepto:
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Cuando es necesario para proveer el servicio (como
                  procesadores de pago).
                </li>
                <li>
                  Si es requerido por la ley o para responder a procesos
                  legales.
                </li>
                <li>Para proteger nuestros derechos o propiedad.</li>
              </ul>
            </p>

            <h2 className="font-semibold text-md mb-2">
              5. Seguridad de la Información
            </h2>
            <p>
              Tomamos medidas razonables para proteger la información contra
              pérdida, robo y uso indebido, así como acceso, divulgación,
              alteración y destrucción no autorizados.
            </p>

            <h2 className="font-semibold text-md mb-2">6. Tus Derechos</h2>
            <p>
              Los usuarios pueden:
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Acceder, actualizar o solicitar la eliminación de su
                  información personal.
                </li>
                <li>Optar por no recibir comunicaciones de marketing.</li>
                <li>
                  Retirar su consentimiento para el procesamiento de sus datos.
                </li>
              </ul>
            </p>

            <h2 className="font-semibold text-md mb-2">
              7. Cambios en la Política de Privacidad
            </h2>
            <p>
              Nos reservamos el derecho de modificar esta política. Los cambios
              entrarán en vigor una vez publicados en nuestro sitio web.
            </p>

            <h2 className="font-semibold text-md mb-2">8. Contacto</h2>
            <p>
              Si tienes preguntas o preocupaciones sobre esta política o tus
              datos personales, contáctanos en: ventas@sublimahyca.cl
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
