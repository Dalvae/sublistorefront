import { Cart, Order } from "@medusajs/medusa"
import { Tooltip } from "@medusajs/ui"
import { InformationCircleSolid } from "@medusajs/icons"
import { formatAmount } from "medusa-react"
import React from "react"
import { adjustPriceForZeroDecimalCurrency } from "@lib/util/prices"

type CartTotalsProps = {
  data: Omit<Cart, "refundable_amount" | "refunded_total"> | Order
}

const CartTotals: React.FC<CartTotalsProps> = ({ data }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = data

  const getAmount = (amount: number | null | undefined) => {
    const adjustedAmount = adjustPriceForZeroDecimalCurrency(
      amount || 0,
      data.region.currency_code
    )
    return formatAmount({
      amount: adjustedAmount,
      region: data.region,
      includeTaxes: false,
      locale: "es-CL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  return (
    <div>
      <div className="flex flex-col gap-y-2 txt-medium text-ui-fg-subtle ">
        <div className="flex items-center justify-between">
          <span className="flex gap-x-1 items-center">
            Subtotal
            <Tooltip content="Cart total excluding shipping and taxes.">
              <InformationCircleSolid color="var(--fg-muted)" />
            </Tooltip>
          </span>
          <span>{getAmount(subtotal)}</span>
        </div>
        {!!discount_total && (
          <div className="flex items-center justify-between">
            <span>Descuento</span>
            <span className="text-ui-fg-interactive">
              - {getAmount(discount_total)}
            </span>
          </div>
        )}
        {!!gift_card_total && (
          <div className="flex items-center justify-between">
            <span>Gift card</span>
            <span className="text-ui-fg-interactive">
              - {getAmount(gift_card_total)}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span>Envio</span>
          <span>{getAmount(shipping_total)}</span>
        </div>
        <div className="flex justify-between">
          <span className="flex gap-x-1 items-center ">Impuestos</span>
          <span>{getAmount(tax_total)}</span>
        </div>
      </div>
      <div className="h-px w-full border-b border-gray-200 my-4" />
      <div className="flex items-center justify-between text-ui-fg-base mb-2 txt-medium ">
        <span>Total</span>
        <span className="txt-xlarge-plus">{getAmount(total)}</span>
      </div>
      <div className="h-px w-full border-b border-gray-200 mt-4" />
    </div>
  )
}

export default CartTotals
