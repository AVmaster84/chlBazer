'use client';
import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

const loading = () => {
  return (
    <div className="w-full min-h-screen space-y-4  m-2 gap-4 p-4 max-w-(--breakpoint-xl) mx-auto">
      <Skeleton className="w-full h-20 rounded-full" />
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <Skeleton className="w-full h-80"/>
        <Skeleton className="w-full h-80"/>
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Skeleton className="w-full h-40"/>
        <Skeleton className="w-full h-40"/>
        <Skeleton className="w-full h-40"/>
        <Skeleton className="w-full h-40"/>
      </div>
    </div>
  );
};

export default loading;
