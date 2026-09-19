"use client";
import { useCart } from "../context/CartContext";

export default function CarrelloPage() {
    const { items, removeFromCart, updateQuantity } = useCart();
const totale = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

if (items.length === 0) {
    return <p className="p-4">Il carrello è vuoto.</p>;
}

return (
    <main className="p-4">
        <h1 className="text-x1 font-bold mb-4">Il tuo carrello</h1>

{items.map((item) => (
    <div key={item.id} className="flex items-center justify-between border-b py-2">
        <div>
            <p>{item.name}</p>
            <p>{item.price} € x {item.quantity}</p>
        </div>

        <div className="flex items-center gap-2">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
<button onClick={() => removeFromCart(item.id)} className="text-red-600 ml-4">Rimuovi</button>
        </div>
    </div>
))}

<p className="mt-4 font-bond">Totale: {totale.toFixed(2)} €</p>

    </main>
);

}