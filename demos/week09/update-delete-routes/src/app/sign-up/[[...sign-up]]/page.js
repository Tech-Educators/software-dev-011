//import the SignUp component
import { SignUp } from "@clerk/nextjs";
export default function SignUpPage() {
  return (
    <>
      <h1>Please, I request you give me your data for the first time</h1>
      <SignUp />
    </>
  );
}
