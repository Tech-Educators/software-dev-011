//this is a dynamic route
//to access the value of the url params, we can destructure the params object
//this object will have a property, the name of the dynamic route (folder name), and the value will be whatever the suer writes in the url params
export default function IdPage({ params }) {
  console.log(params);
  return (
    <>
      <h1>This is the id nested route</h1>
      <p>These are the params: {params.id}</p>
    </>
  );
}
