//Here I will fetch the posts from the server, which is getting the posts from the database

export default function Posts() {
  //we need state to save the values of posts
  //we need useEffect to fetch the data
  //   useEffect();
  //we need a function to get the posts
  //this function is async and uses fetch
  //Once you fetch the data, you will set the state variable to be the posts data

  //DECISION: you can have a separate function to get the posts, and call the function in the useEffect hook or you can write the function directly inside useEffect

  return (
    <>
      Posts
      {/* I want to see a list of posts */}
      {/* Conditional rendering idea: you can have a list of titles and the user clicks on them to see the full post */}
    </>
  );
}
