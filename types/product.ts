export type ProductCategory = "abbigliamento uomo" | "abbigliamento donna" | "abbigliamento bambino" | "abbigliamento bambina" | "abbigliamento cani" | "abbigliamento gatti" | "giochi cani" | "giochi gatti";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: ProductCategory;
  description: string;
}