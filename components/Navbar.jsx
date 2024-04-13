import { headers } from "next/headers"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="py-3 px-5">
      <div className="logo">
        <h2>Ikd-Blog</h2>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-link">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link href="/create">Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar