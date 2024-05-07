import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"
import StoreTemplate from "@modules/store/templates"
export const metadata: Metadata = {
  title: "Home",
  description: "Sublimahyca, tienda sublimación y regalos personalizados ",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 20)

  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <StoreTemplate />
        {/* <FeaturedProducts collections={collections} /> */}
      </Suspense>
    </>
  )
}
