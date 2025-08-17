import ShopPageOne from "@/components/pages/shop-pages/ShopPageOne";
import { SearchParams } from "@/types";
import React from "react";

async function ShopPage(
  props: {
    searchParams: Promise<SearchParams>
  }
) {
  const searchParams = await props.searchParams;
  return (
    <div>
      <ShopPageOne searchParams={searchParams} />
    </div>
  );
}

export default ShopPage;
