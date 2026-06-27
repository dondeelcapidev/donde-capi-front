import { SITE_CONFIG } from "@/lib/data/catalog";
import type { SiteConfig } from "@/types/database";

export function getSiteConfig(): SiteConfig {
  return SITE_CONFIG;
}
