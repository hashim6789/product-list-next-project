import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required").max(200, "Name too long"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description too long"),
  category: z.string().min(1, "Category is required"),
  subCategory: z.string().min(1, "Sub-category is required"),
  businessType: z.string().min(1, "Business type is required"),
  price: z.number().min(0, "Price must be positive"),
  stock: z.number().int().min(0, "Stock must be non-negative integer"),
  status: z.enum(["active", "inactive", "out-of-stock"]),
  imageUrl: z.string().url("Invalid image URL"),
  isNew: z.boolean().optional(),
  safetyRating: z.string().optional(),
  supplier: z.string().min(1, "Supplier is required"),
});

export const productFiltersSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(12),
  sortBy: z.enum(["name", "price", "createdAt", "stock"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  category: z.string().optional(),
  subCategory: z.string().optional(),
  businessType: z.string().optional(),
  status: z.enum(["active", "inactive", "out-of-stock"]).optional(),
  search: z.string().optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
});

export const productUpdateSchema = productSchema.partial();
