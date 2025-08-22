"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@/lib/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onEnquiry?: (product: Product) => void;
  className?: string;
}

export function ProductCard({
  product,
  onEnquiry,
  className,
}: ProductCardProps) {
  return (
    <Card
      className={cn(
        "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <CardContent className="p-4">
        <div className="relative mb-3">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-50">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white hover:bg-red-600">
              NEW
            </Badge>
          )}
          {product.status === "out-of-stock" && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              Out of Stock
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm line-clamp-2 leading-tight">
            {product.name}
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Category: {product.category}</span>
            {product.safetyRating && (
              <Badge variant="outline" className="text-xs">
                {product.safetyRating}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Supplier: {product.supplier}</span>
            <span>Stock: {product.stock}</span>
          </div>

          {product.price > 0 && (
            <div className="text-lg font-bold text-primary">
              ${product.price.toFixed(2)}
            </div>
          )}

          <Button
            className="w-full mt-3"
            size="sm"
            onClick={() => onEnquiry?.(product)}
            disabled={product.status === "out-of-stock"}
          >
            {product.price === 0 ? "Get Sample" : "Send Enquiry"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProductCardSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardContent className="p-4">
        <div className="space-y-3">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
          <div className="flex justify-between">
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-3 w-1/4" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-1/4" />
          </div>
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-8 w-full" />
        </div>
      </CardContent>
    </Card>
  );
}
