//import dbConnect from dbConnection
import { dbConnect } from "@/utils/dbConnection";

export default async function RollerIdPage({ params }) {
  //call the dbConnect function, so the connection to the db is working
  const db = dbConnect();
  const oneRoller = (
    await db.query(`SELECT * FROM coasterrollers WHERE id = ${params.rollerId}`)
  ).rows;
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
