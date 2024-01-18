import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full  relative ">
      <div className="text-white absolute bottom-0 left-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:mb-52 small:pl-32">
        <div className="bg-opacity-70 shadow-2xl shadow-black bg-[#af4670e9] bg-gradient-blue bg-blend-soft-light rounded-md ">
          <h1 className="text-2xl-semi  m-4  ">
            Un toque personal para momentos inolvidables
          </h1>
          <div className="flex justify-center items-center">
            <p className="text-base-regular  bg-opacity-70 max-w-lg drop-shadow-lg shadow-black ">
              En Sublimahyca, creemos que cada regalo debe contar una historia.
              Descubre nuestra gama única de regalos personalizados, diseñados
              para celebrar y conmemorar las ocasiones más especiales de la
              vida. Desde grabados hechos a mano hasta diseños a medida, tus
              seres queridos merecen algo tan único como ellos..
            </p>
          </div>
          <UnderlineLink href="/store" classNames="pl-2 ml-2">
            Explorar Productos
          </UnderlineLink>
        </div>
      </div>
      <Image
        src="/herosubli.png"
        alt=""
        sizes="100vw"
        layout="fill"
        quality={100}
        objectFit="cover"
        objectPosition="right"
        // objectPosition="center"
        priority={true}
        // className="absolute inset-0"
      />
    </div>
  )
}

export default Hero
