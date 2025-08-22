"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

interface StaticFilterSidebarProps {
  selectedFilters: Record<string, string[]>;
  onFilterChange: (key: string, value: string, checked: boolean) => void;
  onClearAll: () => void;
  className?: string;
}

// Static filter data matching the screenshot exactly
const staticFilterGroups: FilterGroup[] = [
  {
    title: "Business Type",
    key: "businessType",
    options: [
      { value: "all", label: "All", count: 18 },
      { value: "supplier", label: "Supplier", count: 12 },
      { value: "service-provider", label: "Service Provider", count: 23 },
      { value: "manufacture", label: "Manufacture", count: 67 },
      { value: "distribution", label: "Distribution", count: 34 },
      { value: "contract-services", label: "Contract Services", count: 13 },
    ],
    isCollapsible: true,
  },
  {
    title: "Category",
    key: "category",
    options: [
      {
        value: "general-civil-contracting",
        label: "General Civil Contracting",
        count: 18,
      },
      {
        value: "utilities-services",
        label: "Utilities and Services",
        count: 6,
      },
      {
        value: "earthworks-site-preparation",
        label: "Earthworks and Site Preparation",
        count: 23,
      },
      { value: "concrete-works", label: "Concrete Works", count: 67 },
      {
        value: "steel-structural-works",
        label: "Steel and Structural Works",
        count: 34,
      },
      {
        value: "masonry-finishing-works",
        label: "Masonry and Finishing Works",
        count: 12,
      },
    ],
    isCollapsible: true,
  },
  {
    title: "Sub Category",
    key: "subCategory",
    options: [
      { value: "water-supply", label: "Water Supply", count: 18 },
      { value: "electrical", label: "Electrical", count: 6 },
      { value: "sewerage-systems", label: "Sewerage Systems", count: 23 },
      { value: "drainage-management", label: "Drainage Management", count: 67 },
      {
        value: "stormwater-management",
        label: "Stormwater Management",
        count: 34,
      },
      {
        value: "gas-pipeline-installation",
        label: "Gas Pipeline Installation",
        count: 12,
      },
    ],
    isCollapsible: true,
  },
];

export function StaticFilterSidebar({
  selectedFilters,
  onFilterChange,
  onClearAll,
  className,
}: StaticFilterSidebarProps) {
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(
    new Set()
  );

  const toggleGroup = (key: string) => {
    const newCollapsed = new Set(collapsedGroups);
    if (newCollapsed.has(key)) {
      newCollapsed.delete(key);
    } else {
      newCollapsed.add(key);
    }
    setCollapsedGroups(newCollapsed);
  };

  return (
    <div className={cn("w-full bg-white", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearAll}
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-sm font-normal"
        >
          Clear All
        </Button>
      </div>

      {/* Filter Groups */}
      <div className="space-y-6">
        {staticFilterGroups.map((group) => {
          const isCollapsed = collapsedGroups.has(group.key);

          return (
            <div key={group.key} className="space-y-3">
              {/* Group Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  {group.title}
                </h3>
                {group.isCollapsible && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 hover:bg-gray-100"
                    onClick={() => toggleGroup(group.key)}
                  >
                    {isCollapsed ? (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronUp className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                )}
              </div>

              {/* Group Options */}
              {(!group.isCollapsible || !isCollapsed) && (
                <div className="space-y-2">
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
                          className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                        <Label
                          htmlFor={`${group.key}-${option.value}`}
                          className="text-sm text-gray-700 cursor-pointer flex-1 flex items-center justify-between font-normal"
                        >
                          <span
                            className={cn(
                              "truncate",
                              isSelected && "text-blue-600 font-medium"
                            )}
                          >
                            {option.label}
                          </span>
                          <span className="text-gray-500 text-sm ml-2">
                            ({option.count})
                          </span>
                        </Label>
                      </div>
                    );
                  })}

                  {/* Show more link */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-sm font-normal p-0 h-auto"
                  >
                    Show more
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
