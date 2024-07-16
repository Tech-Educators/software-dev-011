// import our db connection string
import { dbConnect } from "@/utils/dbConnection";
//import revalidate and redirect
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditPage({ params }) {
  //to pre-fill the edit form, we need to select the data from the db
  const db = dbConnect();
  const data = (
    await db.query(
      `SELECT * FROM coasterrollers WHERE  id = ${params.rollerId}`
    )
  ).rows[0];
  console.log(data);
  //we need a function to handle the update submit
  async function handleEdit(formData) {
    "use server";
    //let's connect the form inputs with the submit
    const name = formData.get("name");
    const country = formData.get("country");
    const height = formData.get("height");

    //we need to write a sql query to update the form data
    const db = dbConnect();
    await db.query(
      `UPDATE coasterrollers SET name = $1, country = $2, height = $3 WHERE id = ${params.rollerId}`,
      [name, country, height]
    );

    //I need to revalidate the rollers path
    revalidatePath("/rollers");
    //I need to revalidate the [rollerId] path
    revalidatePath(`/rollers/${params.rollerId}`);

    //we need to redirect the user
    redirect(`/rollers/${params.rollerId}`);
  }
  return (
    <>
      <>Update Page</>
      {/* we need a form */}
      <form action={handleEdit}>
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
          //we need to add a defaultValue attribute to connect it with the data in the db
          defaultValue={data.name}
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
          //we need to add a defaultValue attribute to connect it with the data in the db
          defaultValue={data.country}
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
          //we need to add a defaultValue attribute to connect it with the data in the db
          defaultValue={data.height}
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
