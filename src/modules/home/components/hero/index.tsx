import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <div className="bg-opacity-70 bg-[#af4670]">
          <h1 className="text-2xl-semi  mb-4 drop-shadow-md shadow-black">
            Un toque personal para momentos inolvidables
          </h1>
          <p className="text-base-regular  bg-opacity-70 max-w-[32rem] mb-6 drop-shadow-lg shadow-black">
            En Sublimahyca, creemos que cada regalo debe contar una historia.
            Descubre nuestra gama única de regalos personalizados, diseñados
            para celebrar y conmemorar las ocasiones más especiales de la vida.
            Desde grabados hechos a mano hasta diseños a medida, tus seres
            queridos merecen algo tan único como ellos..
          </p>
          <UnderlineLink href="/store">Explorar Productos</UnderlineLink>
        </div>
      </div>
      <Image
        src="/hero.webp"
        loading="eager"
        priority={true}
        quality={90}
        alt=""
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
    </div>
  )
}

export default Hero
