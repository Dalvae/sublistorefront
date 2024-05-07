import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { ChangeEvent } from "react"

export type SortOptions = "price_asc" | "price_desc" | "created_at" | ""

type SortProductsProps = {
  sortBy: SortOptions
  setSortBy: (value: SortOptions) => void
}

const sortOptions = [
  {
    value: "created_at",
    label: "Última novedad",
  },
  {
    value: "price_asc",
    label: "Precio: Más bajo -> Más Alto",
  },
  {
    value: "price_desc",
    label: "Precio: Más alto -> Más Bajo",
  },
]

const SortProducts = ({ sortBy, setSortBy }: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value as SortOptions)
  }

  return (
    <FilterRadioGroup
      title="Ordenar Por"
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
    />
  )
}

export default SortProducts
