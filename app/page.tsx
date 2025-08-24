"use client";

import {
  AdvancedFilterSidebar,
  AdvancedFilterSidebarSkeleton,
} from "@/components/AdvancedFilterComponents";
import ClientTestimonialSection from "@/components/ClientTestimonial";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { PaginationControls } from "@/components/PaginationControls";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductTabsHeader } from "@/components/ProductTabsHeader";
import { StaticFilterSidebar } from "@/components/StaticFilterSidebar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAdvancedFilters } from "@/hooks/useAdvancedFilters";
import { useFilterData } from "@/hooks/useFilterData";
import { useProducts } from "@/hooks/useProducts";
import { Product, SortType } from "@/lib/types";
import { cn } from "@/lib/utils";

import { SlidersHorizontal, Grid, List } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);
  const [activeTab, setActiveTab] = useState<"products" | "suppliers">(
    "products"
  );

  const [sortValue, setSortValue] = useState("latest");

  const {
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
    setPriceRange,
    setStockRange,
    setDateRange,
    setSearchQuery,
    getApiFilters,
  } = useAdvancedFilters();

  const { products, loading, pagination, filters, updateFilters, error } =
    useProducts();

  const { filterGroups, loading: filtersLoading } = useFilterData();

  useEffect(() => {
    const apiFilters = getApiFilters();
    updateFilters(apiFilters);
  }, [
    selectedFilters,
    priceRange,
    stockRange,
    dateRange,
    searchQuery,
    getApiFilters,
    updateFilters,
  ]);

  const handleSortChange = useCallback(
    (value: string) => {
      const [sortBy, sortOrder] = value.split("-") as [
        SortType,
        "asc" | "desc"
      ];
      updateFilters({ sortBy, sortOrder });
    },
    [updateFilters]
  );

  const handleEnquiry = useCallback((product: Product) => {
    console.log(" Enquiry for product:", product.name);
    // TODO: Implement enquiry modal/form
    alert(`Enquiry sent for ${product.name}`);
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Error Loading Products
            </h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Hero Banner */}
        <div className="mb-8">
          <HeroBanner />
        </div>

        {/* <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select
                  value={`${filters.sortBy}-${filters.sortOrder}`}
                  onValueChange={handleSortChange}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="createdAt-desc">Newest First</SelectItem>
                    <SelectItem value="createdAt-asc">Oldest First</SelectItem>
                    <SelectItem value="name-asc">Name A-Z</SelectItem>
                    <SelectItem value="name-desc">Name Z-A</SelectItem>
                    <SelectItem value="price-asc">Price Low to High</SelectItem>
                    <SelectItem value="price-desc">
                      Price High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Static Filter Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <StaticFilterSidebar
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAll}
            />
          </aside>
          {/* Advanced Filters Sidebar */}
          {/* {showFilters && (
            <aside className="w-80 flex-shrink-0">
              {filtersLoading ? (
                <AdvancedFilterSidebarSkeleton />
              ) : (
                <AdvancedFilterSidebar
                  filters={filterGroups}
                  selectedFilters={selectedFilters}
                  priceRange={priceRange}
                  stockRange={stockRange}
                  dateRange={dateRange}
                  searchQuery={searchQuery}
                  onFilterChange={handleFilterChange}
                  onPriceRangeChange={setPriceRange}
                  onStockRangeChange={setStockRange}
                  onDateRangeChange={setDateRange}
                  onSearchQueryChange={setSearchQuery}
                  onClearAll={handleClearAll}
                  onSavePreset={handleSavePreset}
                  onLoadPreset={handleLoadPreset}
                  presets={presets}
                />
              )}
            </aside>
          )} */}

          {/* Products Grid */}
          <div className="flex-1 space-y-6">
            <ProductTabsHeader
              activeTab={activeTab}
              onTabChange={setActiveTab}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortValue={sortValue}
              onSortChange={setSortValue}
            />

            <ProductGrid
              products={products}
              onEnquiry={handleEnquiry}
              isLoading={loading}
              className={cn(
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              )}
            />

            {/* Pagination */}
            {!loading && products.length > 0 && (
              <PaginationControls
                currentPage={pagination.page}
                totalPages={pagination.totalPages}
                // pageSize={pagination.limit}
                // totalItems={pagination.total}
                onPageChange={(page) => updateFilters({ page })}
                // onPageSizeChange={(limit) => updateFilters({ limit, page: 1 })}
              />
            )}
          </div>
        </div>
      </main>

      <ClientTestimonialSection />
      <Footer />
    </div>
  );
}
