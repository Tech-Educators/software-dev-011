//set up for the database in here
//import the pg package
import pg from "pg";

export function dbConnect() {
  const connectionString = process.env.NEXT_PUBLIC_DATABASE_URL;
  const db = new pg.Pool({
    connectionString: connectionString,
  });
  //we return db, so it is available outside this function
  return db;
}
