import Link from "next/link";
import { fetchData } from "@/utils/fetchData";
export const metadata = {
  title: "Eggs-creams – Eggs-creams page",
  description: "A list of our famous flavours",
};
//we will add data from an API
//first I need to have an async server component
export default async function EggsCreamPage({ searchParams }) {
  //I need to fetch my data from the API
  const result = await fetch("https://dummyjson.com/recipes");
  //I need to parse the data into json
  const data = await result.json();
  console.log(data);
  //I need to wrangle the data
  const wrangledData = data.recipes;

  //I will add query strings to filter the data
  // I need to destructure searchParams --> it's the same as query strings

  if (searchParams.sort === "desc") {
    wrangledData.reverse();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the eggs-cream page</h1>
      {/* Add links for user to sort data using query strings */}
      <Link href="/eggs-cream?sort=asc">Sort Asc</Link>
      <Link href="/eggs-cream?sort=desc">Sort Desc</Link>

      <ol>
        {/* we are mapping through an array of objects */}
        {wrangledData.map((recipe) => {
          return (
            <li key={recipe.id}>
              <Link href={`/eggs-cream/${recipe.id}`}>{recipe.name}</Link>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
