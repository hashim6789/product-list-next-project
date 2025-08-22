"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductTabsHeaderProps {
  activeTab: "products" | "suppliers";
  onTabChange: (tab: "products" | "suppliers") => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortValue: string;
  onSortChange: (value: string) => void;
  resultText?: string;
  className?: string;
}

export function ProductTabsHeader({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  sortValue,
  onSortChange,
  resultText = "Road alignment planning and design",
  className,
}: ProductTabsHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Tabs */}
      <div className="flex items-center border-b border-gray-200">
        <Button
          variant="ghost"
          className={cn(
            "px-6 py-3 text-sm font-medium border-b-2 border-transparent rounded-none",
            activeTab === "products"
              ? "text-blue-600 border-blue-600 bg-blue-50"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          )}
          onClick={() => onTabChange("products")}
        >
          Products
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "px-6 py-3 text-sm font-medium border-b-2 border-transparent rounded-none",
            activeTab === "suppliers"
              ? "text-blue-600 border-blue-600 bg-blue-50"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          )}
          onClick={() => onTabChange("suppliers")}
        >
          Suppliers
        </Button>
      </div>

      {/* Search and Sort Row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600">
            Showing Result for:{" "}
            <span className="text-blue-600">{resultText}</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-64 h-9 text-sm"
            />
          </div>

          {/* Sort */}
          <Select value={sortValue} onValueChange={onSortChange}>
            <SelectTrigger className="w-32 h-9 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="name-asc">Name A-Z</SelectItem>
              <SelectItem value="name-desc">Name Z-A</SelectItem>
              <SelectItem value="price-asc">Price Low</SelectItem>
              <SelectItem value="price-desc">Price High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
