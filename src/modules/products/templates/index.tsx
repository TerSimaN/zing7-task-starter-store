import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import RelatedProducts from "@modules/products/components/related-products"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { Heading, Text } from "@medusajs/ui"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 pt-[6.25rem] pb-12">
          <div className="max-w-md">
            <ImageGallery images={product?.images || []} />
          </div>
          <div className="md:mt-0 mt-6">
            <Heading level="h2" className="font-rubik font-medium text-4xl leading-[3.25rem] tracking-[0.2px] text-grey-900" data-testid="product-title">
              {product.title}
            </Heading>
            <div className="inline-flex items-center gap-x-6 mt-4">
              <span className="inline-flex items-center bg-orange-400 rounded-xl text-white px-2 py-1">
                <svg className="w-4 h-4 text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                4,6
              </span>
              <ul className="list-disc inline-flex items-center gap-x-7 font-roboto font-medium text-sm text-grey-450">
                <li>261 Product sold</li>
                <li>3,1k Product watched</li>
              </ul>
            </div>
            <Text className="font-roboto font-normal text-base leading-7 text-grey-600 mt-5" data-testid="product-description">
              {product.description}
            </Text>
            <div className="w-full border border-grey-100 mt-5"></div>
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>
        </div>
        <span className="font-roboto font-medium text-base leading-[22px] text-grey-900 px-5 py-4">
          Descriptions
        </span>
        <div className="flex flex-col pt-7 pb-12">
          <div>
            <Text className="font-roboto font-normal text-base leading-7 text-grey-600 mt-5" data-testid="product-description">
              {product.description}
            </Text>
            <div className="grid lg:grid-cols-2 gap-8 mt-10">
              <div>
                <span className="font-rubik font-medium text-lg leading-5 tracking-[0.2px] text-grey-900">Overview</span>
                <table className="w-full mt-5">
                  <tbody>
                    <tr className="odd:bg-grey-5 even:bg-white text-left">
                      <th scope="row" className="font-roboto font-normal text-sm text-grey-450 whitespace-nowrap px-5 py-3.5">
                        Material
                      </th>
                      <td className="font-roboto font-normal text-sm text-grey-900 whitespace-nowrap px-5 py-3.5">
                        {product.material ? product.material : "-"}
                      </td>
                    </tr>
                    <tr className="odd:bg-grey-5 even:bg-white text-left">
                      <th scope="row" className="font-roboto font-normal text-sm text-grey-450 whitespace-nowrap px-5 py-3.5">
                        Country of origin
                      </th>
                      <td className="font-roboto font-normal text-sm text-grey-900 whitespace-nowrap px-5 py-3.5">
                        {product.origin_country ? product.origin_country : "-"}
                      </td>
                    </tr>
                    <tr className="odd:bg-grey-5 even:bg-white text-left">
                      <th scope="row" className="font-roboto font-normal text-sm text-grey-450 whitespace-nowrap px-5 py-3.5">
                        Type
                      </th>
                      <td className="font-roboto font-normal text-sm text-grey-900 whitespace-nowrap px-5 py-3.5">
                        {product.type ? product.type.value : "-"}
                      </td>
                    </tr>
                    <tr className="odd:bg-grey-5 even:bg-white text-left">
                      <th scope="row" className="font-roboto font-normal text-sm text-grey-450 whitespace-nowrap px-5 py-3.5">
                        Weight
                      </th>
                      <td className="font-roboto font-normal text-sm text-grey-900 whitespace-nowrap px-5 py-3.5">
                        {product.weight ? `${product.weight} g` : "-"}
                      </td>
                    </tr>
                    <tr className="odd:bg-grey-5 even:bg-white text-left">
                      <th scope="row" className="font-roboto font-normal text-sm text-grey-450 whitespace-nowrap px-5 py-3.5">
                        Dimensions
                      </th>
                      <td className="font-roboto font-normal text-sm text-grey-900 whitespace-nowrap px-5 py-3.5">
                        {product.length && product.width && product.height
                          ? `${product.length}L x ${product.width}W x ${product.height}H`
                          : "-"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <span className="font-rubik font-medium text-lg leading-5 tracking-[0.2px] text-grey-900">
                  What&apos;s inside box?
                </span>
                <ul className="grid lg:grid-cols-2 mt-5 max-w-lg">
                  <li className="inline-flex items-center font-roboto font-normal text-sm text-grey-900 capitalize p-3.5">
                    <svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 3.19995H5.99995C4.45355 3.19995 3.19995 4.45355 3.19995 5.99995V14C3.19995 15.5463 4.45355 16.8 5.99995 16.8H14C15.5463 16.8 16.8 15.5463 16.8 14V5.99995C16.8 4.45355 15.5463 3.19995 14 3.19995ZM12.6479 7.28612C12.4746 7.14916 12.2231 7.17864 12.0861 7.35197L9.20148 11.0026L7.88005 9.70647C7.72233 9.55178 7.46908 9.55423 7.31439 9.71194C7.1597 9.86965 7.16214 10.1229 7.31986 10.2776L8.95917 11.8855C9.12896 12.0521 9.40567 12.0346 9.55311 11.848L12.7138 7.84796C12.8508 7.67463 12.8213 7.42308 12.6479 7.28612Z" fill="#C4CDD5" />
                    </svg>
                    Etiam tempor varius justo
                  </li>
                  <li className="inline-flex items-center font-roboto font-normal text-sm text-grey-900 capitalize p-3.5">
                    <svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 3.19995H5.99995C4.45355 3.19995 3.19995 4.45355 3.19995 5.99995V14C3.19995 15.5463 4.45355 16.8 5.99995 16.8H14C15.5463 16.8 16.8 15.5463 16.8 14V5.99995C16.8 4.45355 15.5463 3.19995 14 3.19995ZM12.6479 7.28612C12.4746 7.14916 12.2231 7.17864 12.0861 7.35197L9.20148 11.0026L7.88005 9.70647C7.72233 9.55178 7.46908 9.55423 7.31439 9.71194C7.1597 9.86965 7.16214 10.1229 7.31986 10.2776L8.95917 11.8855C9.12896 12.0521 9.40567 12.0346 9.55311 11.848L12.7138 7.84796C12.8508 7.67463 12.8213 7.42308 12.6479 7.28612Z" fill="#C4CDD5" />
                    </svg>
                    Quisque consequat nisl
                  </li>
                  <li className="inline-flex items-center font-roboto font-normal text-sm text-grey-900 capitalize p-3.5">
                    <svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 3.19995H5.99995C4.45355 3.19995 3.19995 4.45355 3.19995 5.99995V14C3.19995 15.5463 4.45355 16.8 5.99995 16.8H14C15.5463 16.8 16.8 15.5463 16.8 14V5.99995C16.8 4.45355 15.5463 3.19995 14 3.19995ZM12.6479 7.28612C12.4746 7.14916 12.2231 7.17864 12.0861 7.35197L9.20148 11.0026L7.88005 9.70647C7.72233 9.55178 7.46908 9.55423 7.31439 9.71194C7.1597 9.86965 7.16214 10.1229 7.31986 10.2776L8.95917 11.8855C9.12896 12.0521 9.40567 12.0346 9.55311 11.848L12.7138 7.84796C12.8508 7.67463 12.8213 7.42308 12.6479 7.28612Z" fill="#C4CDD5" />
                    </svg>
                    lobortis est sed, porttitor felis
                  </li>
                  <li className="inline-flex items-center font-roboto font-normal text-sm text-grey-900 capitalize p-3.5">
                    <svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 3.19995H5.99995C4.45355 3.19995 3.19995 4.45355 3.19995 5.99995V14C3.19995 15.5463 4.45355 16.8 5.99995 16.8H14C15.5463 16.8 16.8 15.5463 16.8 14V5.99995C16.8 4.45355 15.5463 3.19995 14 3.19995ZM12.6479 7.28612C12.4746 7.14916 12.2231 7.17864 12.0861 7.35197L9.20148 11.0026L7.88005 9.70647C7.72233 9.55178 7.46908 9.55423 7.31439 9.71194C7.1597 9.86965 7.16214 10.1229 7.31986 10.2776L8.95917 11.8855C9.12896 12.0521 9.40567 12.0346 9.55311 11.848L12.7138 7.84796C12.8508 7.67463 12.8213 7.42308 12.6479 7.28612Z" fill="#C4CDD5" />
                    </svg>
                    Vestibulum sodales ex quis
                  </li>
                  <li className="inline-flex items-center font-roboto font-normal text-sm text-grey-900 capitalize p-3.5">
                    <svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 3.19995H5.99995C4.45355 3.19995 3.19995 4.45355 3.19995 5.99995V14C3.19995 15.5463 4.45355 16.8 5.99995 16.8H14C15.5463 16.8 16.8 15.5463 16.8 14V5.99995C16.8 4.45355 15.5463 3.19995 14 3.19995ZM12.6479 7.28612C12.4746 7.14916 12.2231 7.17864 12.0861 7.35197L9.20148 11.0026L7.88005 9.70647C7.72233 9.55178 7.46908 9.55423 7.31439 9.71194C7.1597 9.86965 7.16214 10.1229 7.31986 10.2776L8.95917 11.8855C9.12896 12.0521 9.40567 12.0346 9.55311 11.848L12.7138 7.84796C12.8508 7.67463 12.8213 7.42308 12.6479 7.28612Z" fill="#C4CDD5" />
                    </svg>
                    rutrum tempus dictum sed
                  </li>
                  <li className="inline-flex items-center font-roboto font-normal text-sm text-grey-900 capitalize p-3.5">
                    <svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 3.19995H5.99995C4.45355 3.19995 3.19995 4.45355 3.19995 5.99995V14C3.19995 15.5463 4.45355 16.8 5.99995 16.8H14C15.5463 16.8 16.8 15.5463 16.8 14V5.99995C16.8 4.45355 15.5463 3.19995 14 3.19995ZM12.6479 7.28612C12.4746 7.14916 12.2231 7.17864 12.0861 7.35197L9.20148 11.0026L7.88005 9.70647C7.72233 9.55178 7.46908 9.55423 7.31439 9.71194C7.1597 9.86965 7.16214 10.1229 7.31986 10.2776L8.95917 11.8855C9.12896 12.0521 9.40567 12.0346 9.55311 11.848L12.7138 7.84796C12.8508 7.67463 12.8213 7.42308 12.6479 7.28612Z" fill="#C4CDD5" />
                    </svg>
                    Curabitur iaculis massa
                  </li>
                  <li className="inline-flex items-center font-roboto font-normal text-sm text-grey-900 capitalize p-3.5">
                    <svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 3.19995H5.99995C4.45355 3.19995 3.19995 4.45355 3.19995 5.99995V14C3.19995 15.5463 4.45355 16.8 5.99995 16.8H14C15.5463 16.8 16.8 15.5463 16.8 14V5.99995C16.8 4.45355 15.5463 3.19995 14 3.19995ZM12.6479 7.28612C12.4746 7.14916 12.2231 7.17864 12.0861 7.35197L9.20148 11.0026L7.88005 9.70647C7.72233 9.55178 7.46908 9.55423 7.31439 9.71194C7.1597 9.86965 7.16214 10.1229 7.31986 10.2776L8.95917 11.8855C9.12896 12.0521 9.40567 12.0346 9.55311 11.848L12.7138 7.84796C12.8508 7.67463 12.8213 7.42308 12.6479 7.28612Z" fill="#C4CDD5" />
                    </svg>
                    Quisque lobortis sapien lorem
                  </li>
                  <li className="inline-flex items-center font-roboto font-normal text-sm text-grey-900 capitalize p-3.5">
                    <svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 3.19995H5.99995C4.45355 3.19995 3.19995 4.45355 3.19995 5.99995V14C3.19995 15.5463 4.45355 16.8 5.99995 16.8H14C15.5463 16.8 16.8 15.5463 16.8 14V5.99995C16.8 4.45355 15.5463 3.19995 14 3.19995ZM12.6479 7.28612C12.4746 7.14916 12.2231 7.17864 12.0861 7.35197L9.20148 11.0026L7.88005 9.70647C7.72233 9.55178 7.46908 9.55423 7.31439 9.71194C7.1597 9.86965 7.16214 10.1229 7.31986 10.2776L8.95917 11.8855C9.12896 12.0521 9.40567 12.0346 9.55311 11.848L12.7138 7.84796C12.8508 7.67463 12.8213 7.42308 12.6479 7.28612Z" fill="#C4CDD5" />
                    </svg>
                    facilisis consequat lacinia
                  </li>
                  <li className="inline-flex items-center font-roboto font-normal text-sm text-grey-900 capitalize p-3.5">
                    <svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 3.19995H5.99995C4.45355 3.19995 3.19995 4.45355 3.19995 5.99995V14C3.19995 15.5463 4.45355 16.8 5.99995 16.8H14C15.5463 16.8 16.8 15.5463 16.8 14V5.99995C16.8 4.45355 15.5463 3.19995 14 3.19995ZM12.6479 7.28612C12.4746 7.14916 12.2231 7.17864 12.0861 7.35197L9.20148 11.0026L7.88005 9.70647C7.72233 9.55178 7.46908 9.55423 7.31439 9.71194C7.1597 9.86965 7.16214 10.1229 7.31986 10.2776L8.95917 11.8855C9.12896 12.0521 9.40567 12.0346 9.55311 11.848L12.7138 7.84796C12.8508 7.67463 12.8213 7.42308 12.6479 7.28612Z" fill="#C4CDD5" />
                    </svg>
                    Donec hendrerit in tellus
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="inline-flex items-center gap-x-[3.25rem] font-roboto font-normal text-sm text-grey-450 px-5 py-4">
                <span>SKU Number</span>
                <span className="text-grey-900">
                  AIM-36403-00426
                </span>
              </div>
              <div className="inline-flex items-center gap-x-[3.25rem] font-roboto font-normal text-sm text-grey-450 px-5 py-4">
                <span>Product Code</span>
                <span className="text-grey-900">
                  MTA-6593742
                </span>
              </div>
              <div className="inline-flex items-center gap-x-[3.25rem] font-roboto font-normal text-sm text-grey-450 px-5 py-4">
                <span>EAN Code</span>
                <span className="text-grey-900">
                  [AIWBPU0301OL]
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 mt-12 mb-24" data-testid="related-products-container">
          <Suspense fallback={<SkeletonRelatedProducts />}>
            <RelatedProducts product={product} countryCode={countryCode} />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default ProductTemplate
