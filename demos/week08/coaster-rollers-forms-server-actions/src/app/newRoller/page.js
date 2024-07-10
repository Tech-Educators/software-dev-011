//import the database connection
import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//we are going to create a form to collect data from the user

export default function NewRollerPage() {
  //we need to handle the submit

  //the handleSubmit function is async!
  //we use a parameter as a placholder for the real input values

  async function handleSubmit(formData) {
    //!I need to tell the function to submit the form in the server!
    "use server";

    //get the formData from the inputs
    const name = formData.get("name");
    const country = formData.get("country");
    const height = formData.get("height");

    //we need to put the data in the database
    const db = dbConnect();
    await db.query(
      `INSERT INTO coasterrollers(name, country, height) VALUES ($1, $2, $3)`,
      [name, country, height]
    );

    //revalidating the data and redirecting the user
    //revalidate refreshes the path with new data
    revalidatePath("/rollers");
    //redirect takes the user to the path where their data is
    redirect("/rollers");
  }
  return (
    //Keep your input names consistent with the column names in your database
    //Make sure the type attribute value matches the type of data your column is accepting
    <>
      <h1>Form</h1>
      {/* add the handleSubmit in the action attribute */}
      <form action={handleSubmit}>
        <label htmlFor="name" className="text-sky-900">
          Roller Name:{" "}
        </label>
        <input
          className="text-red-950"
          type="text"
          name="name"
          id="name"
          placeholder="Write the name"
          required
        />
        <label htmlFor="country" className="text-sky-900">
          Country of origin:{" "}
        </label>
        <input
          className="text-red-950"
          type="text"
          name="country"
          id="country"
          placeholder="Where is the roller?"
          required
        />
        <label htmlFor="height" className="text-sky-900">
          Height:{" "}
        </label>
        <input
          className="text-red-950"
          type="number"
          name="height"
          id="height"
          min={0}
          placeholder="How tall is the roller?"
          required
        />
        <button
          type="submit"
          className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
        >
          Submit
        </button>
      </form>
    </>
  );
}
