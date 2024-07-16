//import the dbConnect that I have in dbConnection.js
import { dbConnect } from "@/utils/dbConnection";

//we need an async server component
export default async function RollersPage() {
  //I am going call the dbConnect function here, so it works
  const db = dbConnect();
  //Write a sql query to get data from database
  const rollers = (await db.query(`SELECT * FROM coasterrollers`)).rows;
  //.rows is wrangling the data to just the rows property in the Result object
  console.log(rollers);
  return (
    <>
      <h1>List of rollers</h1>
      {/* I am going to map through my db rows */}
      <div className="grid grid-cols-6 gap-4 mx-6">
        {rollers.map((roller) => (
          <div
            className="bg-yellow-400 text-gray-900 font-bold rounded-lg p-4 cursor-pointer transition-colors hover:opacity-20"
            key={roller.id}
          >
            <h1>{roller.name}</h1>
            <p>Country: {roller.country}</p>
            <p>Height: {roller.height}</p>
          </div>
        ))}
      </div>
    </>
  );
}
