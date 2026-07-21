import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Insights from './pages/Insights'
import Reports from './pages/Reports'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  )
}

export default App
