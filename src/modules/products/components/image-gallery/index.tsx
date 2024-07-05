"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [current, setCurrent] = useState(images[0].id);

  return (
    <>
      <div id="product-tab-content">
        {images.map((image, index) => (
          <div key={image.id} className={`${current === image.id ? `` : `hidden`} relative rounded-lg bg-white w-[27.875rem] h-[21.5rem]`}>
            <Image
              src={image.url}
              alt={`Product image ${index + 1}`}
              fill
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
      <ul id="product-tab" className="grid grid-cols-3 gap-4 mt-5">
        {images.map((image, index) => (
          <li key={image.id}>
            <button
              onClick={() => setCurrent(image.id)}
              className="relative md:w-32 md:h-28 w-20 h-20 overflow-hidden cursor-pointer"
            >
              <Image
                src={image.url}
                alt={`Product image ${index + 1}`}
                fill
                className="object-contain w-full h-full"
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ImageGallery
