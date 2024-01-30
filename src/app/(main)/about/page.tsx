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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            sapiente recusandae qui vitae atque labore impedit, eius possimus
            quia commodi inventore fugit cum ullam ipsum esse ipsam minima iusto
            excepturi laudantium omnis dignissimos! Optio est nam quas quis,
            dolor nisi doloribus, nobis ab placeat omnis facere reprehenderit
            dicta minus dignissimos ipsam ad saepe quod perferendis magni
            praesentium mollitia deleniti! Omnis, dignissimos, obcaecati quam
            asperiores dolorem distinctio tempora explicabo totam possimus quis
            blanditiis vitae voluptatibus corporis iste ducimus. Dicta in
            architecto a, incidunt, tenetur ullam cumque ratione beatae
            similique laudantium nam veniam perferendis error. Labore optio
            numquam, nobis, iure totam itaque veritatis possimus, sed
            necessitatibus ipsa quo culpa. Corporis quaerat voluptatum in
            perspiciatis sunt nesciunt voluptate quia tempora atque? Assumenda,
            quas. Officiis magni dolores, minima consectetur, hic repellat
            dolorem eaque nihil accusamus cumque perspiciatis aut facilis nulla
            tempore nobis praesentium ea ipsam asperiores necessitatibus, odio
            architecto nemo tenetur. Quod, minima dolore obcaecati hic inventore
            veniam sint dolores eum quisquam eius qui facilis at enim fuga alias
            officiis dicta quibusdam perferendis repudiandae, labore atque
            aspernatur vero modi! Quibusdam saepe vitae in quam, iusto accusamus
            aperiam unde magni voluptatibus totam dolorem iure eveniet nam vero
            quaerat. Facere perspiciatis voluptatibus at amet, eius ipsam.
          </p>
        </div>
        <img
          className="md:mt-16 w-1/4 absolute bottom-2 right-2"
          src="/logo.png"
          alt="logo sublimahyca<"
        />
      </div>
    </div>
  )
}
