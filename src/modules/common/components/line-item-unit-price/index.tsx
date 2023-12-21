import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { LineItem, Region } from "@medusajs/medusa"
import clsx from "clsx"
import { formatAmount } from "medusa-react"
import { CalculatedVariant } from "types/medusa"
import { adjustPriceForZeroDecimalCurrency } from "@lib/util/prices"

type LineItemUnitPriceProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
  style?: "default" | "tight"
}

const LineItemUnitPrice = ({
  item,
  region,
  style = "default",
}: LineItemUnitPriceProps) => {
  const originalPrice = adjustPriceForZeroDecimalCurrency(
    (item.variant as CalculatedVariant).original_price,
    region.currency_code
  )
  const hasReducedPrice = (originalPrice * item.quantity || 0) > item.total!
  const reducedPrice = adjustPriceForZeroDecimalCurrency(
    (item.total || 0) / item.quantity!,
    region.currency_code
  )
  return (
    <div className="flex flex-col text-ui-fg-muted justify-center h-full">
      {hasReducedPrice && (
        <>
          <p>
            {style === "default" && (
              <span className="text-ui-fg-muted">Original: </span>
            )}
            <span className="line-through">
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
              -{getPercentageDiff(originalPrice, reducedPrice || 0)}%
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
          amount: reducedPrice || item.unit_price || 0,
          region: region,
          includeTaxes: false,
          locale: "es-CL",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </span>
    </div>
  )
}

export default LineItemUnitPrice
