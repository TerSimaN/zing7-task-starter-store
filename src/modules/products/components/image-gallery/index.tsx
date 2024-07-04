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
          <div key={image.id} className={`${current === image.id ? `` : `hidden`} rounded-lg bg-white p-4`}>
            <Image
              src={image.url}
              alt={`Product image ${index + 1}`}
              width={445}
              height={345}
              className="w-full mx-auto"
            />
          </div>
        ))}
      </div>
      <ul id="product-tab" className="grid grid-cols-4 gap-4 mt-8">
        {images.map((image, index) => (
          <li key={image.id} className="me-2">
            <button
              onClick={() => setCurrent(image.id)}
              className="p-2 mx-auto sm:w-20 md:w-24 sm:h-20 md:h-24 w-20 h-20 overflow-hidden cursor-pointer"
            >
              <Image
                src={image.url}
                alt={`Product image ${index + 1}`}
                width={130}
                height={110}
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
