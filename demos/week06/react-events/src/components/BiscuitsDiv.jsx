export default function BiscuitsDiv(props) {
  //write a function to handle the click
  function handleClick() {
    console.log("I have clicked!");
  }
  return (
    <div className="biscuit-box">
      <h2>{props.name}</h2>
      <img src={props.src} alt="biscuit" className="biscuit-img" />
      <p>{props.description}</p>
      {/* add the handleClick function to onClick event */}
      <button onClick={handleClick}>Read More</button>
    </div>
  );
}

//inline event
// export default function BiscuitsDiv(props) {

//   return (
//     <div className="biscuit-box">
//       <h2>{props.name}</h2>
//       <img src={props.src} alt="biscuit" className="biscuit-img" />
//       <p>{props.description}</p>
//       <button
//         onClick={
//           () => {
//             console.log("I have clicked internally in the onClick");
//           };
//         }
//       >
//         Read More
//       </button>
//     </div>
//   );
// }

// button.addEventListener(handleClick);
