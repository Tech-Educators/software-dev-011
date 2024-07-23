export default async function PostsPage() {
  //we can fetch out own API!!!!
  const response = await fetch("http://localhost:3000/api/posts");
  //We had to stringify the data, so we are parsing it back to json
  const data = await response.json();

  return (
    <>
      <h1>Posts</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2 className="text-sky-700">{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}
