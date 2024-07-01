//importing from public folder
import logo from "/images/Manny-os-logo.png";
//import Link from react-router-dom
import { Link } from "react-router-dom";

export default function Header() {
  //we add the Link component to represent every path
  //the to attribute contains the name of the params (path)
  return (
    <>
      <img src={logo} alt="logo" />
      <h1>Manny&apos;s Biscuits</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/biscuits">Biscuits</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/testimonials">Testimonials</Link>
      </nav>
    </>
  );
}
