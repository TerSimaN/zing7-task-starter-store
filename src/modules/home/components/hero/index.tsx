import Image from "next/image"
import Link from "next/link"
import { hero_image_1 } from "../../../../../public/assets/images"

const Hero = () => {
  return (
    <>
      <div className="flex items-center bg-grey-5 w-full">
        <div className="relative container flex max-sm:flex-col-reverse lg:gap-8 xl:gap-0 md:px-0 px-4 lg:py-16 py-8">
          <div className="mr-auto sm:mt-0 mt-6 max-w-[31.25rem]">
            <span className="font-roboto font-medium text-sm leading-5 text-blue-700">
              SONY WH-H910N
            </span>
            <h1 className="font-rubik font-medium sm:text-[3.5rem] text-4xl sm:leading-[4.5rem] leading-[3.5rem] tracking-[0.2px] text-grey-900 mt-4">
              Best in Hi-Res and Noise Cancelling
            </h1>
            <p className="font-roboto font-normal text-base leading-7 text-grey-450 mt-4">
              Experience finely tuned noise-canceling performance in a comfortable headphone.
              Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.
            </p>
            <div className="flex max-sm:flex-col items-center gap-5 mt-7">
              <button className="bg-blue-750 rounded-md font-roboto font-medium text-base leading-[1.375rem] text-white sm:w-40 w-80 h-12">Buy Now</button>
              <button className="border border-blue-600 rounded-md font-roboto font-medium text-base leading-[1.375rem] text-blue-600 sm:w-40 w-80 h-12">Learn More</button>
            </div>
            <Link href={"#"}>
              <svg className="w-6 h-6 text-grey-400 sm:mt-14 mt-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 14-4-4m4 4 4-4" />
              </svg>
            </Link>
          </div>
          <div className="relative z-10 sm:max-lg:hidden block lg:mt-0">
            <div className="absolute sm:left-16 left-20 sm:top-20 top-16 -z-10 bg-blue-600 rounded-full sm:w-[7.125rem] sm:h-[7.125rem] w-20 h-20"></div>
            <Image
              src={hero_image_1}
              alt="hero image"
              className="max-sm:w-60 sm:mx-0 mx-auto"
            />
          </div>
          <button className="hidden lg:block absolute top-60 -end-28 bg-white rounded-full p-5 w-16 h-16 shadow-lg shadow-grey-650/5">
            <svg className="w-6 h-6 text-grey-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero
