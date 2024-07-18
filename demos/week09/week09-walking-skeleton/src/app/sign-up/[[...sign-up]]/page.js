import { SignUp } from "@clerk/nextjs";
export default function SignUpPage() {
  return (
    <>
      <h1>Please, sign up for an account</h1>
      <SignUp />
    </>
  );
}

//Make sure the user sees this page first, before they can complete their own profile page.
//The reason is, when the user creates a profile here, clerk assigns them a userId
