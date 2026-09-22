import Link from "next/link";

export default function Home() {
  return (
    <main className="fllex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-3x1 font-bold mb-4">Benvenuto/a nel mio E-commerce</h1>
      <p className="text-gray-600 mb-6">
        Prodotti pensati per i tuoi amici a quattro zampe (e per i più piccoli di casa).
      </p>
      <Link href="/prodotti" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
      Vai al catalogo
      </Link>
    </main>
  );
}