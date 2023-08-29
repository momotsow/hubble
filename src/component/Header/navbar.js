import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="homeHeader">
    <div className="headerTitle">
      <h3>Huble Assessment </h3>
    </div>
    <div className="headerMenu">
      <ul>
        <li><Link className="link" to="/banner">Banner</Link></li>
        <li><Link className="link" to="/accordion">Accordion</Link></li>
      </ul>
    </div>
  </div>
);

export default Header;
