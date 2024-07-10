import Link from "next/link";
//import CSS module here
import HeaderStyles from "@/components/Header.module.css";
export default function Header() {
  return (
    <>
      {/* we add the module name (that we choose in the import) and the rules we want to apply */}
      <h1 className={HeaderStyles.h1}>This is the header. What a headache!</h1>
      <nav className={HeaderStyles.nav}>
        <Link href="/" className="italic">
          Home
        </Link>
        <br />
        <Link href="/rollers" className="text-pink-700 font-extrabold">
          Rollers
        </Link>
        <br />
        <Link href="/newRoller" className="text-pink-700 font-extrabold">
          Add a roller!
        </Link>
      </nav>
    </>
  );
}
