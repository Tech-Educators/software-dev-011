//import Image component
import Image from "next/image";
//import local image from public (no hyphens)
import coasterroller from "@/../public/coasterroller.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Coaster Rollers</h1>

      <Image
        src="https://images.unsplash.com/photo-1718123571552-4b6bf1d54cba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="coaster roller"
        width={500}
        height={200}
      />
      {/* we can use blur in local images by default */}
      <Image
        src={coasterroller}
        alt="local coaster roller"
        width={400}
        height={100}
        placeholder="blur"
        // className="w-screen"
      />
    </main>
  );
}

//in next.config.mjs. This is only needed for external image links
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
