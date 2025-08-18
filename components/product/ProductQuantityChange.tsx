import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface ProductQuantityChangeProps {
  quantity: number;
  setQuantity: (qty: number) => void;
}

const ProductQuantityChange = ({
  quantity,
  setQuantity,
}: ProductQuantityChangeProps) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-xs bg-background ">
      <Button
        disabled={quantity === 1}
        onClick={() => setQuantity(quantity - 1)}
        className="px-3 py-2 rounded-md outline-1 text-md"
        variant={"outline"}
      >
        <Minus />
      </Button>
      <p className="text-xl font-semibold">{quantity}</p>
      <Button
        onClick={() => setQuantity(quantity + 1)}
        className="px-3 py-2 rounded-md outline-1 text-md"
        variant={"outline"}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default ProductQuantityChange;
