import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BiscuitDiv from "./components/BiscuitsDiv";
//destructure and import our biscuits array into this component
import { biscuits } from "./lib/biscuitsData";

export default function App() {
  //JS as usual in here before the return

  return (
    //we are going to refactor this code in three steps:
    //I want to separate my data and my components
    //How can I store my data? In the library folder as an array of objects
    //How can I instantiate multiple components? Loop through a list of items using a method (forEach or map?)
    //I need to give a unique key prop to my component, so React can distinguish each instance
    <>
      <Header />
      {biscuits.map((item) => (
        <BiscuitDiv
          key={item.id}
          biscuit_name={item.biscuit_name}
          src={item.src}
          description={item.description}
        />
      ))}
      <Footer />
    </>
  );
}

//You need the word return if you are using curly braces
// {biscuits.map((item) => {
//   return <BiscuitDiv
//     biscuit_name={item.biscuit_name}
//     src={item.src}
//     description={item.description}
//   />
// })}

// You can use the index of the array as the key
// {biscuits.map((item, index) => (
//   <BiscuitDiv
//     key={index}
//     biscuit_name={item.biscuit_name}
//     src={item.src}
//     description={item.description}
//   />
// ))}
