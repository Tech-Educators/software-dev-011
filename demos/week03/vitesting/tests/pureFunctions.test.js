//I am going to write tests for my pure functions
//destructuring --> importing one or more elements from one location
//With destructuring, we import the specific elements that we want to use
//we have the elements listed in a convenient way
import { expect, describe, test } from "vitest";

//import my add function
import { add } from "./pureFunctions.js";
//I am going to test the add function

test("add", function () {
  const myArguments = add(2, 3);
  const expected = 5;

  expect(myArguments).toBe(expected); //I am comparing the values I gave it as arguments and what I expect to be the result
  //I expect 2 and 3 to be 5
});
