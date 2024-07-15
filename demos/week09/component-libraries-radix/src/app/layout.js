import Header from "@/components/Header";
//Next.js has Google fonts installed by default
import { Playfair } from "next/font/google";
import "./globals.css";

//configure the font properties. You can add more properties, if you want
//check the font index by pressinc cmd or control over the font name and click
const playfair = Playfair({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Coaster Rollers",
  description:
    "The theme park of your steampunk dreams! Life is a rollercoaster, you have just got to ride it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* add the font to the body tag */}
      <body className={playfair.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
