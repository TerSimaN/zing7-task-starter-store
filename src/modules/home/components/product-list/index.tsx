import { Region } from "@medusajs/medusa"
import Image from "next/image"
import { ProductCollectionWithPreviews } from "types/global"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PlaceholderImage from "@modules/common/icons/placeholder-image"

const ProductList = ({
    collections,
    region,
}: {
    collections: ProductCollectionWithPreviews[]
    region: Region
}) => {
    return (
        <div className="container md:px-0 px-4 md:py-12 py-8 md:mt-10 mt-6">
            <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-x-[1.875rem] gap-y-8 sm:space-y-0 space-y-8">
                {collections.map((collection) => (
                    <div key={collection.id} className="flex flex-col gap-y-5 max-w-sm">
                        <h1 className="font-rubik font-medium text-[1.375rem] leading-[1.875rem] tracking-[0.2px] text-grey-900">{collection.title}</h1>
                        {collection.products.map((product) => (
                            <div key={product.id} className="p-5">
                                <LocalizedClientLink
                                    href={`/products/${product.handle}`}
                                    className="flex items-center gap-x-4"
                                >
                                    <div className="inline-flex justify-center items-center rounded-lg">
                                        {product.thumbnail ? (
                                            <Image
                                                src={product.thumbnail}
                                                alt="Thumbnail"
                                                className="object-contain w-16 h-16"
                                                draggable={false}
                                                width={56}
                                                height={56}
                                            />
                                        ) : (
                                            <PlaceholderImage size={64} />
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-y-2 max-w-[11.75rem]">
                                        <h1 className="font-roboto font-medium text-base leading-[1.375rem] text-grey-900">{product.title}</h1>
                                        <div className="flex items-center gap-x-5">
                                            <span className="font-roboto font-normal text-sm leading-5 text-blue-600">{product.price?.original_price}</span>
                                            <span className="flex items-center font-roboto font-normal text-sm leading-5 text-grey-450">
                                                <svg className="w-4 h-4 text-orange-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                4.6
                                            </span>
                                        </div>
                                    </div>
                                </LocalizedClientLink>
                            </div>
                        ))}
                        <LocalizedClientLink
                            href={`/collections/${collection.handle}`}
                            className="flex justify-between items-center font-roboto font-medium text-base leading-[1.375rem] text-blue-900 p-3.5"
                        >
                            View More Products...
                            <svg className="w-6 h-6 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
                            </svg>
                        </LocalizedClientLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList