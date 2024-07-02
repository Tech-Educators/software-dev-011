//import testimonials from library to use as test data
import { testimonials } from "../lib/testimonialsData";

//import useSearchParams hook to declare query strings
import { useSearchParams } from "react-router-dom";
export default function UserTestimonials() {
  //we are destructuring a variable from an array to store the value of my searchParams
  const [searchParams] = useSearchParams();
  //here we are declaring the word that we want to use in the url query string, in this case, sort
  const sort = searchParams.get("sort");

  //logic to organise array itemsin ascending or descending order
  if (sort === "asc") {
    testimonials.sort();
  } else if (sort === "desc") {
    testimonials.sort().reverse();
  }

  //TODO you could add Links so the user can sort the testimonials without typing in the url
  //TODO you need Link, useParams

  return (
    <>
      <h1>User Testimonials</h1>
      <p>sort: {sort}</p>
      {testimonials.map((testimonial, index) => {
        return <p key={index}>{testimonial}</p>;
      })}
    </>
  );
}

//map without the return keyword (implicit)
// {testimonials.map((testimonial) => (
//   <p key={testimonial}>{testimonial}</p>
// ))}
