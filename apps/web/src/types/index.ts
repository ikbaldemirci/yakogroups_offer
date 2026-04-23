import { menusCategory } from "../data/menus";
import { animationsinflatablesCategory } from "../data/animations-inflatables";
import { teamactivitiesCategory } from "../data/team-activities";
import { kidsActivitiesCategory } from "../data/kids-activities";
import { parkdecorCategory } from "../data/park-decor";
import { piknikihtiyaclarCategory } from "../data/picnic-essentials";

export type PersonCountTier = "0-25" | "25-50" | "50-75" | "75-100" | "100+";

export interface ProductDetail {
  title: string;
  text: string;
}

export interface BaseProduct {
  id: string;
  category?: string;
  subcategory?: string;
  title: string;
  description?: string; 
  summary?: string;     
  details?: ProductDetail[]; 
  currency?: string;
  vatIncluded?: boolean;
  photoUrl: string;
  video_link?: string;
  detail_link?: string;
  isPopular?: boolean;
  warning?: string;
}

export interface FixedPriceProduct extends BaseProduct {
  type: "fixed";
  price: number;
}

export interface TieredPriceProduct extends BaseProduct {
  type: "tiered";
  priceTiers: Record<PersonCountTier, number>;
}

export type Product = FixedPriceProduct | TieredPriceProduct;

export interface SubCategory {
  title: string;
  description?: string;
  items: Product[];
}

export interface Category {
  id: string;
  title: string;
  description?: string;
  items?: Product[];
  subcategories?: SubCategory[];
}
export const categories: Category[] = [
  menusCategory,
  animationsinflatablesCategory,
  teamactivitiesCategory,
  kidsActivitiesCategory,
  parkdecorCategory,
  piknikihtiyaclarCategory,
];

export interface SelectedItem {
  product: Product;
  price: number;
}

export interface OfferTotals {
    subtotal: number;
    menuTotal: number;
    menuServiceFee: number;
    serviceFee: number;
    vatAmount: number;
    grandTotal: number;
}