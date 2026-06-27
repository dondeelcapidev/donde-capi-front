import type { Category } from "@/types/database";

export function getCategoryImage(
  category: Category
): string | import("next/image").StaticImageData {
  return category.image_url ?? "";
}
