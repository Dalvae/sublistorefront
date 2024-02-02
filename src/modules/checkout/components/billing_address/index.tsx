import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"

const BillingAddress = () => {
  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Nombre"
            {...register("billing_address.first_name", {
              required: "Nombre es requerido",
            })}
            autoComplete="given-name"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="Apellido"
            {...register("billing_address.last_name", {
              required: "Apellido es requerido",
            })}
            autoComplete="family-name"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="Dirección"
            {...register("billing_address.address_1", {
              required: "La dirección es requerida",
            })}
            autoComplete="address-line1"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="Compañia"
            {...register("billing_address.company")}
            autoComplete="organization"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Codigo Postal"
            {...register("billing_address.postal_code", {
              required: "Codigo Postal es requerido",
            })}
            autoComplete="postal-code"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="Ciudad"
            {...register("billing_address.city", {
              required: "Ciudad es requerida",
            })}
            autoComplete="address-level2"
            errors={errors}
            touched={touchedFields}
            required
          />
          <CountrySelect
            {...register("billing_address.country_code", {
              required: "Country is required",
            })}
            autoComplete="country"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="Estado / Provincia"
            {...register("billing_address.province")}
            autoComplete="address-level1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Telefono"
            {...register("billing_address.phone")}
            autoComplete="tel"
            errors={errors}
            touched={touchedFields}
          />
        </div>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
