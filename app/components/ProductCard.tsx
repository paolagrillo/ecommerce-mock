import { Product } from "../../types/product";
interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <main className="mt-4 ml-4">


<div className="border border-[var(--primary)] rounded-lg p-4 shadow-sm">
<img src={product.image} alt={product.name}/>
<p>{product.name}</p>
<p>{product.price} €</p>
<p>{product.category}</p>
<p>{product.description}</p>


</div>







        </main>
    );
}