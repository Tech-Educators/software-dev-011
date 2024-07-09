//you could have the fetch function here and export it to be imported in any page you need it

export function fetchData() {
  const result = fetch();
  const data = result.json();
  return data;
}
