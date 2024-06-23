import Image from 'next/image'
import React from 'react'
import { promo_banner_image } from '../../../../../public/assets/images'

const PromoBanner = () => {
    return (
        <div className="relative container flex max-sm:flex-col justify-end items-center bg-blue-700 bg-opacity-10 lg:pr-[6.875rem] lg:px-0 px-4 lg:py-14 py-7 lg:mt-10 mt-6">
            <Image
                src={promo_banner_image}
                alt="promo banner image"
                className="max-sm:block sm:absolute lg:left-[6.25rem] left-4 top-3 lg:w-[21.75rem] w-72"
            />
            <div className="flex flex-col sm:mt-0 mt-4 max-w-[23.5rem]">
                <span className="font-roboto font-medium text-sm leading-5 text-blue-700">FLASH SALE 7.7.7</span>
                <h1 className="font-rubik font-medium text-4xl leading-[3.25rem] tracking-[0.2px] text-grey-900 mt-4">Lenovo Yoga X</h1>
                <p className="font-roboto font-normal text-base leading-[1.625rem] text-grey-450 mt-2.5">
                    Smarter and intuitive with the same expert design
                    and detail. Plus combine innovative latest AI features
                </p>
                <div className="flex items-center gap-x-6 mt-7">
                    <button className="bg-blue-700 rounded-md font-roboto font-medium text-base leading-[1.375rem] text-white px-5 py-3">Buy Now for $750</button>
                    <span className="font-roboto font-medium text-xl leading-7 text-grey-450 line-through">$1500,00</span>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner