import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
//update paths to new pages folder
import BiscuitDiv from "./pages/BiscuitsDiv";
import Testimonial from "./pages/Testimonial";
import Recipe from "./pages/Recipe";
import { biscuits } from "./lib/biscuitsData";

//we need to import Routes and Route from react-router-dom
import { Routes, Route } from "react-router-dom";

export default function App() {
  //I am going to have 3 routes: BiscuitsDiv, Testimonial, Recipe
  //I wrap with Routes all the components  I want to render as pages
  //Each Route has two attributes: path and element
  //In path, we write the params; and in element, we add the component we want to render in that path
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/biscuits"
          element={biscuits.map((item) => {
            return (
              <BiscuitDiv
                key={item.id}
                biscuit_name={item.biscuit_name}
                src={item.src}
                description={item.description}
              />
            );
          })}
        />

        <Route path="/recipes" element={<Recipe />} />
        <Route
          path="/testimonials"
          element={
            <Testimonial
              username="LittleBugger"
              review="I love biccies"
              rating="🌟🌟🌟"
              favCookie="chocolate cookies"
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
