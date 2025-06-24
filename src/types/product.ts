import type { StaticImageData } from "next/image";

export interface ProductType {
  id?: string;
  _id?: string;
  slug: string;
  shoeName: string;
  coverImage: string | StaticImageData;
  previousPrice?: number;
  currentPrice: number;
  shoeCategory?: string;
  justIn?: boolean;
}