//import useState from React by destructuring
import { useState } from "react";

// let react = {

//   useState: function(){

//   }
// }

export default function BiscuitsDiv(props) {
  //declare a global variable using useState()
  //useState has three elements: state variable, function to track state (mutation function or set function), initial value of state
  //in this case, votes is the state variable, setVotes is the mutation function, and the initial value is 0

  // console.log(useState()) if you want to see the useState under the hood

  const [votes, setVotes] = useState(1);

  //vanilla js
  // let votes = 0
  // function setVotes(){
  //I control votes
  //   votes = votes + 1
  // }
  // setVotes();

  //never change the value of state directly; use the mutation function

  function handleClick() {
    setVotes(votes + 1);
    console.log(votes);
  }
  //we give the key props to an HTML elements that is NOT rendered on the page
  return (
    <div className="biscuit-box" key={props.id}>
      <h2>{props.biscuit_name}</h2>
      <img src={props.src} alt="biscuit" className="biscuit-img" />
      <p>{props.description}</p>

      <button onClick={handleClick}>Click to vote!</button>
      <p>Your votes: {votes}</p>
    </div>
  );
}
