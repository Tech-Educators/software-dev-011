import Link from "next/link";
export default function EggsCreamPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the eggs-cream page</h1>
      <Link href="/eggs-cream/1">Dynamic Route</Link>
    </main>
  );
}
