import { blogCards } from '@lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
    return (
        <div className="md:px-0 px-4 lg:py-16 py-8 lg:mt-5 mt-3">
            <div className="container flex flex-col sm:gap-y-14 gap-y-8">
                <div className="flex max-sm:flex-col justify-between sm:space-y-0 space-y-6">
                    <div className="flex flex-col">
                        <h2 className="font-rubik font-medium text-4xl leading-[3.25rem] tracking-[0.2px] text-grey-900">Read our blog</h2>
                        <p className="font-roboto font-normal text-base leading-[1.375rem] text-grey-450 sm:mt-3 mt-1">Check our latest article to get meaningfull content or tips for shopping</p>
                    </div>
                    <button className="border border-blue-600 rounded-lg font-roboto font-medium text-base leading-[1.375rem] text-blue-600 px-4 h-12">More on blogs</button>
                </div>
                <div className="grid sm:grid-cols-3 gap-7">
                    {blogCards.map((blogCard, index) => (
                        <div key={index} className="max-w-sm">
                            <Link href={'#'}>
                                <Image
                                    src={blogCard.imgSrc}
                                    alt="blog image"
                                    className="rounded-lg"
                                />
                            </Link>
                            <div className="flex flex-col sm:mt-5 mt-3">
                                <span className="font-roboto font-normal text-sm leading-5 text-blue-600">{blogCard.blogDate}</span>
                                <Link href={'#'}>
                                    <h1 className="font-rubik font-medium text-lg leading-5 tracking-[0.2px] text-grey-900 sm:mt-5 mt-2">{blogCard.blogTitle}</h1>
                                </Link>
                                <p className="font-roboto font-normal text-sm leading-5 text-grey-450 sm:mt-3 mt-2">{blogCard.blogInfo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog