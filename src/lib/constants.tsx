import React from "react"
import { CreditCard } from "@medusajs/icons"

import Ideal from "@modules/common/icons/ideal"
import Bancontact from "@modules/common/icons/bancontact"
import PayPal from "@modules/common/icons/paypal"
import { airpods_2nd_gen, apple_watch_4_2020, beats_by_dre_c_3450, blog_image_1, blog_image_2, blog_image_3, garmin_watch_fit_x, harman_kardon_speaker, iphone_xs_max_pro, product_list_1_item, product_list_2_item, product_list_3_item, samsung_galaxy_watch_3, women_yellow_turtleneck } from "../../public/assets/images"
import { android_phone_icon, apple_icon, asus_icon, basket_ball_icon, ca_flag_icon, camera_icon, cn_flag_icon, controller_icon, de_flag_icon, es_flag_icon, fr_flag_icon, fruit_icon, gb_flag_icon, headset_icon, it_flag_icon, jp_flag_icon, monitor_icon, samsung_icon, sony_icon, undershirt_icon, us_flag_icon, wacom_icon, xiaomi_icon } from "../../public/assets/icons"

/* Map of payment provider_id to their title and icon. Add in any payment providers you want to use. */
export const paymentInfoMap: Record<
  string,
  { title: string; icon: React.JSX.Element }
> = {
  stripe: {
    title: "Credit card",
    icon: <CreditCard />,
  },
  "stripe-ideal": {
    title: "iDeal",
    icon: <Ideal />,
  },
  "stripe-bancontact": {
    title: "Bancontact",
    icon: <Bancontact />,
  },
  paypal: {
    title: "PayPal",
    icon: <PayPal />,
  },
  manual: {
    title: "Test payment",
    icon: <CreditCard />,
  },
  // Add more payment providers here
}

// Add currencies that don't need to be divided by 100
export const noDivisionCurrencies = [
  "krw",
  "jpy",
  "vnd",
  "clp",
  "pyg",
  "xaf",
  "xof",
  "bif",
  "djf",
  "gnf",
  "kmf",
  "mga",
  "rwf",
  "xpf",
  "htg",
  "vuv",
  "xag",
  "xdr",
  "xau",
]

export const products = [
  {
      isLoved: true,
      isOnSale: true,
      title: "Samsung Galaxy Watch 3",
      price: "$1,725.00",
      category: "Men Fashion",
      imgSrc: samsung_galaxy_watch_3
  },
  {
      isLoved: false,
      isOnSale: false,
      title: "Apple Watch 4 2020",
      price: "$1,725.00",
      category: "Men Fashion",
      imgSrc: apple_watch_4_2020
  },
  {
      isLoved: false,
      isOnSale: true,
      title: "iPhone XS Max Pro",
      price: "$1,725.00",
      category: "Men Fashion",
      imgSrc: iphone_xs_max_pro
  },
  {
      isLoved: false,
      isOnSale: false,
      title: "Beats by Dre C 3450",
      price: "$1,725.00",
      category: "Men Fashion",
      imgSrc: beats_by_dre_c_3450
  },
  {
      isLoved: false,
      isOnSale: true,
      title: "Airpods 2nd Gen",
      price: "$1,725.00",
      category: "Men Fashion",
      imgSrc: airpods_2nd_gen
  },
  {
      isLoved: false,
      isOnSale: true,
      title: "Garmin Watch Fit X",
      price: "$1,725.00",
      category: "Men Fashion",
      imgSrc: garmin_watch_fit_x
  },
  {
      isLoved: false,
      isOnSale: false,
      title: "Women Yellow Turtleneck",
      price: "$1,725.00",
      category: "Men Fashion",
      imgSrc: women_yellow_turtleneck
  },
  {
      isLoved: false,
      isOnSale: true,
      title: "Harman Kardon Speaker",
      price: "$1,725.00",
      category: "Men Fashion",
      imgSrc: harman_kardon_speaker
  }
];

export const categoryItems = [
  {
      imgSrc: android_phone_icon,
      name: "Category Name",
      itemCount: "2,3k items"
  },
  {
      imgSrc: camera_icon,
      name: "Category Name",
      itemCount: "2,3k items"
  },
  {
      imgSrc: monitor_icon,
      name: "Category Name",
      itemCount: "2,3k items"
  },
  {
      imgSrc: undershirt_icon,
      name: "Category Name",
      itemCount: "2,3k items"
  },
  {
      imgSrc: controller_icon,
      name: "Category Name",
      itemCount: "2,3k items"
  },
  {
      imgSrc: basket_ball_icon,
      name: "Category Name",
      itemCount: "2,3k items"
  },
];

export const categoryFilters = [
  {
      name: "All Categories"
  },
  {
      name: "Category Name"
  },
  {
      name: "Category Name"
  },
  {
      name: "Category Name"
  },
  {
      name: "Category Name"
  },
  {
      name: "Category Name"
  },
  {
      name: "Category Name"
  },
];

export const categoryListFilters = [
    {
        imgSrc: headset_icon,
        name: "Category 01"
    },
    {
        imgSrc: monitor_icon,
        name: "Item Category 02"
    },
    {
        imgSrc: android_phone_icon,
        name: "Category List 03"
    },
    {
        imgSrc: fruit_icon,
        name: "Category 04"
    },
    {
        imgSrc: camera_icon,
        name: "Item Category 05"
    },
    {
        imgSrc: undershirt_icon,
        name: "Category List 06"
    },
];

export const productLists = [
  {
      title: "Product list 1",
      listItems: [
          {
              productName: "Popular items from cat 01",
              productPrice: "$1,725.00",
              productImgSrc: product_list_1_item,
              productRating: "4,6"
          },
          {
              productName: "Popular items from cat 01",
              productPrice: "$1,725.00",
              productImgSrc: product_list_1_item,
              productRating: "4,6"
          },
          {
              productName: "Popular items from cat 01",
              productPrice: "$1,725.00",
              productImgSrc: product_list_1_item,
              productRating: "4,6"
          },
      ]
  },
  {
      title: "Product list 2",
      listItems: [
          {
              productName: "Popular items from cat 02",
              productPrice: "$1,725.00",
              productImgSrc: product_list_2_item,
              productRating: "4,6"
          },
          {
              productName: "Popular items from cat 02",
              productPrice: "$1,725.00",
              productImgSrc: product_list_2_item,
              productRating: "4,6"
          },
          {
              productName: "Popular items from cat 02",
              productPrice: "$1,725.00",
              productImgSrc: product_list_2_item,
              productRating: "4,6"
          },
      ]
  },
  {
      title: "Product list 3",
      listItems: [
          {
              productName: "Popular items from cat 03",
              productPrice: "$1,725.00",
              productImgSrc: product_list_3_item,
              productRating: "4,6"
          },
          {
              productName: "Popular items from cat 03",
              productPrice: "$1,725.00",
              productImgSrc: product_list_3_item,
              productRating: "4,6"
          },
          {
              productName: "Popular items from cat 03",
              productPrice: "$1,725.00",
              productImgSrc: product_list_3_item,
              productRating: "4,6"
          },
      ]
  },
];

export const blogCards = [
  {
      imgSrc: blog_image_1,
      blogTitle: "Types of Blouse In Catalog fashion",
      blogInfo: `In order to discuss the general function of the logo,
       we must firstly identify and define the environment…`,
      blogDate: "07 July 2020"
  },
  {
      imgSrc: blog_image_2,
      blogTitle: "Types of Blouse In Catalog fashion",
      blogInfo: `In order to discuss the general function of the logo,
       we must firstly identify and define the environment…`,
      blogDate: "08 July 2020"
  },
  {
      imgSrc: blog_image_3,
      blogTitle: "Types of Blouse In Catalog fashion",
      blogInfo: `In order to discuss the general function of the logo,
       we must firstly identify and define the environment…`,
      blogDate: "09 July 2020"
  },
];

export const brands = [
  {
      imgSrc: asus_icon,
      imgAlt: "asus icon"
  },
  {
      imgSrc: xiaomi_icon,
      imgAlt: "xiaomi icon"
  },
  {
      imgSrc: samsung_icon,
      imgAlt: "samsung icon"
  },
  {
      imgSrc: sony_icon,
      imgAlt: "sony icon"
  },
  {
      imgSrc: wacom_icon,
      imgAlt: "wacom icon"
  },
  {
      imgSrc: apple_icon,
      imgAlt: "apple icon"
  },
];

export const languageMenuItems = [
  { value: "English (US)", href: "#", icon: us_flag_icon },
  { value: "English (Canada)", href: "#", icon: ca_flag_icon },
  { value: "English (UK)", href: "#", icon: gb_flag_icon },
  { value: "Deutsch", href: "#", icon: de_flag_icon },
  { value: "Français", href: "#", icon: fr_flag_icon },
  { value: "中國人", href: "#", icon: cn_flag_icon },
  { value: "日本語", href: "#", icon: jp_flag_icon },
  { value: "Italiano", href: "#", icon: it_flag_icon },
  { value: "Español", href: "#", icon: es_flag_icon },
];

export const profileMenuItems = [
  { value: "My Account", href: "#" },
  { value: "My Orders", href: "#" },
  { value: "Settings", href: "#" },
  { value: "Favourites", href: "#" },
  { value: "Delivery Addresses", href: "#" },
  { value: "Billing Data", href: "#" },
  { value: "Sign Out", href: "#" },
];