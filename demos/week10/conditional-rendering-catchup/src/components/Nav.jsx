import Link from "next/link";

import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import styles from "@/components/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.mainNav}>
      <Link href={"/"} className={styles.links}>
        Home
      </Link>
      <br />
      <Link href={"/about"} className={styles.links}>
        About
      </Link>
      <br />
      <Link href={"/collection"} className={styles.links}>
        Collection
      </Link>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignUpButton className={styles.signLinks}>Sign Up</SignUpButton>
        <SignInButton mode="modal" className={styles.signLinks}>
          Sign In
        </SignInButton>
      </SignedOut>
    </nav>
  );
}
