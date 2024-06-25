import "./Section.css";
//the child component is receiving props. The value of the props is the arguments here.
//we use props as parameters, placeholders to dispaly the props values (arguments)
//the arguments for those parameters are given by the parent component – in this case, App
export default function Section(props) {
  return (
    <>
      <h2>{props.h2}</h2>
      <h1 className="main-section-title">{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.url} alt={props.alt} />
      <button>Read More</button>
    </>
  );
}

//function greet(name){
// console.log("Hello " + name)
// }

// greet("Manny")
// greet("Joe")
