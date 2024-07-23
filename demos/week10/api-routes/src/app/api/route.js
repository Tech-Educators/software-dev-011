//Hi! I am an API route! I work as a server, no pages involved

//This is the root route

//Express endpoint
// app.get("/", (req, res) => {
//   res.json({ message: "This is the root route. How roude!" });
// });

//Next.js endpoint
//we need the method
export function GET() {
  return new Response("This is the root route. How roude!");
}
