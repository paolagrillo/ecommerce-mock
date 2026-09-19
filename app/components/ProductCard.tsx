"use client";
import Link from "next/link";
import { Product } from "../../types/product";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
const { addToCart } = useCart();

  return (
    <div className="border border-[var(--primary)] rounded-lg p-4 shadow-sm">

    <Link href={`/prodotti/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p>{product.price} €</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
    </Link>
    <button onClick={() => addToCart(product)} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Aggiungi al carrello</button>
    </div>

  );
} 