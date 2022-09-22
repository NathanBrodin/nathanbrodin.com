import Link from "next/link"

export default function Nav() {
  return (
    <div>
        <nav>
          <div>
            <h1>Nathan Brodin</h1>
          </div>
          <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}
