//!You are supposed to organise and plan all these elements into different folders and components

import "./App.css";
// import { useState, useEffect } from "react";

export default function App() {
  //I need a list of shop upgrades for the user to buy.
  //Upgrades should change the biscuitsPerSecond value, and decrease the biscuits value
  //!STRETCH GOAL: fetch API upgrades
  // const upgrades = [{}, {}];

  //I need two global variables: one variable to store the cookie counter, and one variable to store the cookies per second

  // const [biscuits, setBiscuits] = useState(0);
  // const [biscuitsPerSecond, setBiscuitsPerSecond] = useState(1);

  //I need a timer to track the biscuits value, keeping an eye on the biscuitsPerSecond value.
  //The biscuits value will go up by the value of biscuitsPerSecond

  // useEffect(() => {
  //   const biscuitInterval = setInterval(() => {

  //I need to tell the interval what action I want it to perform every second

  //     setBiscuits((currentBiscuits) => {
  //       return currentBiscuits + biscuitsPerSecond;
  //     });
  //   }, 1000);

  //clear the timer

  //   return () => {
  //     clearInterval(biscuitInterval);
  //   };
  // }, [biscuitsPerSecond]);

  //we added the biscuitsPerSecond in the dependency array, so when its value changes, the useEffect triggers the effect again

  //we need a function, so the user can buy items from the shop

  // function buyItem() {

  //increase the value of BiscuitsPerSecond
  //decrease the value of biscuits

  // }

  return (
    <>
      <h1>Main app</h1>
      {/* I need to display the following elements on the page: -
      the value of biscuits - the value of BiscuitsPerSecond - an element that
      the user can click on to increase the value of biscuits - a list of shop
      items that the user can buy (extra: add visual feedback so the user knows
      if they can afford the upgrade) */}
    </>
  );
}
