import { navLinks } from "../../constants"

const Navbar = () => {
  return (
    <nav>
        <div>
            <a href="#home"className="flex items-center gap-2">
                <p>Velvet Pour</p>
            </a>
        </div>
        <ul>
            {navLinks.map((link)=>(
                <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar
