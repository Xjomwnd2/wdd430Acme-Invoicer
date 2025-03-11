import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Invoices from "./pages/Invoices";
import Contact from "./pages/Contact";
import Customers from "./pages/Customers";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/invoices">Invoices</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/customers">Customers</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </Router>
  );
}

export default App;
