import { MoneyAmount } from "@medusajs/medusa"
import { formatAmount } from "medusa-react"
import { Region, Variant } from "types/medusa"

export const adjustPriceForZeroDecimalCurrency = (
  amount: number,
  currencyCode: string
): number => {
  if (currencyCode.toLowerCase() === "clp") {
    return amount * 100
  }
  return amount
}

export const findCheapestRegionPrice = (
  variants: Variant[],
  regionId: string
) => {
  const regionPrices = variants.reduce((acc, v) => {
    if (!v.prices) {
      return acc
    }

    const price = v.prices.find((p) => p.region_id === regionId)
    if (price) {
      acc.push(price)
    }

    return acc
  }, [] as MoneyAmount[])

  if (!regionPrices.length) {
    return undefined
  }

  const cheapestPrice = regionPrices.reduce((acc, p) => {
    if (acc.amount > p.amount) {
      return p
    }

    return acc
  })

  return cheapestPrice
}

export const findCheapestCurrencyPrice = (
  variants: Variant[],
  currencyCode: string
) => {
  const currencyPrices = variants.reduce((acc, v) => {
    if (!v.prices) {
      return acc
    }

    const price = v.prices.find((p) => p.currency_code === currencyCode)
    if (price) {
      acc.push(price)
    }

    return acc
  }, [] as MoneyAmount[])

  if (!currencyPrices.length) {
    return undefined
  }

  const cheapestPrice = currencyPrices.reduce((acc, p) => {
    if (acc.amount > p.amount) {
      return p
    }

    return acc
  })

  return cheapestPrice
}

export const findCheapestPrice = (variants: Variant[], region: Region) => {
  const { id, currency_code } = region

  let cheapestPrice = findCheapestRegionPrice(variants, id)

  if (!cheapestPrice) {
    cheapestPrice = findCheapestCurrencyPrice(variants, currency_code)
  }

  if (cheapestPrice) {
    // Adjust the price for zero-decimal currency before formatting
    const adjustedAmount = adjustPriceForZeroDecimalCurrency(
      cheapestPrice.amount,
      currency_code
    )

    return formatAmount({
      amount: adjustedAmount,
      region: region,
      locale: "es-CL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  // If we can't find any price that matches the current region,
  // either by id or currency, then the product is not available in
  // the current region
  return "Not available in your region"
}
