"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  isInModal: boolean;
}

const ProductGallery = ({ images, isInModal }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageSelection = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="">
      <div
        className={cn(
          "relative w-full rounded-xl overflow-hidden bg-gray-200",
          isInModal
            ? "w-full lg:min-w-120 h-60 lg:h-100"
            : "w-full lg:min-w-120 h-80 lg:h-120"
        )}
      >
        <Image
          className="object-contain "
          src={selectedImage}
          alt="product"
          fill
        />
      </div>
      <div className="flex items-center gap-2 p-2 overflow-auto hide-scrollbar mt-2">
        {images.map((image) => (
          <Image
            onClick={() => handleImageSelection(image)}
            className={cn("rounded-md object-cover border", image === selectedImage && 'ring-2')}
            src={image}
            alt="product"
            key={image}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
