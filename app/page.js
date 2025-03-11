import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello, Next.js! 🚀</h1>
      <nav>
        <ul>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/invoices">Invoice</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
