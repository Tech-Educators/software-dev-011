import Link from "next/link";
export default function Header() {
  return (
    <>
      <Link href="/" className="text-emerald-600">
        Home
      </Link>
      <br />
      <Link href="/posts" className="text-emerald-600">
        Posts
      </Link>
    </>
  );
}
