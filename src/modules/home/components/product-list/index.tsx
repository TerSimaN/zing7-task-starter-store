import { productLists } from "@lib/constants"
import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    return (
        <div className="container md:px-0 px-4 md:py-12 py-8 md:mt-10 mt-6">
            <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-x-[1.875rem] gap-y-8 sm:space-y-0 space-y-8">
                {productLists.map((productList, index) => (
                    <div key={index} className="flex flex-col gap-y-5 max-w-sm">
                        <h1 className="font-rubik font-medium text-[1.375rem] leading-[1.875rem] tracking-[0.2px] text-grey-900">{productList.title}</h1>
                        {productList.listItems.map((listItem, index) => (
                            <div key={index} className="flex items-center p-5">
                                <div className="inline-flex justify-center items-center w-16 h-16">
                                    <Image
                                        src={listItem.productImgSrc}
                                        alt="product image"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-2 ms-4">
                                    <h1 className="font-roboto font-medium text-base leading-[1.375rem] text-grey-900">{listItem.productName}</h1>
                                    <div className="flex items-center gap-x-5">
                                        <span className="font-roboto font-normal text-sm leading-5 text-blue-600">{listItem.productPrice}</span>
                                        <span className="flex items-center font-roboto font-normal text-sm leading-5 text-grey-450">
                                            <svg className="w-4 h-4 text-orange-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            {listItem.productRating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Link href={'#'} className="flex justify-between items-center font-roboto font-medium text-base leading-[1.375rem] text-blue-900 p-3.5">
                            View More Products...
                            <svg className="w-6 h-6 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList