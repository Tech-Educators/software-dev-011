"use client";

import { CookieContext } from "@/context/CookieContext";
import { useContext } from "react";

export default function StealCookies() {
  const { decrementCookies } = useContext(CookieContext);
  return <button onClick={decrementCookies}>Steal a cookie</button>;
}
