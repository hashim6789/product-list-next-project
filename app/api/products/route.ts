import { type NextRequest, NextResponse } from "next/server";
import { productFiltersSchema, productSchema } from "@/lib/validations";
import { allMockProducts } from "@/lib/mock-data";
import type { Product, PaginatedResponse } from "@/lib/types";

export async function GET(request: NextRequest) {
  try {
    console.log("its get request");
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams.entries());

    // Validate query parameters
    const filters = productFiltersSchema.parse(params);

    let filteredProducts = [...allMockProducts];

    // Apply filters
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.supplier.toLowerCase().includes(searchTerm)
      );
    }

    if (filters.category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.subCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.subCategory === filters.subCategory
      );
    }

    if (filters.businessType) {
      filteredProducts = filteredProducts.filter(
        (product) => product.businessType === filters.businessType
      );
    }

    if (filters.status) {
      filteredProducts = filteredProducts.filter(
        (product) => product.status === filters.status
      );
    }

    if (filters.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= filters.minPrice!
      );
    }

    if (filters.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= filters.maxPrice!
      );
    }

    // Apply sorting
    filteredProducts.sort((a, b) => {
      const aValue = a[filters.sortBy];
      const bValue = b[filters.sortBy];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return filters.sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return filters.sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

    // Apply pagination
    const total = filteredProducts.length;
    const totalPages = Math.ceil(total / filters.limit);
    const startIndex = (filters.page - 1) * filters.limit;
    const endIndex = startIndex + filters.limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    const response: PaginatedResponse<Product> = {
      data: paginatedProducts,
      pagination: {
        page: filters.page,
        limit: filters.limit,
        total,
        totalPages,
        hasNext: filters.page < totalPages,
        hasPrev: filters.page > 1,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("[v0] Products API error:", error);

    if (error instanceof Error && "issues" in error) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = productSchema.parse(body);

    // Generate new product with ID
    const newProduct: Product = {
      ...validatedData,
      id: (allMockProducts.length + 1).toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // In a real app, this would save to database
    allMockProducts.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("[v0] Product creation error:", error);

    if (error instanceof Error && "issues" in error) {
      return NextResponse.json(
        { error: "Invalid product data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
