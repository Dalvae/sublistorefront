import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { LineItem, Region } from "@medusajs/medusa"
import clsx from "clsx"
import { formatAmount } from "medusa-react"
import { CalculatedVariant } from "types/medusa"
import { adjustPriceForZeroDecimalCurrency } from "@lib/util/prices"

type LineItemPriceProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
  style?: "default" | "tight"
}

const LineItemPrice = ({
  item,
  region,
  style = "default",
}: LineItemPriceProps) => {
  const originalPrice = adjustPriceForZeroDecimalCurrency(
    (item.variant as CalculatedVariant).original_price * item.quantity,
    region.currency_code
  )
  const adjustedTotal = adjustPriceForZeroDecimalCurrency(
    item.total || 0,
    region.currency_code
  )
  const hasReducedPrice = adjustedTotal < originalPrice

  return (
    <div className="flex flex-col gap-x-2 text-ui-fg-subtle items-end">
      <div className="text-left">
        {hasReducedPrice && (
          <>
            <p>
              {style === "default" && (
                <span className="text-ui-fg-subtle">Original: </span>
              )}
              <span className="line-through text-ui-fg-muted">
                {formatAmount({
                  amount: originalPrice,
                  region: region,
                  includeTaxes: false,
                  locale: "es-CL",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </p>
            {style === "default" && (
              <span className="text-ui-fg-interactive">
                -{getPercentageDiff(originalPrice, item.total || 0)}%
              </span>
            )}
          </>
        )}
        <span
          className={clsx("text-base-regular", {
            "text-ui-fg-interactive": hasReducedPrice,
          })}
        >
          {formatAmount({
            amount: adjustedTotal,
            region: region,
            includeTaxes: false,
            locale: "es-CL",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
    </div>
  )
}

export default LineItemPrice
