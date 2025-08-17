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
    <Button onClick={handleAddToCart} className="w-full p-8 rounded-full text-xl hover:ring-2 ring-slate-500 flex items-center gap-4">
      {" "}
     <ShoppingBag /> Thêm vào giỏ
    </Button>
  );
};

export default AddToCartBtn;
