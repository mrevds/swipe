import '../styles/Navbar.css'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="container">
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <ul className="menu">
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Team</li>
                <li>FAQ</li>
                <li>Feedback</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <button className="btnnav">Buy now</button>
        </nav>
    </div>
  )
}

export default Navbar