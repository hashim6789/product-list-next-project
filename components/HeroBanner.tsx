"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function HeroBanner() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700 text-white border-0 rounded-lg">
      <div className="flex items-center justify-between p-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            Durable Construction: The 3M 6200 half face respirator,
            <br />
            ensuring a durable and long-lasting product.
          </h1>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Buy Now
          </Button>
        </div>

        <div className="hidden md:block relative w-64 h-48">
          <Image
            src="/gray-respirator-mask.png"
            alt="3M 6200 Respirator"
            fill
            className="object-contain"
            sizes="256px"
          />
        </div>
      </div>
    </Card>
  );
}
