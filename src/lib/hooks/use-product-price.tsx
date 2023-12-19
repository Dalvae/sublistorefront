import { formatAmount, useCart, useProducts } from "medusa-react"
import { useEffect, useMemo } from "react"
import { CalculatedVariant } from "types/medusa"
import { adjustPriceForZeroDecimalCurrency } from "@lib/util/prices"

type useProductPriceProps = {
  id: string
  variantId?: string
}

const useProductPrice = ({ id, variantId }: useProductPriceProps) => {
  const { cart } = useCart()

  const { products, isLoading, isError, refetch } = useProducts(
    {
      id: id,
      cart_id: cart?.id,
    },
    { enabled: !!cart?.id && !!cart?.region_id }
  )

  useEffect(() => {
    if (cart?.region_id) {
      refetch()
    }
  }, [cart?.region_id, refetch])

  const product = products?.[0]

  const getPercentageDiff = (original: number, calculated: number) => {
    const diff = original - calculated
    const decrease = (diff / original) * 100

    return decrease.toFixed()
  }

  const cheapestPrice = useMemo(() => {
    if (!product || !product.variants?.length || !cart?.region) {
      return null
    }

    const variants = product.variants as unknown as CalculatedVariant[]

    const cheapestVariant = variants.reduce((prev, curr) => {
      return prev.calculated_price < curr.calculated_price ? prev : curr
    })
    const adjustedCalculatedPrice = adjustPriceForZeroDecimalCurrency(
      cheapestVariant.calculated_price,
      cart?.region?.currency_code
    )
    const adjustedOriginalPrice = adjustPriceForZeroDecimalCurrency(
      cheapestVariant.original_price,
      cart?.region?.currency_code
    )

    return {
      calculated_price: formatAmount({
        amount: adjustedCalculatedPrice,
        region: cart.region,
        includeTaxes: false,
        locale: "es-CL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      original_price: formatAmount({
        amount: adjustedOriginalPrice,
        region: cart.region,
        includeTaxes: false,
        locale: "es-CL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      price_type: cheapestVariant.calculated_price_type,
      percentage_diff: getPercentageDiff(
        cheapestVariant.original_price,
        cheapestVariant.calculated_price
      ),
    }
  }, [product, cart?.region])

  const variantPrice = useMemo(() => {
    if (!product || !variantId || !cart?.region) {
      return null
    }

    const variant = product.variants.find(
      (v) => v.id === variantId || v.sku === variantId
    ) as unknown as CalculatedVariant

    if (!variant) {
      return null
    }
    const adjustedVariantCalculatedPrice = adjustPriceForZeroDecimalCurrency(
      variant.calculated_price,
      cart?.region?.currency_code
    )
    const adjustedVariantOriginalPrice = adjustPriceForZeroDecimalCurrency(
      variant.original_price,
      cart?.region?.currency_code
    )

    return {
      calculated_price: formatAmount({
        amount: adjustedVariantCalculatedPrice,
        region: cart.region,
        includeTaxes: false,
        locale: "es-CL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      original_price: formatAmount({
        amount: adjustedVariantOriginalPrice,
        region: cart.region,
        includeTaxes: false,
        locale: "es-CL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      price_type: variant.calculated_price_type,
      percentage_diff: getPercentageDiff(
        variant.original_price,
        variant.calculated_price
      ),
    }
  }, [product, variantId, cart?.region])

  return {
    product,
    cheapestPrice,
    variantPrice,
    isLoading,
    isError,
  }
}

export default useProductPrice
