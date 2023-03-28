import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="nav-items-list">
      <li className="route-link">
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li className="route-link">
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li className="route-link">
        <Link to="/contact" className="link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
