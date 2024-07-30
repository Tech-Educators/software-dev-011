"use client";
import { createContext, useState } from "react";

// create our context
export const CookieContext = createContext();

// create our provider
export function CookieProvider({ children }) {
  const [cookies, setCookies] = useState(0);

  function incrementCookies() {
    setCookies(cookies + 1);
  }

  function decrementCookies() {
    setCookies(cookies - 1);
  }

  return (
    <CookieContext.Provider
      value={{ cookies, incrementCookies, decrementCookies }}
    >
      {children}
    </CookieContext.Provider>
  );
}
