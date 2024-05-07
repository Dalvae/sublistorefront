import { StoreGetProductsParams } from "@medusajs/medusa"
import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { useCollections } from "medusa-react"
import { ChangeEvent, useState } from "react"

type SortCollectionFilterProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
}

const CollectionFilter = ({
  refinementList,
  setRefinementList,
}: SortCollectionFilterProps) => {
  const { collections, isLoading } = useCollections()
  const [collectionId, setCollectionId] = useState<string | null>(null)

  if (!collections) {
    return null
  }

  const collectionMap = [
    {
      value: "all",
      label: "Todas las colecciones",
    },
    ...collections.map((c) => ({
      value: c.id,
      label: c.title,
    })),
  ]

  const handleCollectionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedCollectionId = e.target.value
    setCollectionId(selectedCollectionId)

    if (selectedCollectionId === "all") {
      const allCollectionIds = collections.map((c) => c.id)
      setRefinementList({
        ...refinementList,
        collection_id: allCollectionIds,
      })
    } else {
      setRefinementList({
        ...refinementList,
        collection_id: [selectedCollectionId],
      })
    }
  }

  return (
    <FilterRadioGroup
      title="Collections"
      items={collectionMap}
      value={collectionId}
      handleChange={handleCollectionChange}
    />
  )
}

export default CollectionFilter
