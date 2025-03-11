import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/invoices">Invoices</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/customers">Customers</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
