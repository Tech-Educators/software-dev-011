//import the connection to our db --> you need a users table in your db (id,clerk_id, username,bio,location...)

//TODO set up your .env.local file with your Supabase and Clerk env vars
//TODO you will need a utils file with your connection string set-up

//import clerk stuff
import { auth } from "@clerk/nextjs/server";
//import next stuff
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function UserIdPage() {
  //we need to destructure the userId from clerk auth
  //!the userId is a alphanumerical string that clerk creates AFTER the user signs up for clerk in the sign-up page (<SignUp/>)
  const { userId } = auth(); //this userId is the clerk id --> same value
  console.log(userId);
  //we need a form for the user to add their data
  //we need a handle submit
  async function handleSubmit(formData) {
    //we need to specify that we are in the server
    //we need to activate the dbConnection
    //we need to get the form data input
    const name = formData.get("name");

    //we need to insert the data in the database (sql is incomplete)
    await db.query(`INSERT INTO ... (clerk_id) VALUES $1, $2, $3 `, [userId]);
    //we need to revalidatePath
    //you can also redirect, if you want
  }
  return (
    <>
      <h1>User Profile</h1>
      {/* You need a form here! */}
      <h2>Your data!</h2>
      {/* You can show the current user's data in here --> look below for clues ⬇️ */}
    </>
  );
}

//==========================Show currentUser's data=======================//
//you need to combine this with the code above
// import { auth, currentUser } from "@clerk/nextjs/server";

// export default async function UserIdPage(){
//     const {userId} = auth()
// check if we have current user data
// if (userId){
//     add a sql query getting the user's data
// }

// we are going to access the currentUser data
// const userData = await currentUser()
// console.log(userData)

//     return(<>
//     {/* you can conditionally render an element here to redirect the user to complete their profiles, and then, show the user's data --> use ternary operators*/}
//     <h1>Current User</h1>
//     <p>Welcome! Your name is: {userData?.firstName} {userData?.lastName}</p>

// <p>Your email is this: </p>
//     </>)
// }
