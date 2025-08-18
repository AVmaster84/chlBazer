"use client";
import { ShoppingBag, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "../ui/separator";
import Image from "next/image";
import ViewCart from "../buttons/ViewCart";
import CheckoutBtn from "../buttons/CheckoutBtn";
import { Button } from "../ui/button";
import useCartStore from "@/store/cartStore";
import { showToast } from "@/lib/showToast";
import { CartItem } from "@/types";
import { formatPrice } from "@/lib/formatPrice";

const Cart = () => {
  const { cartItems, getTotalItems, removeFromCart, getTotalPrice } =
    useCartStore();
  const [showSheet, setShowSheet] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleRovomeItemFromCart = (item: CartItem) => {
    removeFromCart(item.id);
    showToast("Item Removed from Cart", item?.images[0] as string, item.name);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="relative p-2 hover:bg-gray-200 dark:hover:bg-gray-800 duration-200 rounded-md">
        <ShoppingBag size={25} />
        <Badge className="absolute -top-2 -right-3" variant="destructive">
          0
        </Badge>
      </div>
    );
  }

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto">
      <Sheet open={showSheet} onOpenChange={() => setShowSheet(!showSheet)}>
        <SheetTrigger>
          <div className="relative p-2 hover:bg-gray-200 dark:hover:bg-gray-800 duration-200 rounded-md mt-2">
            <ShoppingBag size={25} />
            <Badge className="absolute -top-0 -right-2" variant="destructive">
              {getTotalItems()}
            </Badge>
          </div>
        </SheetTrigger>
        <SheetContent className="w-[80%] overflow-y-auto md:overflow-y-hidden dark:bg-gray-800 dark:opacity-60">
          <SheetHeader>
            <SheetTitle>Giỏ hàng</SheetTitle>
            <Separator />
            <SheetDescription className="flex items-start justify-between gap-4 flex-col h-[90vh]">
              <div className="overflow-y-auto">
                {/* cart items here */}
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-start gap-2 p-2
                      mt-2 border-b-2 border-t-gray-500"
                  >
                    <Image
                      className="rounded-full object-contain"
                      src={item?.images && item?.images[0]}
                      alt="product image"
                      width={70}
                      height={70}
                    />
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                        <h2>{item.name.slice(0, 50)}...</h2>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-lg px-2 rounded-md text-muted-foreground">
                          {formatPrice(item.price)}
                        </p>
                        <p className="text-lg"> x {item.quantity}</p>
                        <Button
                          onClick={() => handleRovomeItemFromCart(item)}
                          variant={"destructive"}
                          size={"xs"}
                          className="rounded-full bg-blue-500 hover:bg-blue-900"
                        >
                          <X />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* subtotal and buttons here */}
              <div className="w-full">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl text-center font-semibold">
                    Tổng cộng :
                  </h3>
                  <p className="text-xl text-center font-bold text-green-500">
                    {formatPrice(getTotalPrice())} vnđ
                  </p>
                </div>

                <Separator className="my-2!" />
                <div
                  className="flex flex-col items-center my-2!"
                  onClick={() => setShowSheet(false)}
                >
                  <ViewCart />
                  <CheckoutBtn />
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Cart;
