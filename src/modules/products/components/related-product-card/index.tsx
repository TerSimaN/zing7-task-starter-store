'use client';

import { useState } from 'react';
import { ProductPreviewType } from 'types/global';
import Image from 'next/image';
import PlaceholderImage from '@modules/common/icons/placeholder-image';
import LocalizedClientLink from '@modules/common/components/localized-client-link';

const RelatedProductCard = ({ productPreview }: { productPreview: ProductPreviewType }) => {
    const [cardSelected, setCardSelected] = useState(false);

    return (
        <div className="relative flex flex-col bg-white rounded-lg px-5 pt-4 pb-6 w-64 h-[22.5rem]" onMouseEnter={() => setCardSelected(true)} onMouseLeave={() => setCardSelected(false)}>
            <div className="flex justify-between items-center">
                <span className={`${productPreview.price?.price_type === "sale" ? `` : `invisible`} bg-red-600 bg-opacity-10 rounded font-roboto font-medium text-xs leading-[1.125rem] text-red-600 px-2.5 py-1`}>
                    SALE
                </span>
                <span className="invisible inline-flex items-center border border-grey-300 border-opacity-10 rounded-full text-center text-grey-300 p-2">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                    </svg>
                </span>
            </div>
            <div className="relative flex justify-center items-center mt-7 h-[14.25rem]">
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
            <div className="flex flex-col mt-8">
                <h1 className="font-roboto font-medium text-base leading-[1.375rem] text-grey-900 mt-2">
                    {productPreview.title}
                </h1>
                <div className="flex justify-between items-center mt-3">
                    <span className="font-roboto font-medium text-sm leading-5 text-blue-600">
                        {productPreview.price?.original_price}
                    </span>
                    <div className="flex items-center gap-x-1">
                        <svg className="w-4 h-4 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={`absolute inset-0 ${cardSelected ? `flex` : `hidden`} flex-col rounded-lg bg-grey-800 bg-opacity-20 w-64 h-[22.5rem]`}>
                <button className="inline-flex items-center place-self-end bg-white rounded-full p-2.5 mt-6 me-5">
                    <svg className="w-4 h-4 text-grey-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                    </svg>
                </button>
                <div className="flex gap-x-5 items-center mt-24 mx-auto">
                    <LocalizedClientLink
                        href={`/products/${productPreview.handle}`}
                        className="bg-white rounded-md p-2.5"
                    >
                        <svg className="w-6 h-6 text-grey-700" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.4 3.6C9.4 3.26863 9.66863 3 10 3C10.3314 3 10.6 3.26863 10.6 3.6V5.2C10.6 5.53137 10.3314 5.8 10 5.8C9.66863 5.8 9.4 5.53137 9.4 5.2V3.6ZM10 12.8C10.6627 12.8 11.2 12.2627 11.2 11.6C11.2 10.9373 10.6627 10.4 10 10.4C9.33726 10.4 8.8 10.9373 8.8 11.6C8.8 12.2627 9.33726 12.8 10 12.8ZM16.8243 3.97574C16.5899 3.74142 16.21 3.74142 15.9757 3.97574L14.3757 5.57574C14.1414 5.81005 14.1414 6.18995 14.3757 6.42426C14.61 6.65858 14.9899 6.65858 15.2243 6.42426L16.8243 4.82426C17.0586 4.58995 17.0586 4.21005 16.8243 3.97574ZM4.02426 3.97574L5.62426 5.57574C5.85858 5.81005 5.85858 6.18995 5.62426 6.42426C5.38995 6.65858 5.01005 6.65858 4.77574 6.42426L3.17574 4.82426C2.94142 4.58995 2.94142 4.21005 3.17574 3.97574C3.41005 3.74142 3.78995 3.74142 4.02426 3.97574ZM3.23047 11.4469C4.49865 8.38647 7.09412 6.4 10 6.4C12.9059 6.4 15.5013 8.38647 16.7695 11.4469C16.8102 11.5449 16.8102 11.6551 16.7695 11.7531C15.5013 14.8135 12.9059 16.8 10 16.8C7.09412 16.8 4.49865 14.8135 3.23047 11.7531C3.18984 11.6551 3.18984 11.5449 3.23047 11.4469ZM10 13.6C8.89543 13.6 8 12.7046 8 11.6C8 10.4954 8.89543 9.6 10 9.6C11.1046 9.6 12 10.4954 12 11.6C12 12.7046 11.1046 13.6 10 13.6Z" />
                        </svg>
                    </LocalizedClientLink>
                    <button className="bg-white rounded-md p-2.5">
                        <svg className="w-6 h-6 text-grey-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RelatedProductCard