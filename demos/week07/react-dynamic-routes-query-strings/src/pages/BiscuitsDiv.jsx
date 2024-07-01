//import useState from React by destructuring
import { useState } from "react";

export default function BiscuitsDiv(props) {
  //useState has three elements: state variable, function to track state (mutation function or set function), initial value of state
  //in this case, votes is the state variable, setVotes is the mutation function, and the initial value is 1

  const [votes, setVotes] = useState(1);

  //in this case, showInfo is the state variable, setShowInfo is the mutation function, and the initial value is _______

  const [showInfo, setShowInfo] = useState(false);

  function handleClick() {
    setVotes(votes + 1);
    console.log(votes);
  }
  //we give the key props to an HTML elements that is NOT rendered on the page
  return (
    <div className="biscuit-box" key={props.id}>
      <img
        src={props.src}
        alt="biscuit"
        className="biscuit-img"
        onClick={() => {
          //we are setting our state to change values from true to false, and from false to true
          setShowInfo(!showInfo);
        }}
      />

      <button onClick={handleClick}>Click to vote!</button>
      <p>Your votes: {votes}</p>

      {/* we are going to use a ternary operator because I am in the function return */}
      {
        //ternary operator --> condition ? first action (if condition is truthy) : second action (if condition is falsy)
        showInfo ? (
          <>
            <h2>{props.biscuit_name}</h2>
            <p>{props.description}</p>
          </>
        ) : null
      }
    </div>
  );
}
