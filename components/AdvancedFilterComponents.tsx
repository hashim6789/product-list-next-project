"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronDown,
  ChevronUp,
  X,
  CalendarIcon,
  Save,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

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

interface AdvancedFilterSidebarProps {
  filters: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  priceRange: PriceRange;
  stockRange: StockRange;
  dateRange: DateRange;
  searchQuery: string;
  onFilterChange: (key: string, value: string, checked: boolean) => void;
  onPriceRangeChange: (range: PriceRange) => void;
  onStockRangeChange: (range: StockRange) => void;
  onDateRangeChange: (range: DateRange) => void;
  onSearchQueryChange: (query: string) => void;
  onClearAll: () => void;
  onSavePreset: (name: string, filters: AdvancedFilters) => void;
  onLoadPreset: (preset: FilterPreset) => void;
  presets: FilterPreset[];
  className?: string;
}

export function AdvancedFilterSidebar({
  filters,
  selectedFilters,
  priceRange,
  stockRange,
  dateRange,
  searchQuery,
  onFilterChange,
  onPriceRangeChange,
  onStockRangeChange,
  onDateRangeChange,
  onSearchQueryChange,
  onClearAll,
  onSavePreset,
  onLoadPreset,
  presets,
  className,
}: AdvancedFilterSidebarProps) {
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(
    new Set()
  );
  const [localPriceRange, setLocalPriceRange] = useState([
    priceRange.min,
    priceRange.max,
  ]);
  const [localStockRange, setLocalStockRange] = useState([
    stockRange.min,
    stockRange.max,
  ]);
  const [presetName, setPresetName] = useState("");
  const [showPresetInput, setShowPresetInput] = useState(false);

  const toggleGroup = (key: string) => {
    const newCollapsed = new Set(collapsedGroups);
    if (newCollapsed.has(key)) {
      newCollapsed.delete(key);
    } else {
      newCollapsed.add(key);
    }
    setCollapsedGroups(newCollapsed);
  };

  const totalSelectedCount = Object.values(selectedFilters).reduce(
    (sum, values) => sum + values.length,
    0
  );
  const hasActiveFilters =
    totalSelectedCount > 0 ||
    localPriceRange[0] !== priceRange.min ||
    localPriceRange[1] !== priceRange.max ||
    localStockRange[0] !== stockRange.min ||
    localStockRange[1] !== stockRange.max ||
    dateRange.from ||
    dateRange.to ||
    searchQuery.length > 0;

  const handleSavePreset = () => {
    if (presetName.trim()) {
      const currentFilters: AdvancedFilters = {
        priceRange: { min: localPriceRange[0], max: localPriceRange[1] },
        stockRange: { min: localStockRange[0], max: localStockRange[1] },
        dateRange,
        selectedFilters,
        searchQuery,
      };
      onSavePreset(presetName.trim(), currentFilters);
      setPresetName("");
      setShowPresetInput(false);
    }
  };

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Advanced Filters</CardTitle>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearAll}
                className="text-blue-600 hover:text-blue-700"
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            )}
          </div>
        </div>

        {/* Filter Presets */}
        {presets.length > 0 && (
          <div className="space-y-2">
            <Label className="text-sm font-medium">Quick Filters</Label>
            <div className="flex flex-wrap gap-1">
              {presets.map((preset) => (
                <Button
                  key={preset.id}
                  variant="outline"
                  size="sm"
                  onClick={() => onLoadPreset(preset)}
                  className="text-xs h-7"
                >
                  {preset.name}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Save Current Filter */}
        {hasActiveFilters && (
          <div className="space-y-2">
            {!showPresetInput ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPresetInput(true)}
                className="w-full text-xs"
              >
                <Save className="h-3 w-3 mr-1" />
                Save Current Filter
              </Button>
            ) : (
              <div className="flex gap-1">
                <Input
                  placeholder="Filter name..."
                  value={presetName}
                  onChange={(e) => setPresetName(e.target.value)}
                  className="text-xs h-7"
                  onKeyDown={(e) => e.key === "Enter" && handleSavePreset()}
                />
                <Button
                  size="sm"
                  onClick={handleSavePreset}
                  className="h-7 px-2"
                >
                  <Save className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPresetInput(false)}
                  className="h-7 px-2"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Active Filter Chips */}
        {totalSelectedCount > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {Object.entries(selectedFilters).map(([key, values]) =>
              values.map((value) => (
                <Badge
                  key={`${key}-${value}`}
                  variant="secondary"
                  className="text-xs"
                >
                  {value}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-3 w-3 ml-1 hover:bg-transparent"
                    onClick={() => onFilterChange(key, value, false)}
                  >
                    <X className="h-2 w-2" />
                  </Button>
                </Badge>
              ))
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Advanced Search */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Search</Label>
          <div className="space-y-2">
            <Input
              placeholder="Search products, suppliers, categories..."
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              className="text-sm"
            />
            <div className="text-xs text-muted-foreground">
              Use quotes for exact matches, + for required terms
            </div>
          </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Price Range</Label>
          <div className="space-y-4">
            <Slider
              value={localPriceRange}
              onValueChange={setLocalPriceRange}
              onValueCommit={(value) =>
                onPriceRangeChange({ min: value[0], max: value[1] })
              }
              max={1000}
              min={0}
              step={5}
              className="w-full"
            />
            <div className="flex items-center gap-2 text-sm">
              <Input
                type="number"
                value={localPriceRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  const newRange = [value, localPriceRange[1]];
                  setLocalPriceRange(newRange);
                  onPriceRangeChange({ min: value, max: localPriceRange[1] });
                }}
                className="w-20 h-8 text-xs"
                min={0}
              />
              <span className="text-muted-foreground">to</span>
              <Input
                type="number"
                value={localPriceRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  const newRange = [localPriceRange[0], value];
                  setLocalPriceRange(newRange);
                  onPriceRangeChange({ min: localPriceRange[0], max: value });
                }}
                className="w-20 h-8 text-xs"
                min={0}
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Stock Range */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Stock Quantity</Label>
          <div className="space-y-4">
            <Slider
              value={localStockRange}
              onValueChange={setLocalStockRange}
              onValueCommit={(value) =>
                onStockRangeChange({ min: value[0], max: value[1] })
              }
              max={500}
              min={0}
              step={10}
              className="w-full"
            />
            <div className="flex items-center gap-2 text-sm">
              <Input
                type="number"
                value={localStockRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  const newRange = [value, localStockRange[1]];
                  setLocalStockRange(newRange);
                  onStockRangeChange({ min: value, max: localStockRange[1] });
                }}
                className="w-20 h-8 text-xs"
                min={0}
              />
              <span className="text-muted-foreground">to</span>
              <Input
                type="number"
                value={localStockRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  const newRange = [localStockRange[0], value];
                  setLocalStockRange(newRange);
                  onStockRangeChange({ min: localStockRange[0], max: value });
                }}
                className="w-20 h-8 text-xs"
                min={0}
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Date Range */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Date Added</Label>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal h-8 text-xs bg-transparent"
                >
                  <CalendarIcon className="mr-2 h-3 w-3" />
                  {dateRange.from
                    ? format(dateRange.from, "MMM dd, yyyy")
                    : "From date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateRange.from}
                  onSelect={(date) =>
                    onDateRangeChange({ ...dateRange, from: date })
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal h-8 text-xs bg-transparent"
                >
                  <CalendarIcon className="mr-2 h-3 w-3" />
                  {dateRange.to
                    ? format(dateRange.to, "MMM dd, yyyy")
                    : "To date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateRange.to}
                  onSelect={(date) =>
                    onDateRangeChange({ ...dateRange, to: date })
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {(dateRange.from || dateRange.to) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDateRangeChange({})}
              className="w-full text-xs h-6"
            >
              Clear dates
            </Button>
          )}
        </div>

        <Separator />

        {/* Category Filters */}
        {filters.map((group, index) => {
          const isCollapsed = collapsedGroups.has(group.key);
          const groupSelectedCount = selectedFilters[group.key]?.length || 0;

          return (
            <div key={group.key}>
              {index > 0 && <Separator className="mb-6" />}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm flex items-center gap-2">
                    {group.title}
                    {groupSelectedCount > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {groupSelectedCount}
                      </Badge>
                    )}
                  </h3>
                  {group.isCollapsible && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => toggleGroup(group.key)}
                    >
                      {isCollapsed ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronUp className="h-4 w-4" />
                      )}
                    </Button>
                  )}
                </div>

                {(!group.isCollapsible || !isCollapsed) && (
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {group.options.map((option) => {
                      const isSelected =
                        selectedFilters[group.key]?.includes(option.value) ||
                        false;

                      return (
                        <div
                          key={option.value}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`${group.key}-${option.value}`}
                            checked={isSelected}
                            onCheckedChange={(checked) =>
                              onFilterChange(
                                group.key,
                                option.value,
                                checked as boolean
                              )
                            }
                          />
                          <Label
                            htmlFor={`${group.key}-${option.value}`}
                            className="text-sm flex-1 cursor-pointer flex items-center justify-between"
                          >
                            <span
                              className={cn(
                                "truncate",
                                isSelected && "font-medium text-blue-600"
                              )}
                            >
                              {option.label}
                            </span>
                            <span className="text-muted-foreground text-xs ml-2">
                              ({option.count})
                            </span>
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export function AdvancedFilterSidebarSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-16" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <div className="flex gap-1">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-8 w-full" />
        </div>

        {/* Price range skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>

        {/* Category filters skeleton */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-5 w-24" />
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
