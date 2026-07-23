import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Boxes,
  LineChart,
  FileText,
  Menu,
  X,
} from 'lucide-react'
import './Navbar.css'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/inventory', label: 'Inventory', icon: Boxes },
  { to: '/insights', label: 'Insights', icon: LineChart },
  { to: '/reports', label: 'Reports', icon: FileText },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">SP</span>
        <span className="navbar-title">SupplyPrescript</span>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {links.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              <Icon size={18} strokeWidth={2} />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
