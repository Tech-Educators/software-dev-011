"use client";
import { CookieContext } from "@/context/CookieContext";
import { useContext } from "react";

export default function Header() {
  const { cookies } = useContext(CookieContext);
  return (
    <header>
      <h1>Cookies are fun</h1>
      <p>I have {cookies} cookies</p>
    </header>
  );
}
