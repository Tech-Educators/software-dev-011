import TestiesFormSpread from "../components/TestiesFormSpread";
import { useState } from "react";

//Step 1: state
//Step 2: event
//Step 3: conditional rendering

export default function Testimonial({ username, review, rating, favCookie }) {
  const [showReview, setShowReview] = useState(false);

  function handleClick() {
    setShowReview(!showReview);
  }

  return (
    <>
      <h1>Testimonials</h1>
      <TestiesFormSpread />
      <div>
        <h2 onClick={handleClick}>{username}</h2>
        {showReview ? (
          <>
            <p>{review}</p>
            <p>{rating}</p>
            <p>{favCookie}</p>
          </>
        ) : null}
      </div>
    </>
  );
}

//destructuring
// props = {
//     username: "LittleBugger",
//     review: "value",
// }

// {username, review} = props
