"use client";
//this is a client component because we need the onClick event
//Events go in client components
//Error pages need to go in the client

import Link from "next/link";
//We need to destructure two elements from our Error object
//We will add the reset function as an event in the button
export default function ErrorPage({ error, reset }) {
  return (
    <>
      <h1>OH, NO! Your cart is upside down. Whoops!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again!</button>
      {/* we can add a link so the user can go back to the homepage, for example */}
      <Link href={"/"}>Homepage</Link>
    </>
  );
}
