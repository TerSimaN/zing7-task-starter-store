import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { categoryListFilters } from "@lib/constants"
import Image from "next/image"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="flex flex-col container">
      <div className="flex flex-col pt-14 pb-2">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <LocalizedClientLink href="/" className="inline-flex items-center font-roboto font-normal text-base leading-[22px] text-grey-600 hover:text-blue-600">
                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </LocalizedClientLink>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-grey-400 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
                </svg>
                <span className="font-roboto font-medium text-base leading-[22px] text-blue-600">
                  {collection.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="border border-grey-100 mt-28 w-full"></div>
      </div>
      <div className="flex flex-col small:flex-row small:items-start py-6">
        <div className="flex flex-col gap-y-5">
          <RefinementList sortBy={sortBy || "created_at"} />
          <div className="pt-6 pb-4 max-w-[16rem]">
            <h1 className="font-rubik font-medium text-xl leading-6 tracking-[0.2px] text-grey-900 ms-4">Filter Options</h1>
            <div className="p-4">
              <h3 className="font-roboto font-medium text-sm text-grey-900 mb-4">Popular Filter</h3>
              <ul className="flex flex-col gap-y-3.5 font-roboto font-normal text-base leading-[22px] text-grey-600">
                <li className="inline-flex items-center">
                  <input id="four-or-more-stars" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-white border-grey-45 rounded focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="four-or-more-stars" className="inline-flex items-center py-0.5 ms-3 w-full">
                    <svg className="w-4 h-4 text-orange-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    4 star or upper
                  </label>
                </li>
                <li className="inline-flex items-center">
                  <input id="same-day-delivery" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-white border-grey-45 rounded focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="same-day-delivery" className="inline-flex items-center py-0.5 ms-3 w-full">
                    Same day delivery
                  </label>
                </li>
                <li className="inline-flex items-center">
                  <input id="super-seller" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-white border-grey-45 rounded focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="super-seller" className="inline-flex items-center py-0.5 ms-3 w-full">
                    Super seller
                  </label>
                </li>
                <li className="inline-flex items-center">
                  <input id="sale-product" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-white border-grey-45 rounded focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="sale-product" className="inline-flex items-center py-0.5 ms-3 w-full">
                    Sale Product
                  </label>
                </li>
              </ul>
            </div>
            <div className="border border-grey-100 my-3.5 w-full"></div>
            <div className="p-4">
              <div className="flex flex-col gap-y-4">
                <h1 className="font-roboto font-medium text-sm text-grey-900">Category</h1>
                {categoryListFilters.map((filter, index) => (
                  <div key={index} id="accordion-flush">
                    <h2 id="accordion-flush-heading-1">
                      <button type="button" className="inline-flex items-center font-roboto font-normal text-base leading-[22px] text-grey-600 w-full">
                        <Image
                          src={filter.imgSrc}
                          alt="category-icon"
                          width={22}
                          height={22}
                        />
                        <span className="ms-4">
                          {filter.name}
                        </span>
                        <svg className="w-5 h-5 text-grey-300 ms-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4" />
                        </svg>
                      </button>
                    </h2>
                    <div id="accordion-flush-body-1" className="hidden"></div>
                  </div>
                ))}
                <div id="accordion-flush">
                  <h2 id="accordion-flush-heading-1">
                    <button type="button" className="inline-flex items-center font-roboto font-normal text-base leading-[22px] text-blue-600 w-full">
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                      </svg>
                      <span className="ms-4">See all categories</span>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-1" className="hidden"></div>
                </div>
              </div>
            </div>
            <div className="border border-grey-100 my-3.5 w-full"></div>
            <div className="p-4">
              <div className="flex flex-col gap-y-4">
                <h1>Price Value</h1>
                <div className="flex flex-col gap-y-3">
                  <div className="flex border border-grey-100 rounded-lg">
                    <label htmlFor="min-price" className="block bg-grey-100 rounded-lg px-4 py-2.5 w-[3.25rem] h-10">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-grey-700">
                        <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                        <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z" clipRule="evenodd" />
                      </svg>
                    </label>
                    <input id="min-price" type="text" className="ps-3 w-full" placeholder="Set Min. Price" />
                  </div>
                  <div className="flex border border-grey-100 rounded-lg">
                    <label htmlFor="max-price" className="block bg-grey-100 rounded-lg px-4 py-2.5 w-[3.25rem] h-10">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-grey-700">
                        <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                        <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z" clipRule="evenodd" />
                      </svg>
                    </label>
                    <input id="max-price" type="text" className="ps-3 w-full" placeholder="Set Max. Price" />
                  </div>
                </div>
                <ul className="flex flex-wrap gap-3 font-roboto font-normal text-sm">
                  <li>
                    <input type="checkbox" id="first-option" value="" className="hidden peer" />
                    <label htmlFor="first-option" className="inline-flex border border-grey-100 rounded-full text-grey-600 px-5 py-2.5 w-full cursor-pointer peer-checked:text-blue-600">
                      $ 0-150
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="second-option" value="" className="hidden peer" />
                    <label htmlFor="second-option" className="inline-flex border border-grey-100 rounded-full text-grey-600 px-5 py-2.5 w-full cursor-pointer peer-checked:text-blue-600">
                      $ 150-300
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="third-option" value="" className="hidden peer" />
                    <label htmlFor="third-option" className="inline-flex border border-grey-100 rounded-full text-grey-600 px-5 py-2.5 w-full cursor-pointer peer-checked:text-blue-600">
                      $ 300-500
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="fourth-option" value="" className="hidden peer" />
                    <label htmlFor="fourth-option" className="inline-flex border border-grey-100 rounded-full text-grey-600 px-5 py-2.5 w-full cursor-pointer peer-checked:text-blue-600">
                      $ 500-1k
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-grey-100 my-3.5 w-full"></div>
            <div className="p-4">
              <div className="flex flex-col gap-y-3.5">
                <h1 className="font-roboto font-medium text-sm text-grey-900">Product color</h1>
                <ul className="grid grid-cols-4 items-center gap-5 mt-3.5">
                  <li>
                    <input type="radio" id="color-blue" name="color-choice" value="blue" className="hidden peer" />
                    <label htmlFor="color-blue" className="inline-flex items-center rounded-full p-1 max-w-[2.25rem] cursor-pointer peer-checked:ring-2 peer-checked:ring-blue-900">
                      <span className="bg-blue-900 rounded-full w-7 h-7"></span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="color-green" name="color-choice" value="green" className="hidden peer" />
                    <label htmlFor="color-green" className="inline-flex items-center rounded-full p-1 max-w-[2.25rem] cursor-pointer peer-checked:ring-2 peer-checked:ring-green-50">
                      <span className="bg-green-50 rounded-full w-7 h-7"></span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="color-purple" name="color-choice" value="purple" className="hidden peer" />
                    <label htmlFor="color-purple" className="inline-flex items-center rounded-full p-1 max-w-[2.25rem] cursor-pointer peer-checked:ring-2 peer-checked:ring-purple-40">
                      <span className="bg-purple-40 rounded-full w-7 h-7"></span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="color-teal" name="color-choice" value="teal" className="hidden peer" />
                    <label htmlFor="color-teal" className="inline-flex items-center rounded-full p-1 max-w-[2.25rem] cursor-pointer peer-checked:ring-2 peer-checked:ring-blue-700">
                      <span className="bg-blue-700 rounded-full w-7 h-7"></span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="color-dark-blue" name="color-choice" value="dark-blue" className="hidden peer" />
                    <label htmlFor="color-dark-blue" className="inline-flex items-center rounded-full p-1 max-w-[2.25rem] cursor-pointer peer-checked:ring-2 peer-checked:ring-blue-600">
                      <span className="bg-blue-600 rounded-full w-7 h-7"></span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="color-yellow" name="color-choice" value="yellow" className="hidden peer" />
                    <label htmlFor="color-yellow" className="inline-flex items-center rounded-full p-1 max-w-[2.25rem] cursor-pointer peer-checked:ring-2 peer-checked:ring-yellow-20">
                      <span className="bg-yellow-20 rounded-full w-7 h-7"></span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="color-orange" name="color-choice" value="orange" className="hidden peer" />
                    <label htmlFor="color-orange" className="inline-flex items-center rounded-full p-1 max-w-[2.25rem] cursor-pointer peer-checked:ring-2 peer-checked:ring-orange-10">
                      <span className="bg-orange-10 rounded-full w-7 h-7"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-x-3.5 place-self-end">
            <span className="font-roboto font-normal text-base leading-[22px] text-grey-450">Sort by:</span>
            <button className="flex items-center justify-between bg-grey-5 rounded-lg font-roboto font-medium text-base leading-[22px] text-grey-900 px-5 py-3.5">
              Highest rating
              <svg className="w-6 h-6 text-grey-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4" />
              </svg>
            </button>
          </div>
          <div></div>
          <div className="grid grid-cols-3"></div>
          <div></div>
          <div className="ml-7 w-full">
            <div className="mb-8 text-2xl-semi">
              <h1>{collection.title}</h1>
            </div>
            <Suspense fallback={<SkeletonProductGrid />}>
              <PaginatedProducts
                sortBy={sortBy || "created_at"}
                page={pageNumber}
                collectionId={collection.id}
                countryCode={countryCode}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
