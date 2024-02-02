import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import { Button } from "@medusajs/ui"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import Link from "next/link"
import { useRouter } from "next/router" // Corrección: 'next/navigation' a 'next/router'
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("Ocurrió un error. Por favor, intenta de nuevo.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">
        Empieza tu experiencia Sublimahyca
      </h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Crea tu perfil de miembro de Sublimahyca y obtén acceso a una
        experiencia de compra mejorada.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Nombre"
            {...register("first_name", { required: "El nombre es requerido" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Apellidos"
            {...register("last_name", {
              required: "Los apellidos son requeridos",
            })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Correo electrónico"
            {...register("email", {
              required: "El correo electrónico es requerido",
            })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Teléfono"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Contraseña"
            {...register("password", {
              required: "La contraseña es requerida",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              {authError}
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Al crear una cuenta aceptas los términos de Sublimahyca{" "}
          <Link href="/content/privacy-policy">
            <a className="underline">Política de privacidad</a>
          </Link>{" "}
          y{" "}
          <Link href="/content/terms-of-use">
            <a className="underline">Términos de uso</a>
          </Link>
          .
        </span>
        <Button className="mt-6">Unirse</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        ¿Ya eres miembro?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Inicia sesión
        </button>
      </span>
    </div>
  )
}

export default Register
