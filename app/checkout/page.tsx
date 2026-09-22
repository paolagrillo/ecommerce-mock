"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
    const { items, clearCart } = useCart();
    const [formData, setFormData] = useState({ nome: "", indirizzo: "", email: "" });
    const [ordinato, setOrdinato] = useState(false);

    const totale = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setOrdinato(true);
        clearCart();
    }

    if (ordinato) {
        return <p className="p-4">Ordine confermato! Grazie per il tuo acquisto.</p>;
    }

    return (
        <main className="p-4">
            <h1 className="text-x1 font-bold mb-4">Checkout</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
                <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} className="border rounded p-2" required />
                <input name="indirizzo" placeholder="Indirizzo" value={formData.indirizzo} onChange={handleChange} className="border rounded p-2" required />
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border rounded p-2" required />

<p className="mt-4 font-bold">Totale: {totale.toFixed(2)} €</p>

<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Conferma ordine</button>


            </form>
        </main>
    );
}