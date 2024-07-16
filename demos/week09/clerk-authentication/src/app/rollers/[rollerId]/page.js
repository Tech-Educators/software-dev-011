//import dbConnect from dbConnection
import { dbConnect } from "@/utils/dbConnection";

//import notFound function
import { notFound } from "next/navigation";

export default async function RollerIdPage({ params }) {
  //call the dbConnect function, so the connection to the db is working
  const db = dbConnect();
  const oneRoller = (
    await db.query(`SELECT * FROM coasterrollers WHERE id = ${params.rollerId}`)
  ).rows;

  //we want our app to display the not-found page only when there is not a param matching the database id

  //when we query the database, we get an array with one item, so the length property is 1
  //if the length is 0, it means that the array is empty
  if (oneRoller.length === 0) {
    notFound();
  }

  return (
    <>
      <h1>This is an individual roller: {params.rollerId}</h1>
      {/* I map through the database row */}
      {oneRoller.map((roller) => (
        <>
          <h2 key={roller.id}>{roller.name}</h2>
          <p>{roller.country}</p>
          <p>{roller.height}</p>
        </>
      ))}
    </>
  );
}
