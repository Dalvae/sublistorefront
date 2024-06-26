import { Order } from "@medusajs/medusa"
import { Heading, Text } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import { formatAmount } from "medusa-react"
import { adjustPriceForZeroDecimalCurrency } from "@lib/util/prices"

type ShippingDetailsProps = {
  order: Order
}

const ShippingDetails = ({ order }: ShippingDetailsProps) => {
  const adjustedShippingPrice = adjustPriceForZeroDecimalCurrency(
    order.shipping_methods[0].price,
    order.region.currency_code
  )
  return (
    <div>
      <Heading level="h2" className="flex flex-row text-3xl-regular my-6">
        Entrega
      </Heading>
      <div className="flex items-start gap-x-8">
        <div className="flex flex-col w-1/3">
          <Text className="txt-medium-plus text-ui-fg-base mb-1">
            Dirección de envio
          </Text>
          <Text className="txt-medium text-ui-fg-subtle">
            {order.shipping_address.first_name}{" "}
            {order.shipping_address.last_name}
          </Text>
          <Text className="txt-medium text-ui-fg-subtle">
            {order.shipping_address.address_1}{" "}
            {order.shipping_address.address_2}
          </Text>
          <Text className="txt-medium text-ui-fg-subtle">
            {order.shipping_address.postal_code}, {order.shipping_address.city}
          </Text>
          <Text className="txt-medium text-ui-fg-subtle">
            {order.shipping_address.country_code?.toUpperCase()}
          </Text>
        </div>

        <div className="flex flex-col w-1/3 ">
          <Text className="txt-medium-plus text-ui-fg-base mb-1">Contacto</Text>
          <Text className="txt-medium text-ui-fg-subtle">
            {order.shipping_address.phone}
          </Text>
          <Text className="txt-medium text-ui-fg-subtle">{order.email}</Text>
        </div>

        <div className="flex flex-col w-1/3">
          <Text className="txt-medium-plus text-ui-fg-base mb-1">Metodo</Text>
          <Text className="txt-medium text-ui-fg-subtle">
            {order.shipping_methods[0].shipping_option.name} (
            {formatAmount({
              amount: adjustedShippingPrice, // Usar el precio ajustado
              region: order.region,
              locale: "es-CL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })
              .replace(/,/g, "")
              .replace(/\./g, ",")}
            )
          </Text>
        </div>
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default ShippingDetails
