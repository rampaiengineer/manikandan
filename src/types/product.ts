export type MetalType = "steel" | "brass" | "copper";

export type ProductSize = "xs" | "s" | "m" | "l" | "xl";

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  description: string;
  metal: MetalType;
  category: string;
  subcategory?: string;
  isHeritage?: boolean;
  materialGrade?: string;
  finish?: "glossy" | "matte" | "hammered" | "satin";
  capacityLitres?: number;
  capacityMl?: number;
  sizeLabel?: ProductSize | string;
  thicknessGauge?: number;
  weightGrams?: number;
  mrp: number;
  price: number;
  currency: "INR";
  inStock: boolean;
  tags?: string[];
  imageUrl?: string;
  sourceUrl?: string;
}


