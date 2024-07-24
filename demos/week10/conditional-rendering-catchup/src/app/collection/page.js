import FilmsCard from "@/components/FilmsCard";
import { auth } from "@clerk/nextjs/server";
//I want to show the collection when the user is signed in, and display an alternative message when the user is not signed in.
//We are going to use the userID from auth() as our condition.
export default function CollectionPage() {
  //I want to get the userId from auth()
  const { userId } = auth();

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-20 text-5xl">My private collection</h1>
      {/* I want to diplay the FilmsCard if the userId is true */}
      {userId ? (
        <FilmsCard />
      ) : (
        <>
          <h2>Sorry, you need to log in to see the collection</h2>
        </>
      )}
    </div>
  );
}
