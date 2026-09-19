"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
    const { items } = useCart();
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="font-bold text-lg">
            Il mio E-commerce</Link>
        <Link href="/carrello">
        Carrello ({totalItems})
        </Link>
        </header>

    );
}