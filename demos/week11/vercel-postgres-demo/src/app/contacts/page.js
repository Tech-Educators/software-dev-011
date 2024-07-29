//import our sql package
import { sql } from "@vercel/postgres";

export default async function ContactsPage() {
  //write a sql query to select all the data from contacts_notebook
  const contacts = (await sql`SELECT * FROM contacts_notebook`).rows;
  console.log(contacts);
  //inside the contacts object, there is a rows property, which is an array of objects
  return (
    <>
      <h1>Contacts List</h1>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <h1>{contact.username}</h1>
          <h2>{contact.location}</h2>
          <p>{contact.role}</p>
        </div>
      ))}
    </>
  );
}
