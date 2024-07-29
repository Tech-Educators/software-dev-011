"use client";
import { CookieContext } from "@/context/CookieContext";
import { useContext } from "react";

export default function Button() {
  const { cookies, incrementCookies } = useContext(CookieContext);
  return (
    <button onClick={incrementCookies}>Gib moar cookees: {cookies}</button>
  );
}
