import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//this metadata will appear when we visit the home page
//we can use Open Graph to determine what metadata we show when our website is shared on social media
export const metadata = {
  title: "Eggs-creams",
  description: "The best eggs-creams in the world. Take my word for it!",
  OpenGraph: {
    title: "Eggs-cream, the new social media sensation!",
    description: "Don't miss out! This is not clickbait!",
    type: "website",
    url: "the deployed url to your site",
    image: ["image-url"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
