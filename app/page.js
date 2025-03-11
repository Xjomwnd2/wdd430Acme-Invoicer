import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello, Next.js! 🚀</h1>
      <nav>
        <ul>
        <li><Link href="/about">Home</Link></li>
        <li><Link href="/contact">Dashboard</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
