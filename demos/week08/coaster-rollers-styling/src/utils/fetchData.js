export async function fetchData() {
  const result = await fetch("https://dummyjson.com/carts");
  const data = await result.json();
  const wrangledData = data.carts;
  return wrangledData;
}
