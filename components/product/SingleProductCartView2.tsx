"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FetchWooCommerceData } from "@/lib/fetchWooCommerceData";
import { WooCommerceProduct } from "@/types/types";

interface SingleProductCartViewProps {
  id: number;
}

const SingleProductCartView = ({ id }: SingleProductCartViewProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [product, setProduct] = useState<WooCommerceProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    fetchProductData();
  }, [id]);

  const fetchProductData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const fetchData = new FetchWooCommerceData();
      
      // ✅ Sửa: Sử dụng method phù hợp để fetch single product
      const productData = await fetchData.fetchProductById(id);
      setProduct(productData);
      
    } catch (error) {
      console.error('Error fetching product:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Thêm early return nếu chưa mount (SSR safety)
  if (!isMounted) {
    return null;
  }

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="relative border rounded-xl shadow-lg overflow-hidden group"
    >
      <div className={`w-full bg-gray-200 overflow-hidden`}>
        <div className="relative w-full h-72 group-hover:scale-110 transition-all duration-300 rounded-md overflow-hidden">
          {product.images[0] && (
            <Image 
                className="object-contain" 
                src={product.images[0].src} 
                alt={product.images[0].alt || product.name} 
                fill 
              />
            )}
          {product.stockItems === 0 ? (
            <p className="py-1 px-4 text-sm font-bold rounded-sm bg-rose-500 text-white absolute top-2 right-2">
              Đang tạm hết
            </p>
          ) : (
            product.discount > 0 && (
              <p className="py-1 px-4 text-sm font-bold rounded-sm bg-rose-500 text-white absolute top-2 right-2">
                Giảm giá {Math.round(product.discount)}%
              </p>
            )
          )}
        </div>
      </div>
      <div className="hidden group-hover:block slideCartOptions absolute top-16 right-2">
        {/* <ProductOptions product={product} /> */}
      </div>
      <div className="my-2 space-y-1 p-4">
        <p
          onClick={(e) => {
            e.preventDefault();
            router.push(`shop?category=${product.category}`);
          }}
          className="text-sm text-sky-500 font-light -mb-1 hover:opacity-60 "
        >
          {product.category.name}
        </p>
        <h3 className="text-xl font-fold capitalize hover:text-green-500">
          {product.name.slice(0, 45)}
          {product.name.length > 45 && "..."}
        </h3>
        {/* <RatingReview rating={product.rating} review={product.reviews.length} /> */}
        <div className="text-lg font-bold space-x-3 ">
          <span className="line-through text-slate-400/100">
            {formatPrice(product.price)}
          </span>
          <span className="text-xl font-bold text-black dark:text-white">
            {formatPrice(discountedPrice)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SingleProductCartView;