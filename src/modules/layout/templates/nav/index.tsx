import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Link from "next/link"
import { categoryFilters, profileMenuItems } from "@lib/constants"
import Image from "next/image"
import { facebook_icon, instagram_icon, twitter_icon, youtube_icon } from "../../../../../public/assets/icons"
import MenuDropdown from "@modules/layout/components/menu-dropdown"
import LanguageSelect from "@modules/layout/components/language-select"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative duration-200 bg-white">
        <nav className="bg-white px-4 lg:px-0 pt-4 pb-5">
          <div className="container sm:flex justify-between items-center sm:space-y-0 space-y-4">
            <div className="flex sm:gap-x-3 max-sm:justify-evenly items-center">
              <Link href="#">
                <Image
                  src={facebook_icon}
                  alt="facebook_icon"
                />
              </Link>
              <Link href="#">
                <Image
                  src={twitter_icon}
                  alt="twitter_icon"
                />
              </Link>
              <Link href="#">
                <Image
                  src={youtube_icon}
                  alt="youtube_icon"
                />
              </Link>
              <Link href="#">
                <Image
                  src={instagram_icon}
                  alt="instagram_icon"
                />
              </Link>
            </div>
            <div className="flex sm:gap-x-5 sm:justify-normal justify-between items-center z-30">
              <span className="font-rubik font-normal text-base leading-5 tracking-[0.18px] text-grey-500">
                <SideMenu regions={regions} />
              </span>
              <LocalizedClientLink
                href="#"
                className="font-rubik font-normal text-base leading-5 tracking-[0.18px] text-grey-500"
                data-testid="nav-store-link"
              >
                Order tracking
              </LocalizedClientLink>
              <LocalizedClientLink
                href="#"
                className="font-rubik font-normal text-base leading-5 tracking-[0.18px] text-grey-500"
                data-testid="nav-store-link"
              >
                Help
              </LocalizedClientLink>
              <div className="hidden small:flex items-center gap-x-6 h-full">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/search"
                    scroll={false}
                    data-testid="nav-search-link"
                  >
                    Search
                  </LocalizedClientLink>
                )}
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  Account
                </LocalizedClientLink>
              </div>
              {regions && <LanguageSelect regions={regions} />}
            </div>
          </div>
          <div className="border border-grey-100 mt-4"></div>
          <div className="container flex justify-between items-center mt-5">
            <LocalizedClientLink
              href="/"
              className="font-rubik font-medium text-[1.75rem] leading-[2.75rem] tracking-[0.2px] uppercase"
              data-testid="nav-store-link"
            >
              Store
            </LocalizedClientLink>
            <form className="hidden md:flex items-center bg-grey-5 rounded-lg mx-auto max-w-[28.25rem] max-h-11">
              <div className="border-e border-grey-100 min-w-[15.25rem]">
                <input
                  type="text"
                  className="flex bg-transparent p-3 w-full focus:outline-none placeholder:font-roboto placeholder:font-normal placeholder:text-sm placeholder:leading-5 placeholder:text-grey-450"
                  placeholder="Search something..."
                />
              </div>
              <div className="relative hidden lg:flex">
                <button type="button" className="inline-flex flex-shrink-0 items-center font-roboto font-normal text-sm leading-5 px-5">
                  All Categories
                  <svg className="w-[1.375rem] h-[1.375rem] ms-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                  </svg>
                </button>
                <div className={`hidden absolute top-10 left-0 z-10 bg-white rounded-lg w-fit overflow-hidden overflow-y-auto shadow`}>
                  <ul className="p-2">
                    {categoryFilters.map((categoryFilter, index) => (
                      <li key={index} className="inline-flex w-full whitespace-nowrap">
                        <Link href="#" className="inline-flex items-center rounded-md px-3 py-2 w-full hover:bg-grey-100">
                          {categoryFilter.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-grey-800 rounded-lg ml-5">
                <button type="submit" className="text-white p-3.5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </button>
              </div>
            </form>
            <div className="flex gap-x-4">
              <button type="button" className="relative md:hidden inline-flex items-center border border-grey-100 rounded-full text-center text-grey-400 p-3">
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </button>
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="flex gap-2"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    Cart (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
              <button type="button" className="hidden sm:inline-flex items-center border border-grey-100 rounded-full text-center text-grey-400 p-3">
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                </svg>
              </button>
              <div className="hidden sm:flex">
                <div className="inline-flex items-center border border-grey-100 rounded-full text-center text-grey-400 p-3">
                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex flex-col z-20 ms-4">
                  <span className="font-rubik font-normal text-base leading-5 tracking-[0.18px] text-grey-500 mb-1.5">Ivan Todorov</span>
                  <MenuDropdown
                    menuText="My Account"
                    menuItems={profileMenuItems}
                    className="font-rubik font-normal text-base leading-5 tracking-[0.18px] text-grey-900"
                  />
                </div>
              </div>
              <div className="relative sm:hidden">
                <button type="button" className="inline-flex items-center border border-grey-100 rounded-full text-center text-grey-400 p-3">
                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`hidden absolute right-0 z-20 bg-white rounded-lg mt-2 w-48 overflow-hidden overflow-y-auto shadow`}>
                  <div className="inline-flex flex-col items-center border-b border-grey-100 px-3 pb-1.5 mt-4 w-full whitespace-nowrap">
                    <div className="inline-flex items-center border border-grey-100 rounded-full text-center text-grey-400 p-3">
                      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="inline-flex justify-center rounded-mdfont-rubik font-normal text-base leading-5 tracking-[0.18px] text-grey-500 px-3 py-2 w-full ">
                      Ivan Todorov
                    </span>
                    <button className="border border-grey-300 border-opacity-20 rounded-lg px-3 py-1.5 mt-2 w-full hover:bg-grey-100">View Profile</button>
                  </div>
                  <ul className="p-2">
                    {profileMenuItems.map((menuItem, index) => (
                      <li key={index} className="inline-flex w-full whitespace-nowrap">
                        <Link href={menuItem.href} className="inline-flex items-center rounded-md px-3 py-2 w-full hover:bg-grey-100">
                          {menuItem.value}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <form className={`flex md:hidden items-center bg-grey-5 rounded-lg mx-auto max-w-[28.25rem] max-h-11 mt-4`}>
            <div className="border-e border-grey-100 w-full">
              <input
                type="text"
                className="flex bg-transparent p-3 w-full focus:outline-none placeholder:font-roboto placeholder:font-normal placeholder:text-sm placeholder:leading-5 placeholder:text-grey-450"
                placeholder="Search something..."
              />
            </div>
            <div className="relative hidden sm:flex">
              <button type="button" className="inline-flex flex-shrink-0 items-center font-roboto font-normal text-sm leading-5 px-5">
                All Categories
                <svg className="w-[1.375rem] h-[1.375rem] ms-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </button>
              <div className={`hidden absolute top-10 left-0 z-10 bg-white rounded-lg w-fit overflow-hidden overflow-y-auto shadow`}>
                <ul className="p-2">
                  {categoryFilters.map((categoryFilter, index) => (
                    <li key={index} className="inline-flex w-full whitespace-nowrap">
                      <Link href="#" className="inline-flex items-center rounded-md px-3 py-2 w-full hover:bg-grey-100">
                        {categoryFilter.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-grey-800 rounded-lg sm:ml-5">
              <button type="submit" className="text-white p-3.5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
          </form>
        </nav>
      </header>
    </div>
  )
}
