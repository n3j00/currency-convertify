import { Link } from 'react-router-dom';
import './navbar.scss';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-wrapper">
        <div className="left-side">
          <h3>Currency Convertify</h3>
        </div>
        <div className="right-side">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/conventer" className="nav-link">
            Conventer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
