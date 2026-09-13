

import { products } from "../../../data/products";

export default async function ProdottoDettaglio({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Prodotto non trovato</p>;
  }

  return (
    <main className="mt-4 ml-4">
      <div className="border border-[var(--primary)] rounded-lg p-4 shadow-sm">
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p>{product.price} €</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
      </div>
    </main>
  );
}