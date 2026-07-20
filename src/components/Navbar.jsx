import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">SP</span>
        <span className="navbar-title">SupplyPrescript</span>
      </div>
      <ul className="navbar-links">
        <li>Dashboard</li>
        <li>Inventory</li>
        <li>Insights</li>
        <li>Reports</li>
      </ul>
    </nav>
  )
}

export default Navbar
