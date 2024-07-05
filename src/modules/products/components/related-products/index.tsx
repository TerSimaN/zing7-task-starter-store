import { StoreGetProductsParams } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import { getProductsList, getRegion } from "@lib/data"

import { Button } from "@medusajs/ui"
import RelatedProductCard from "../related-product-card"

type RelatedProductsProps = {
  product: PricedProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // edit this function to define your related products logic
  const setQueryParams = (): StoreGetProductsParams => {
    const params: StoreGetProductsParams = {}

    if (region?.id) {
      params.region_id = region.id
    }

    if (region?.currency_code) {
      params.currency_code = region.currency_code
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id]
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value)
    }

    params.is_giftcard = false

    return params
  }

  const queryParams = setQueryParams()

  const productPreviews = await getProductsList({
    queryParams,
    countryCode,
  }).then(({ response }) =>
    response.products.filter(
      (productPreview) => productPreview.id !== product.id
    )
  )

  if (!productPreviews.length) {
    return null
  }

  return (
    <div className="product-page-constraint relative">
      <div className="flex items-center justify-between mb-7">
        <span className="font-rubik font-medium text-2xl tracking-[0.2px] text-grey-900">
          Related products
        </span>
        <Button
          variant="transparent"
          className="border border-blue-600 rounded-lg font-roboto font-medium text-base leading-[22px] text-blue-600 w-[6.25rem] h-12"
        >
          View All
        </Button>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {productPreviews.map((productPreview) => (
          <li key={productPreview.id}>
            <RelatedProductCard productPreview={productPreview} />
          </li>
        ))}
      </ul>
      <button className="hidden lg:block absolute top-56 -end-8 bg-white rounded-full p-5 w-16 h-16">
        <svg className="w-6 h-6 text-grey-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
        </svg>
      </button>
    </div>
  )
}
