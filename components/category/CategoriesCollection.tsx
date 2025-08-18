"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { productsData } from "@/data/products/productsData";
import Link from "next/link";

const CategoriesCollection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCollectionClick = (collectionName: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", collectionName);
    router.push(`shop?${params.toString()}`);
  };

  const watches = productsData.filter(
    (item) => item.category.toLowerCase() === "watches"
  );

  const cameraips = productsData.filter(
    (item) => item.category.toLowerCase() === "cameraip"
  );

  const headphones = productsData.filter(
    (item) => item.category.toLowerCase() === "headphones"
  );

  const computers = productsData.filter(
    (item) => item.category.toLowerCase() === "computers"
  );

  return (
    <section className="py-16 bg-slate-200 dark:bg-slate-800 ">
      <div className="max-w-(--breakpoint-xl) px-4 md:px-8  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap">
        {/* showing watches collection */}
        {/* Show camera IP collection */}
        <div
          onClick={() => handleCollectionClick(cameraips[0].category)}
          className="flex flex-col gap-4 items-start justify-between p-4 md:p-8 rounded-xl bg-stone-400/20 dark:bg-slate-900 shadow-lg"
        >
          <h2 className="text-xl md:text-2xl text-center font-semibold my-4 w-full">
            Khuyến mãi trong 
            {/* <span className="text-2xl font-bold">{cameraips[0].category}</span> */}
            <span className="text-4xl font-black"><br />Camera IP</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 place-content-center w-full">
            {cameraips?.slice(0, 4)?.map((cameraip) => (
              <div
                key={cameraip.id}
                className="relative flex flex-col items-center justify-center text-center gap-2 border-1 rounded-lg border-stone-100/20  shadow-md h-64 hover:border-stone-200/10"
              >
                <div className="absolute -top-2 -right-4">
                  <p className="bg-rose-600 p-1 text-sm text-white animate-pulse whitespace-nowrap w-fit rounded-sm">
                     Giảm {cameraip.discount}%
                </p>
                </div>
                <Image
                  src={cameraip.images[0]}
                  alt={cameraip.name}
                  width={100}
                  height={100}
                  className="object-none rounded-md transition-all duration-700 hover:scale-140 overflow-visibility"
                />
                <div className="flex items-center flex-col">
                  <Link
                    href={`/shop/${cameraip.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className=" font-semibold hover:text-indigo-700 hover:text-extrabold"
                  >
                    {/* {cameraip.name.slice(0, 18)} */}
                    {cameraip.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="mt-4 flex items-center gap-4 text-lg font-semibold w-full"
            variant={"outline"}
            size={"lg"}
          >
            <ArrowRight /> Xem thêm
          </Button>
        </div>

        {/* showing headphones collection */}
        <div
          onClick={() => handleCollectionClick(headphones[0].category)}
           className="flex flex-col gap-4 items-start justify-between p-4 md:p-8 rounded-xl bg-stone-400/20 dark:bg-slate-900 shadow-lg"
        >
          <h2 className="text-xl md:text-2xl text-center font-semibold my-4 w-full">
            Khuyến mãi trong <span className="text-4xl font-black">{headphones[0].category}</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 place-content-center w-full">
            {headphones?.slice(0, 4)?.map((headphone) => (
              <div
                key={headphone.id}
                className="relative flex flex-col items-center justify-center text-center gap-2 border-1 rounded-lg border-stone-100/20 shadow-md h-64"
              >
                <div className="absolute -top-2 -right-4">
                  <p className="bg-rose-600 p-1 text-sm text-white animate-pulse whitespace-nowrap w-fit rounded-sm">
                      {headphone.discount}% off
                   </p>
                </div>
                <Image
                  src={headphone.images[0]}
                  alt={headphone.name}
                  width={100}
                  height={100}
                  className="object-contain rounded-md duration-700 transition-all hover:scale-140 overflow-visibility"
                />
                <div className="flex flex-col">
                  <Link
                    href={`/shop/${headphone.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className=" font-semibold hover:text-indigo-700 hover:text-extrabold"
                  >
                    {/* {headphone.name.slice(0, 15)}... */}
                    {headphone.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="mt-4 flex items-center gap-4 text-lg font-semibold w-full"
            variant={"outline"}
            size={"lg"}
          >
            <ArrowRight /> Xem thêm
          </Button>
        </div>

        {/* showing computers collection */}
        <div
          onClick={() => handleCollectionClick(computers[0].category)}
          className="flex flex-col gap-4 items-start justify-between p-4 md:p-8 rounded-xl bg-stone-400/20 dark:bg-slate-900 shadow-lg"
        >
          <h2 className="text-xl md:text-2xl text-center font-semibold my-4 w-full">
            Khuyến mãi trong <span className="text-4xl font-black">{computers[0].category}</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 place-content-center w-full">
            {computers?.slice(0, 4)?.map((computer) => (
              <div
                key={computer.id}
                className="relative flex flex-col items-center justify-center text-center gap-2 border-1 rounded-lg border-stone-100/20 shadow-md h-64 bg-background"
              >
                <div className="absolute -top-2 -right-4">
                  <p className="bg-rose-600 p-1 text-sm text-white animate-pulse whitespace-nowrap w-fit rounded-sm">
                      {computer.discount}% off
                  </p>
                </div>
                <Image
                  src={computer.images[0]}
                  alt={computer.name}
                  width={100}
                  height={100}
                  className="object-contain rounded-md duration-700 transition-all hover:scale-140 overflow-visibility"
                />
                <div className="flex items-center flex-col">
                  <Link
                    href={`/shop/${computer.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className=" font-semibold hover:text-indigo-700 hover:text-extrabold"
                  >
                    {/* {computer.name.slice(0, 15)}... */}
                    {computer.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="mt-4 flex items-center gap-4 text-lg font-semibold w-full"
            variant={"outline"}
            size={"lg"}
          >
            <ArrowRight /> Xem thêm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCollection;
