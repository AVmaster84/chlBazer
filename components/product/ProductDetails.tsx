"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import ProductTab from "./ProductTab";
import BuyNowBtn from "../buttons/BuyNowBtn";
import AddToCartBtn from "../buttons/AddToCartBtn";
import ProductQuantityChange from "./ProductQuantityChange";
import RatingReview from "../others/RatingReview";
import ProductDescription from "./ProductDescription";
import ProductColorSelection from "./ProductColorSelection";
import { Product } from "@/types";
import Link from "next/link";
import { calculateDiscount } from "@/lib/calculateDiscount";
import { formatPrice } from "@/lib/formatPrice";



const ProductDetails = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
const discountedPrice = calculateDiscount(product.price, product.discount);
  return (
    <div className="space-y-2 mt-2">
      {/* Category */}
      <Link
        href={`/shop?category=${product.category}`}
        className="bg-lime-500 py-1 px-4 rounded-full w-fit"
      >
        {product?.category}
      </Link>
      {/* Product Name */}
      <h2 className="text-2xl md:text-3xl font-bold capitalize">
        {product?.name}
      </h2>
      {/* Rating and Review */}
      <RatingReview
        rating={product?.rating || 0}
        review={product?.reviews.length || 0}
      />
      {/* Product Description */}
      <ProductDescription description={product?.description as string} />
      
      <div className="flex items-center gap-6">
        <div className="">
          {/* Original Price */}
          
          <div className="flex items-center gap-4">
            {/* Discounted Price */}
            
            <p className="text-2xl font-bold text-slate-900 py-2 rounded-lg dark:text-white">
              {formatPrice(discountedPrice)}
              {/* {formatPrice(calculateDiscount(product.price, product.discount))}  */}
              {/* {calculateDiscount(product.price, product.discount)} */}
            </p>
            <p className="text-slate-400 line-through text-2xl">
                {formatPrice(product?.price)}
            </p>

            {/* product stock */}
            <div>
              {product.stockItems === 0 ? (
                <p className="text-lg  w-fit rounded-md text-muted-foreground">Tạm hết</p>
              ) : (
                <p className="text-lg w-fit rounded-md text-muted-foreground">
                  Còn hàng <span className="text-lg text-black dark:text-white">({product.stockItems})</span> 
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* product stock */}
      <div>
        {product.stockItems === 0 ? (
          <p className="text-lg  w-fit rounded-md text-muted-foreground">Tạm hết</p>
        ) : (
          <p className="text-lg w-fit rounded-md text-muted-foreground">
            Còn hàng <span className="text-lg text-black dark:text-white">({product.stockItems})</span> 
          </p>
        )}
      </div>
      {/* product colors */}
      <ProductColorSelection
        color={selectedColor}
        setColor={setSelectedColor}
        allColors={product.color!}
      />

      <div className="flex flex-col md:flex-row items-center gap-4 my-6!">
        {/* product quantity change */}
        <ProductQuantityChange
              quantity={quantity}
              setQuantity={setQuantity}
            />
        {/* Add To Cart Button */}
        <AddToCartBtn product={{ ...product, quantity, selectedColor }} />
        {/* Buy Now Button */}
        <BuyNowBtn product={{ ...product, quantity, selectedColor }} />
      </div>
      {/* Separator */}
      <Separator className="mt-4!" />
      {/* Product Tab */}
      <ProductTab aboutItem={product?.aboutItem!} reviews={product?.reviews} />
    </div>
  );
};

export default ProductDetails;
