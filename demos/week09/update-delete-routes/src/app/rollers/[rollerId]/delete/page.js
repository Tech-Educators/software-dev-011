//TODO The code I commented out is a way to add the id as the default value in the form. You can use the input way or the just-having-button way

//import our database connection
import { dbConnect } from "@/utils/dbConnection";
//import something to revalidate my path (refresh the cache) and to redirect the user back to another page
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePage({ params }) {
  //we need to get the data from the database first
  //   const db = dbConnect();
  //   const roller = (
  //     await db.query(
  //       `SELECT id FROM coasterrollers WHERE id = ${params.rollerId}`
  //     )
  //   ).rows[0];

  //I will put the data I got as the value in the form
  //a function to handle the delete form
  async function handleDelete() {
    "use server";
    //a sql query to delete the data
    const db = dbConnect();
    await db.query(
      `DELETE FROM coasterrollers WHERE id = ${params.rollerId} RETURNING *`
    );

    //revalidate the data in affected routes
    //redirect the user to the rollers page
    revalidatePath("/rollers");

    redirect("/rollers");
  }

  return (
    <>
      <h1>Delete your data???!!!</h1>
      {/* a form that will contain the data that we want to delete */}
      <form action={handleDelete}>
        {/* <input
          name="id"
          type="hidden"
          id="id"
          required
          readonly
          defaultValue={roller.id}
        /> */}
        <button
          type="submit"
          className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
        >
          Are you sure you want to delete this marvellous coaster?
        </button>
      </form>
    </>
  );
}
