import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="app-container">
    <div className="logo-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="logo-heading">Wave</p>
    </div>
    <ul className="component-container">
      <li>
        <Link to="/" className="content">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="content">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="content">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
