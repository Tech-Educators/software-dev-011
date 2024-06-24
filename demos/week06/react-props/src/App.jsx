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
    //you can use fragments as parent elements
    <>
      <h1>{`Hello ${username}`}</h1>
      <Header />
      <Section h2="Section 1" title="Title 1" description="lorem" />
      <Section h2="Section 2" title="Title 2" description="lorem" />
      <Section h2="Section 3" title="Title 3" description="lorem" />
      <Section h2="Section 4" title="Title 4" description="lorem" />
      <Section h2="Section 5" title="Title 5" description="lorem" />
    </>
  );
}
//we set up props in the parent component, similar to writing objects
// let section1 = {
// subtitle: "Section 1",
// title: "Title 2"
// }
