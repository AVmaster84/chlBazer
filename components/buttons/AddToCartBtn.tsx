'use client'
import React from "react";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";

import useCartStore from "@/store/cartStore";
import { showToast } from "@/lib/showToast";
import { CartItem } from "@/types";


const AddToCartBtn = ({product}:{product:CartItem}) => {
  const {addToCart} = useCartStore()


  const handleAddToCart = () => {
    addToCart(product)
    showToast('Đã thêm vào giỏ hàng', product.images[0] as string,product.name)

  }

  return (
    <Button onClick={handleAddToCart} className="bg-linear-to-r from-blue-500 to-blue-800 hover:bg-blue-500 hover:ring-2  duration-300 text-white text-xl p-8 rounded-2xl w-full flex items-center gap-2">
      {" "}
     <ShoppingBag /> Thêm vào giỏ
    </Button>
  );
};

export default AddToCartBtn;
