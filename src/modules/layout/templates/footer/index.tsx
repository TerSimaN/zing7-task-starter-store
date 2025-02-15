/* import { Text, clx } from "@medusajs/ui"
import { getCategoriesList, getCollectionsList } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta" */

import Image from "next/image"
import Link from "next/link"
import { facebook_icon, github_icon, instagram_icon, linkedin_icon, twitter_icon } from "../../../../../public/assets/icons"

export default async function Footer() {
  /* const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6) */

  return (
    <footer className="bg-grey-100 w-full">
      {/* <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Store
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Links</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small"></ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div> */}
      <div className="container flex max-sm:flex-col gap-y-4 items-center justify-between md:px-0 px-4 py-5 w-full">
        <span className="font-roboto font-normal text-sm leading-5 text-grey-600">
          Store © Copyright {new Date().getFullYear()}, Inc. All rights reserved
        </span>
        <div className="flex sm:gap-x-3 gap-x-10 items-center">
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
              src={linkedin_icon}
              alt="linkedin_icon"
            />
          </Link>
          <Link href="#">
            <Image
              src={instagram_icon}
              alt="instagram_icon"
            />
          </Link>
          <Link href="#">
            <Image
              src={github_icon}
              alt="github_icon"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
