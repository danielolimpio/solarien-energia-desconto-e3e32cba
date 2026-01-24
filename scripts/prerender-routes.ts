// Script to generate all routes for prerendering
// This file exports all routes that need to be pre-rendered for SEO

import { brazilianStates } from "../src/data/states";
import { citiesByState } from "../src/data/cities";

export const BASE_URL = "https://mercadolivredeenergia.org";

// Static pages
export const staticRoutes = [
  "/",
  "/sitemap",
  "/politica-de-privacidade",
  "/termos-de-uso",
  "/politica-de-cookies",
];

// State pages
export const stateRoutes = brazilianStates.map((state) => `/${state.slug}`);

// City pages
export const cityRoutes: string[] = [];
for (const cities of Object.values(citiesByState)) {
  for (const city of cities) {
    cityRoutes.push(`/${city.slug}`);
  }
}

// All routes combined
export const allRoutes = [...staticRoutes, ...stateRoutes, ...cityRoutes];

// Export for use in vite config
export default allRoutes;
