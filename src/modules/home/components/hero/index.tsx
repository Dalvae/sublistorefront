import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full  relative">
      <div className="absolute mt-10 md:left-1/3 sm:left-1/2 sm:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-20 flex flex-col items-center">
        <div className="m-5 z-20">
          <div className="relative h-64 w-64 rounded-full overflow-hidden transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              src="/l.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              className="scale-175"
            />
          </div>
        </div>
        <div className="text-white   flex flex-col justify-center items-center text-center small:text-left ">
          <div className="bg-opacity-70 shadow-2xl shadow-black bg-[#af4670e9] bg-gradient-blue bg-blend-soft-light rounded-md ">
            <h1 className="text-2xl-semi  m-4  ">
              Un toque personal para momentos inolvidables
            </h1>
            <div className="flex justify-center items-center">
              <p className="text-base-regular mx-4  bg-opacity-70 max-w-lg drop-shadow-lg shadow-black ">
                En Sublimahyca, creemos en la belleza de la individualidad. Cada
                persona es única, y cada historia es preciosa. Es por eso que
                nos esforzamos por ofrecer servicios de personalización que
                reflejen tu estilo, tu amor y tus recuerdos. Ya sea que estés
                buscando regalos únicos, artículos promocionales con tu toque
                distintivo o simplemente desees expresar tu creatividad a través
                de productos personalizados, estamos aquí para hacerlo posible.
              </p>
            </div>
            <UnderlineLink href="/store" classNames=" ml-6">
              Explorar Productos
            </UnderlineLink>
          </div>
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
