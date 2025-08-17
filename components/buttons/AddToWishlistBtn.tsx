'use client'
import React from "react";
import { Button } from "../ui/button";
import { Product,} from "@/types";
import useWishlistStore from "@/store/wishlistStore";
import { showToast } from "@/lib/showToast";

const AddToWishlistBtn = ({product}:{product:Product}) => {
  const {addToWishlist,isInWishlist} = useWishlistStore()

  const handleAddToWishList = () => {
    if(isInWishlist(product.id)){
      showToast('Đã có sẵn trong mục Yêu thích của bạn',product.images[0] as string, product.name)
    }else{
      addToWishlist(product);
    showToast('Đã thêm vào mục Yêu thích của bạn',product.images[0] as string, product.name)
    }
  }

  return (
    <Button onClick={(handleAddToWishList)} variant={"outline"} className="w-full p-8 text-xl rounded-full">
      {" "}
      thêm vào mục Yêu thích
    </Button>
  );
};

export default AddToWishlistBtn;
