//we are going to get the data from the library here
//Note: if your data is in the database, you need to import your connection string from utils and use SQL
import { posts } from "@/lib/postsData";

//we want to read the posts data
// export function GET() {
//   return new Response(JSON.stringify(posts));
// }

//get endpoint with try and catch
export function GET() {
  try {
    return new Response(JSON.stringify(posts));
  } catch (err) {
    err.status(500);
  }
}

//we want to create POST route
//we needed the body in the request to send to the database
//this is async because it's connected to the database
export async function POST(req) {
  //we parse the request body into json
  //the req parameter will contain the body data as an argument
  const data = await req.json();
  //return the response
  return new Response(JSON.stringify(data));
}
