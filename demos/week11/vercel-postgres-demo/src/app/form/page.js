//remember to install vercel postgres --> npm i @vercel/postgres
//I need to import the sql package from vercel postgres
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function FormPage() {
  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const location = formData.get("location");
    const role = formData.get("role");

    //we need to write some sql to insert the data into the database
    //the sql package uses template literals as the syntax for the sql queries
    await sql`INSERT INTO contacts_notebook (username, location, role) VALUES (${username}, ${location}, ${role} ) `;

    revalidatePath("/contacts");
    redirect("/contacts");
  }
  return (
    <>
      <h1>Form</h1>
      <form action={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" required className="text-sky-500" />
        <label htmlFor="location">Location:</label>
        <input type="text" name="location" required className="text-sky-500" />
        <label htmlFor="role">Role:</label>
        <input type="text" name="role" required className="text-sky-500" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
