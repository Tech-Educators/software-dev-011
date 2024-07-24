"use client";
import { useState } from "react";
import styles from "@/components/collection.module.css";
import Image from "next/image";
import data from "@/lib/data.json";

//I want to conditionally render the films' data when the user clicks on the poster
//STEP 1: state and useState() --> render elements, if state is true
//STEP 2: ternary operator(? :)
//STEP 3: event (onClick, onMouseOver...)

export default function FilmsCard() {
  //we are destructuring the useState hook, which is an array.
  //useState has 3 parts: state variable, mutation function, initial value
  const [isVisible, setIsVisible] = useState(false);

  //we need to write our condition

  const handleClick = () => {
    //we want the state variable to be the opposite of the current value
    setIsVisible(!isVisible);
    //you can also use a classic if statement or ternary operator
  };

  // function handleClickClassic() {
  //   setIsVisible(!isVisible);
  // }

  return (
    <>
      {data.map((film) => (
        <div key={film.id} className={styles.divCollection}>
          <Image
            src={film.poster}
            alt="Hayao Miyazaki"
            width={400}
            height={200}
            className="border-double border-4 border-lime-400 m-2"
            // onClick={handleClick} --> another way
            onClick={() => handleClick()}
          />

          {isVisible ? (
            <>
              <h2 className=" text-xl p-2">{`${film.title} (${film.release_date})`}</h2>
              <h3 className="p-2">{film.director}</h3>
              <p className=" ml-52 mr-52 p-2">{film.description}</p>
            </>
          ) : null}
        </div>
      ))}
    </>
  );
}
