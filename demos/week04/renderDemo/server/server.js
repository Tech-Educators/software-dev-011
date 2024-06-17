// You'll need to express, render, cors and dotenv
// Your app will need to use express.
// Your app will need to use cors.
// Your app will need to know to use express and json.
// You'll need to configure cors.
// You'll need to declare your dbConnectionString
// You'll need to export your db variable (it will use pg pool)
// You'll need to declare and listen from your port.
// Sort out your root route.
// Create your get endpoint.

app.post("/ramen", async (req, res) => {
  const { Flavour, Price, Spiciness, Time_To_Cook } = req.body;

  try {
    await db.query(
      `INSERT into ramen (Flavour, Price, Spiciness, Time_To_Cook) VALUES ($1, $2, $3, $4)`,
      [Flavour, Price, Spiciness, Time_To_Cook]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("NOOOOOOOO NO INSERT FOR YOU", error);
    res.status(500).json({ success: false });
  }
});
