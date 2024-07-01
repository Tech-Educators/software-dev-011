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
import UserProfile from "./pages/UserProfile";
import UserTestimonials from "./pages/UserTestimonials";

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
        {/* I am going to create a new route for the UserProfile component */}
        {/* The colon represents a dynamic route */}
        <Route path="/profile/:username" element={<UserProfile />}>
          {/* this is nested route inside our dynamic route. We don't need the slash in the nested route */}
          <Route path="testimonials" element={<UserTestimonials />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
