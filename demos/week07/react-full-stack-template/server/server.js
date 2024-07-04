// import my packages

//package configs

// express config
//cors config
//dotenv config
//pg config
//connection string --> we store it in the .env / the value is in the Supabase connect section
//set up a pool

//endpoint for the root route
//set up the server port

//endpoints
//GET endpoint --> we need to SELECT data from database
//POST endpoint --> we receive the body from client and we INSERT the body into the database

//! STRETCH GOALS: UPDATE and DELETE endpoints

// app.put("/updateFormData/:id", async (req, res) => {
//   const dataId = req.params.id;
//   const result = await db.query(
//     `UPDATE tablename SET column_name = $1, second_column = $2 WHERE id = $3 RETURNING *`,
//     [data_one, data_two, dataId]
//   );
//   res.json(result.rows);
// });

// app.delete("/deleteFormData/:id", async (req, res) => {
//   const id = req.params.id;
//   const result = await db.query(
//     `DELETE FROM table_name WHERE id = $1 RETURNING *`,
//     [id]
//   );
//   res.json(result.rows);
// });
