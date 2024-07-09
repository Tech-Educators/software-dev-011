export default async function RollerIdPage({ params }) {
  const result = await fetch(`https://dummyjson.com/carts/${params.rollerId}`);
  const data = await result.json();
  const wrangledData = data.products;

  return (
    <>
      <h1>This is an individual cart: {params.rollerId}</h1>
      {wrangledData.map((product) => (
        <>
          <h2 key={product.id}>{product.title}</h2>
          <p>{product.price}</p>
        </>
      ))}
    </>
  );
}
