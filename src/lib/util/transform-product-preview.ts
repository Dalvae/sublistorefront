import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { formatAmount } from "medusa-react"
import { ProductPreviewType } from "types/global"
import { CalculatedVariant } from "types/medusa"
import { adjustPriceForZeroDecimalCurrency } from "@lib/util/prices"

const transformProductPreview = (
  product: PricedProduct,
  region: Region
): ProductPreviewType => {
  const variants = product.variants as unknown as CalculatedVariant[]

  let cheapestVariant = undefined

  if (variants?.length > 0) {
    cheapestVariant = variants.reduce((acc, curr) => {
      if (acc.calculated_price > curr.calculated_price) {
        return curr
      }
      return acc
    }, variants[0])
  }

  return {
    id: product.id!,
    title: product.title!,
    handle: product.handle!,
    thumbnail: product.thumbnail!,
    created_at: product.created_at,
    price: cheapestVariant
      ? {
          calculated_price: formatAmount({
            amount: adjustPriceForZeroDecimalCurrency(
              cheapestVariant.calculated_price,
              region.currency_code
            ),

            region: region,
            includeTaxes: false,
            locale: "es-CL",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }),
          original_price: formatAmount({
            amount: adjustPriceForZeroDecimalCurrency(
              cheapestVariant.original_price,
              region.currency_code
            ),
            region: region,
            includeTaxes: false,
            locale: "es-CL",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }),
          difference: getPercentageDiff(
            cheapestVariant.original_price,
            cheapestVariant.calculated_price
          ),
          price_type: cheapestVariant.calculated_price_type,
        }
      : undefined,
  }
}

export default transformProductPreview
