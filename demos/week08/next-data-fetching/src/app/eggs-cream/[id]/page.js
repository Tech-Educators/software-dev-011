import Link from "next/link";
//We need to fetch data from a specific object using the id
export default async function IdPage({ params }) {
  const result = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  const data = await result.json();

  return (
    <>
      <Link href="/eggs-cream">Back to eggs-cream list</Link>

      <h1>This is the id nested route</h1>
      <p>These are the params: {params.id}</p>
      <h2>Eggs-cream flavour: {data.name}</h2>
      <p>Cuisine: {data.cuisine}</p>
    </>
  );
}
