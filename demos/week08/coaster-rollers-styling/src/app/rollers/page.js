import { fetchData } from "@/utils/fetchData";
//if you fetch your data in a separate file, you still need async await in the page where you are using it
export default async function RollersPage() {
  const rollers = await fetchData();
  console.log(rollers);
  return (
    <>
      <h1>List of rollers</h1>
      {rollers.map((roller) =>
        roller.products.map((product) => (
          <h2 key={product.id}>{product.title}</h2>
        ))
      )}
    </>
  );
}
