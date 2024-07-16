import Header from "@/components/Header";
import { Playfair } from "next/font/google";
import "./globals.css";

//import ClerkProvider to wrap my pages, so all pages have access to clerk
import { ClerkProvider } from "@clerk/nextjs";

const playfair = Playfair({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Coaster Rollers",
  description:
    "The theme park of your steampunk dreams! Life is a rollercoaster, you have just got to ride it",
};

export default function RootLayout({ children }) {
  return (
    // we nest all the root layout elements with the ClerkProvider component
    <ClerkProvider>
      <html lang="en">
        <body className={playfair.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
