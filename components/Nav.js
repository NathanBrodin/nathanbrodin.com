import Link from "next/link"

export default function Nav() {
  return (
    <div>
        <nav>
          <div>
            <h1>Nathan Brodin</h1>
          </div>
          <ul>
                <li><Link href="/" scroll={false} >
                  <a>Home</a>
                </Link></li>
                <li><Link href="#about" scroll={false} >
                  <a>About</a> 
                </Link></li>
                <li><Link href="#projects" scroll={false} >
                  <a>Projects</a> 
                </Link></li>
                <li><Link href="#contact" scroll={false} >
                  <a>Contact</a>  
                </Link></li>
            </ul>
        </nav>
    </div>
  )
}
