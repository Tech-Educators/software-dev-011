import SlowComponent from "@/components/SlowComponent";
import Image from "next/image";
//destructure the Suspense component from React
//With Suspense, we can have different loading states in one page
//The element that takes longer to load will be wrapped in Suspense
import { Suspense } from "react";

export default function FastPageSlowComponent() {
  return (
    <>
      <h1>This page will load as expected</h1>
      <p>Keep an eye for the slow component coming below!</p>
      {/* I am wrapping the SlowComponent within Suspense */}
      {/* The fallback prop contains the element we want to show the user while the component loads */}
      <Suspense
        fallback={
          <>
            <h1 className="text-purple-800">
              Looooook! It&apos;s a loooooooading fallbackkkkkk in Suspeeeense
              <Image
                src={
                  "https://images.unsplash.com/photo-1575203091586-611fe505bb0e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={"loading-image"}
                width={300}
                height={100}
              />
            </h1>
          </>
        }
      >
        <SlowComponent />
      </Suspense>
      <p>I am a fast p tag!</p>
    </>
  );
}
