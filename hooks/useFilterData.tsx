"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/lib/types";

interface FilterOption {
  value: string;
  label: string;
  count: number;
}

interface FilterGroup {
  title: string;
  key: string;
  options: FilterOption[];
  isCollapsible?: boolean;
}

export function useFilterData() {
  const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateFilterData = async () => {
      try {
        setLoading(true);

        // Fetch all products to generate filter counts
        const response = await fetch("/api/products?limit=1000");
        const data = await response.json();
        const allProducts: Product[] = data.data || [];

        // Generate filter groups with counts
        const businessTypes = new Map<string, number>();
        const categories = new Map<string, number>();
        const subCategories = new Map<string, number>();
        const statuses = new Map<string, number>();

        allProducts.forEach((product) => {
          businessTypes.set(
            product.businessType,
            (businessTypes.get(product.businessType) || 0) + 1
          );
          categories.set(
            product.category,
            (categories.get(product.category) || 0) + 1
          );
          subCategories.set(
            product.subCategory,
            (subCategories.get(product.subCategory) || 0) + 1
          );
          statuses.set(product.status, (statuses.get(product.status) || 0) + 1);
        });

        const groups: FilterGroup[] = [
          {
            title: "Business Type",
            key: "businessType",
            isCollapsible: true,
            options: Array.from(businessTypes.entries())
              .map(([value, count]) => ({ value, label: value, count }))
              .sort((a, b) => b.count - a.count),
          },
          {
            title: "Category",
            key: "category",
            isCollapsible: true,
            options: Array.from(categories.entries())
              .map(([value, count]) => ({ value, label: value, count }))
              .sort((a, b) => b.count - a.count),
          },
          {
            title: "Sub Category",
            key: "subCategory",
            isCollapsible: true,
            options: Array.from(subCategories.entries())
              .map(([value, count]) => ({ value, label: value, count }))
              .sort((a, b) => b.count - a.count),
          },
          {
            title: "Status",
            key: "status",
            options: Array.from(statuses.entries())
              .map(([value, count]) => ({
                value,
                label: value.charAt(0).toUpperCase() + value.slice(1),
                count,
              }))
              .sort((a, b) => b.count - a.count),
          },
        ];

        setFilterGroups(groups);
      } catch (error) {
        console.error(" Error generating filter data:", error);
      } finally {
        setLoading(false);
      }
    };

    generateFilterData();
  }, []);

  return { filterGroups, loading };
}
