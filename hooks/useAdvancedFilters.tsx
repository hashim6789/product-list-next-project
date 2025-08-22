"use client";

import { useState, useCallback, useEffect } from "react";

interface PriceRange {
  min: number;
  max: number;
}

interface StockRange {
  min: number;
  max: number;
}

interface DateRange {
  from?: Date;
  to?: Date;
}

interface AdvancedFilters {
  priceRange: PriceRange;
  stockRange: StockRange;
  dateRange: DateRange;
  selectedFilters: Record<string, string[]>;
  searchQuery: string;
}

interface FilterPreset {
  id: string;
  name: string;
  filters: AdvancedFilters;
}

const DEFAULT_PRICE_RANGE = { min: 0, max: 1000 };
const DEFAULT_STOCK_RANGE = { min: 0, max: 500 };

export function useAdvancedFilters() {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [priceRange, setPriceRange] = useState<PriceRange>(DEFAULT_PRICE_RANGE);
  const [stockRange, setStockRange] = useState<StockRange>(DEFAULT_STOCK_RANGE);
  const [dateRange, setDateRange] = useState<DateRange>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [presets, setPresets] = useState<FilterPreset[]>([]);

  // Load presets from localStorage on mount
  useEffect(() => {
    const savedPresets = localStorage.getItem("filter-presets");
    if (savedPresets) {
      try {
        const parsed = JSON.parse(savedPresets);
        setPresets(parsed);
      } catch (error) {
        console.error(" Error loading filter presets:", error);
      }
    }
  }, []);

  // Save presets to localStorage when they change
  useEffect(() => {
    localStorage.setItem("filter-presets", JSON.stringify(presets));
  }, [presets]);

  const handleFilterChange = useCallback(
    (key: string, value: string, checked: boolean) => {
      setSelectedFilters((prev) => {
        const currentValues = prev[key] || [];
        const newValues = checked
          ? [...currentValues, value]
          : currentValues.filter((v) => v !== value);

        return {
          ...prev,
          [key]: newValues,
        };
      });
    },
    []
  );

  const handleClearAll = useCallback(() => {
    setSelectedFilters({});
    setPriceRange(DEFAULT_PRICE_RANGE);
    setStockRange(DEFAULT_STOCK_RANGE);
    setDateRange({});
    setSearchQuery("");
  }, []);

  const handleSavePreset = useCallback(
    (name: string, filters: AdvancedFilters) => {
      const newPreset: FilterPreset = {
        id: Date.now().toString(),
        name,
        filters: {
          ...filters,
          // Deep clone date objects
          dateRange: {
            from: filters.dateRange.from
              ? new Date(filters.dateRange.from)
              : undefined,
            to: filters.dateRange.to
              ? new Date(filters.dateRange.to)
              : undefined,
          },
        },
      };

      setPresets((prev) => [...prev, newPreset]);
    },
    []
  );

  const handleLoadPreset = useCallback((preset: FilterPreset) => {
    setSelectedFilters(preset.filters.selectedFilters);
    setPriceRange(preset.filters.priceRange);
    setStockRange(preset.filters.stockRange);
    setDateRange({
      from: preset.filters.dateRange.from
        ? new Date(preset.filters.dateRange.from)
        : undefined,
      to: preset.filters.dateRange.to
        ? new Date(preset.filters.dateRange.to)
        : undefined,
    });
    setSearchQuery(preset.filters.searchQuery);
  }, []);

  const handleDeletePreset = useCallback((presetId: string) => {
    setPresets((prev) => prev.filter((p) => p.id !== presetId));
  }, []);

  // Convert filters to API parameters
  const getApiFilters = useCallback(() => {
    const apiFilters: Record<string, any> = {};

    // Basic filters
    Object.entries(selectedFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        apiFilters[key] = values[0]; // API currently supports single values
      }
    });

    // Price range
    if (priceRange.min !== DEFAULT_PRICE_RANGE.min) {
      apiFilters.minPrice = priceRange.min;
    }
    if (priceRange.max !== DEFAULT_PRICE_RANGE.max) {
      apiFilters.maxPrice = priceRange.max;
    }

    // Stock range (would need API support)
    if (stockRange.min !== DEFAULT_STOCK_RANGE.min) {
      apiFilters.minStock = stockRange.min;
    }
    if (stockRange.max !== DEFAULT_STOCK_RANGE.max) {
      apiFilters.maxStock = stockRange.max;
    }

    // Date range (would need API support)
    if (dateRange.from) {
      apiFilters.fromDate = dateRange.from.toISOString();
    }
    if (dateRange.to) {
      apiFilters.toDate = dateRange.to.toISOString();
    }

    // Search query
    if (searchQuery.trim()) {
      apiFilters.search = searchQuery.trim();
    }

    return apiFilters;
  }, [selectedFilters, priceRange, stockRange, dateRange, searchQuery]);

  return {
    selectedFilters,
    priceRange,
    stockRange,
    dateRange,
    searchQuery,
    presets,
    handleFilterChange,
    handleClearAll,
    handleSavePreset,
    handleLoadPreset,
    handleDeletePreset,
    setPriceRange,
    setStockRange,
    setDateRange,
    setSearchQuery,
    getApiFilters,
  };
}
