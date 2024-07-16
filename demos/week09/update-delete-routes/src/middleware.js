//copy the template from the docs

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//I want to tell clerk what routes are protected using the matcher
//to define public and protected routes
const isProtectedRoute = createRouteMatcher(["/rollers(.*)", "/newRoller(.*)"]);

//we tell middleware to protect routes that we hvae specified as protected
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

//the matcher is finding a correlation between your routes and the routes you specified in clerkMiddleware()
//the matcher is written using regex
//regular expressions are used to find matchces in patterns
export const config = {
  //find matches where the route starts with / and don't filter anything that comes after. Find all matches.
  //!Don't change this line
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
