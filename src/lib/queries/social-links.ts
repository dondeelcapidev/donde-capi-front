import { SOCIAL_LINKS } from "@/lib/data/catalog";
import type { SocialLink } from "@/types/database";

export function getSocialLinks(): SocialLink[] {
  return SOCIAL_LINKS;
}

export function getHighlightSocialLinks(): SocialLink[] {
  return SOCIAL_LINKS.filter((link) => link.is_highlight);
}
