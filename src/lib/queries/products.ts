import {
  CATEGORIES,
  getFeaturedProducts as getFeatured,
  PRODUCTS,
} from "@/lib/data/catalog";
import type { Category, Product } from "@/types/database";

export function getCategories(): Category[] {
  return CATEGORIES;
}

export function getProducts(): Product[] {
  return PRODUCTS;
}

export function getFeaturedProducts(): Product[] {
  return getFeatured();
}
