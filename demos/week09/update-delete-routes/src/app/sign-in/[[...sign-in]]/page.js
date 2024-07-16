//import the SignIn component
import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <>
      <h1>Please, I request your lovely data</h1>
      <SignIn />
    </>
  );
}
