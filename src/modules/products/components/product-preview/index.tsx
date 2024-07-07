import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PreviewPrice from "./price"
import Image from "next/image"
import PlaceholderImage from "@modules/common/icons/placeholder-image"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink href={`/products/${productPreview.handle}`}>
      <div className="flex flex-col bg-white rounded-lg p-5 w-64 h-[23.5rem]">
        <button type="button" className="z-30 inline-flex items-center place-self-end bg-white rounded-full p-2 shadow-lg shadow-grey-650/20">
          <svg className="w-4 h-4 text-grey-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
          </svg>
        </button>
        <div className="relative flex justify-center items-center mt-6 h-[14.25rem]">
          {productPreview.thumbnail ? (
            <Image
              src={productPreview.thumbnail}
              alt="Thumbnail"
              fill
              className="object-contain w-full h-full"
            />
          ) : (
            <div className="w-full h-full absolute inset-0 flex items-center justify-center">
              <PlaceholderImage size={24} />
            </div>
          )}
        </div>
        <div className="flex flex-col mt-auto">
          <div className="flex justify-between items-center mt-3">
            <span className="font-roboto font-medium text-base leading-[22px] text-green-50">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </span>
            <span className={`${cheapestPrice?.price_type === "sale" ? `visible` : `invisible`} bg-red-600 bg-opacity-10 rounded font-roboto font-medium text-xs leading-[1.125rem] text-red-600 px-2.5 py-1`}>
              SALE
            </span>
          </div>
          <h1 className="font-roboto font-medium text-lg leading-6 text-grey-900 mt-2">
            {productPreview.title}
          </h1>
          <div className="flex justify-between items-center mt-2.5">
            <span className="flex font-roboto font-normal text-xs leading-[1.125rem] text-grey-600">
              <svg className="w-4 h-4 text-grey-700 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z" />
              </svg>
              Add Store here
            </span>
            <div className="flex items-center gap-x-1 font-rubik font-normal text-sm tracking-[0.16px] text-grey-900">
              <svg className="w-4 h-4 text-orange-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              4.6
            </div>
          </div>
        </div>
      </div>
      {/* <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="flex txt-compact-medium mt-4 justify-between">
          <Text className="text-ui-fg-subtle" data-testid="product-title">{productPreview.title}</Text>
          <div className="flex items-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div> */}
    </LocalizedClientLink>
  )
}
