"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import MedusaCTA from "../medusa-cta"
import Logo from "@modules/common/icons/logo"
import CountrySelect2 from "@modules/layout/components/country-select2"
import { Dancing_Script } from "@next/font/google"
import ReactCountryFlag from "react-country-flag"
import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useStore } from "@lib/context/store-context"
import useCountryOptions from "@lib/hooks/use-country-options"

const dancing = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
})

const CountryMenu = () => {
  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()

  const { setRegion } = useStore()
  const countryOptions = useCountryOptions()

  const handleSelectCountry = (regionId: string, countryCode: string) => {
    setRegion(regionId, countryCode)
    close()
  }
}

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8 ">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div className="flex items-center ">
          <Logo />
          <Link
            href="/"
            className={`text-xl-semi items-center ${dancing.className}`}
          >
            Sublimahyca
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
          {product_categories && (
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Categorias</span>
              <ul className="grid grid-cols-1 gap-2">
                {product_categories?.slice(0, 6).map((c) => {
                  if (c.parent_category) {
                    return
                  }

                  const children =
                    c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null

                  return (
                    <li className="flex flex-col gap-2" key={c.id}>
                      <Link
                        className={clsx(children && "text-small-semi")}
                        href={`/${c.handle}`}
                      >
                        {c.name}
                      </Link>
                      {children && (
                        <ul className="grid grid-cols-1 ml-3 gap-2">
                          {children &&
                            children.map((child) => (
                              <li key={child.id}>
                                <Link href={`/${child.handle}`}>
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          {collections && (
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Collections</span>
              <ul
                className={clsx("grid grid-cols-1 gap-2", {
                  "grid-cols-2": (collections?.length || 0) > 3,
                })}
              >
                {collections?.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <Link href={`/collections/${c.handle}`}>{c.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Ecommerce</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a href="/privacidad" target="_blank" rel="noreferrer">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/devolucion" target="_blank" rel="noreferrer">
                  Política de devolución
                </a>
              </li>
              <li>
                <a href="/about" target="_blank" rel="noreferrer">
                  ¿Quienes somos?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2023 Sublimahyca
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect2 />
        </div>
      </div>
      <MedusaCTA />
    </div>
  )
}

export default FooterNav
