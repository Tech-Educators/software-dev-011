import express from "express";

const app = express();
app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});

app.get("/", function (req, res) {
  res.json({ message: "A'ight, bruv" });
});

//I have imported staff (one element) from staffData.js
// import { staff } from "./staffData.js";

let staff = [
  { name: "Manny", location: "Norwich" },
  { name: "Joe", location: "Norwich" },
  { name: "Sam", location: "Liverpool" },
  { name: "Davina", location: "Cambridge" },
  { name: "Cordelia", location: "Liverpool" },
];

app.get("/staff", function (req, res) {
  //I want to filter the staff data by location using a query string
  //I store the query string information in a variable
  let queryStringLocation = req.query.location;
  let queryStringName = req.query.name;

  //filter() will return an array with all the items that fulfill the condition
  //find() will return the first item that fulfills the condition without an array
  if (queryStringLocation) {
    staff = staff.filter(function (member) {
      return member.location.toLowerCase() === queryStringLocation;
    });
  }
  res.json(staff);
});
