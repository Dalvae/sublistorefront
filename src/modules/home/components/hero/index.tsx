import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative lg:max-w-[calc(100%-3.5rem)] mx-auto">
      <div className="text-white absolute bottom-0 left-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <div className="bg-opacity-70 shadow-2xl shadow-black bg-[#af4670a0] bg-gradient-blue bg-blend-soft-light rounded-md">
          <h1 className="text-2xl-semi  m-4  ">
            Un toque personal para momentos inolvidables
          </h1>
          <p className="text-base-regular  bg-opacity-70 max-w-[32rem] m-6 drop-shadow-lg shadow-black">
            En Sublimahyca, creemos que cada regalo debe contar una historia.
            Descubre nuestra gama única de regalos personalizados, diseñados
            para celebrar y conmemorar las ocasiones más especiales de la vida.
            Desde grabados hechos a mano hasta diseños a medida, tus seres
            queridos merecen algo tan único como ellos..
          </p>
          <UnderlineLink href="/store" classNames="pl-2, ml-2">
            Explorar Productos
          </UnderlineLink>
        </div>
      </div>
      <Image
        src="/hero.png"
        loading="eager"
        priority={true}
        quality={100}
        alt=""
        className="absolute inset-0 object-cover object-bottom w-full h-full"
        draggable="false"
        fill
        sizes="100vw"
      />
    </div>
  )
}

export default Hero
