//I am going to purposefully break this page to test my error page
//I am going to throw an error

export default function BrokenCoaster() {
  throw new Error(
    "Your coaster is off the rails! Take a minute to go back on track"
  );
  return (
    <>
      <h1>ERROR</h1>
    </>
  );
}
