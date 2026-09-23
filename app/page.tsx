"use client";
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./components/ProductCard";

export default function Prodottipagina() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("tutte");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "tutte" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="mt-4 ml-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Cerca prodotto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded p-2 mb-4 col-span-full"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded p-2 mb-4 col-span-full"
      >
        <option value="tutte">Tutte le categorie</option>
        <option value="abbigliamento cani">Abbigliamento cani</option>
        <option value="abbigliamento bambino">Abbigliamento bambino</option>
        <option value="abbigliamento bambina">Abbigliamento bambina</option>
        <option value="abbigliamento gatti">Abbigliamento gatti</option>
        <option value="giochi cani">Giochi cani</option>
        <option value="giochi gatti">Giochi gatti</option>
      </select>

      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}