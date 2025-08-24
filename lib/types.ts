export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subCategory: string;
  businessType: string;
  price: number;
  stock: number;
  status: "active" | "inactive" | "out-of-stock";
  imageUrl: string;
  isNew?: boolean;
  safetyRating?: string;
  supplier: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  page?: number;
  limit?: number;
  sortBy?: SortType;
  sortOrder?: "asc" | "desc";
  category?: string;
  subCategory?: string;
  businessType?: string;
  status?: Product["status"];
  search?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export type SortType =
  | "createdAt-desc"
  | "createdAt-asc"
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc";
