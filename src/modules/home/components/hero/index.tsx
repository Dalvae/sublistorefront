import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full  relative">
      <div className="text-white absolute bottom-[-10vh] left-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:mb-52 small:pl-32">
        <div className="bg-opacity-70 shadow-2xl shadow-black bg-[#af4670e9] bg-gradient-blue bg-blend-soft-light rounded-md ">
          <h1 className="text-2xl-semi  m-4  ">
            Un toque personal para momentos inolvidables
          </h1>
          <div className="flex justify-center items-center">
            <p className="text-base-regular mx-4  bg-opacity-70 max-w-lg drop-shadow-lg shadow-black ">
              En Sublimahyca, creemos en la belleza de la individualidad. Cada
              persona es única, y cada historia es preciosa. Es por eso que nos
              esforzamos por ofrecer servicios de personalización que reflejen
              tu estilo, tu amor y tus recuerdos. Ya sea que estés buscando
              regalos únicos, artículos promocionales con tu toque distintivo o
              simplemente desees expresar tu creatividad a través de productos
              personalizados, estamos aquí para hacerlo posible.
            </p>
          </div>
          <UnderlineLink href="/store" classNames=" ml-6">
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
