"use client";

import { useState, useEffect, useCallback } from "react";
import type { Product, ProductFilters, PaginatedResponse } from "@/lib/types";

interface UseProductsOptions {
  initialFilters?: Partial<ProductFilters>;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false,
  });

  const [filters, setFilters] = useState<ProductFilters>({
    page: 1,
    limit: 12,
    sortBy: "createdAt-desc",
    sortOrder: "desc",
    ...options.initialFilters,
  });

  const fetchProducts = useCallback(async (currentFilters: ProductFilters) => {
    try {
      setLoading(true);
      setError(null);

      const searchParams = new URLSearchParams();
      Object.entries(currentFilters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          searchParams.append(key, value.toString());
        }
      });

      console.log(" Fetching products with filters:", currentFilters);

      const response = await fetch(`/api/products?${searchParams.toString()}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      const data: PaginatedResponse<Product> = await response.json();

      console.log(" Products fetched successfully:", data);

      setProducts(data.data);
      setPagination(data.pagination);
    } catch (err) {
      console.error(" Error fetching products:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts(filters);
  }, [filters, fetchProducts]);

  const updateFilters = useCallback((newFilters: Partial<ProductFilters>) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
      // Reset to page 1 when filters change (except when changing page)
      page: newFilters.page !== undefined ? newFilters.page : 1,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      page: 1,
      limit: 12,
      sortBy: "createdAt-desc",
      sortOrder: "desc",
    });
  }, []);

  return {
    products,
    loading,
    error,
    pagination,
    filters,
    updateFilters,
    resetFilters,
    refetch: () => fetchProducts(filters),
  };
}
