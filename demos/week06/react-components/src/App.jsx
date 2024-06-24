//at the top of the component we do imports
import Header from "./components/Header";
import Section from "./components/Section";
import "./App.css";
//you can export as many elements as you want
//you can only export default ONE element per file
export default function App() {
  //JS elements to build functionality
  let username = "Manny";

  return (
    //the elements we want to display on the page
    //you can fragments as parent elements
    <>
      <h1>{`Hello ${username}`}</h1>
      <Header />
      <Section />
    </>
  );
}
