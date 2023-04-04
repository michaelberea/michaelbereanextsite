import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
    return (
      <nav className="header">
        <div className="logo">
          <Link href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/software">
              Software
            </Link>
          </li>
          <li>
            <Link href="/music">
              Music
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Header
  