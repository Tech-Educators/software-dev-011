"use client";
import { useState } from "react";

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  function increment10Count() {
    setCount(count + 10);
  }

  function decrement10Count() {
    setCount(count - 10);
  }

  return (
    <div>
      <h2>useState Page</h2>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Up</button>
      <button onClick={decrementCount}>Down</button>
      <button onClick={increment10Count}>Up +10</button>
      <button onClick={decrement10Count}>Down -10</button>
    </div>
  );
}
