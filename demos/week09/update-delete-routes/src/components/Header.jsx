import Link from "next/link";
//import some clerk components, so the user can interact with authentication
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
//import auth to get the userId
import { auth } from "@clerk/nextjs/server";

import HeaderStyles from "@/components/Header.module.css";

export default function Header() {
  //destructure the userId from auth
  const { userId } = auth();

  return (
    <>
      <h1 className={HeaderStyles.h1}>This is the header. What a headache!</h1>
      <nav className={HeaderStyles.nav}>
        <Link href="/" className="italic">
          Home
        </Link>
        <br />
        <Link href="/rollers" className="text-pink-700 font-extrabold">
          Rollers
        </Link>
        <br />
        <Link href="/newRoller" className="text-pink-700 font-extrabold">
          Add a roller!
        </Link>

        {/* authentication navigation */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignUpButton className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Sign Up
          </SignUpButton>
          <SignInButton className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Sign in
          </SignInButton>
        </SignedOut>
      </nav>
    </>
  );
}
