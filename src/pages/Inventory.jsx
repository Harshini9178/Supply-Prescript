import { useEffect, useState } from 'react'
import { getInventory } from '../services/inventoryService'
import './Page.css'
import './Inventory.css'

function Inventory() {
  const [items, setItems] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    getInventory()
      .then((data) => {
        if (isMounted) setItems(data)
      })
      .catch((err) => {
        if (isMounted) setError(err.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="page">
      <div className="inventory-header">
        <h2>Inventory</h2>
        <p>Stock levels and supply tracking.</p>
      </div>

      {loading && <p className="inventory-status">Loading inventory...</p>}

      {!loading && error && (
        <p className="inventory-status inventory-status--error">
          Couldn't reach the backend yet ({error}). This page will populate
          once the Inventory API is live.
        </p>
      )}

      {!loading && !error && items?.length === 0 && (
        <p className="inventory-status">No inventory items found.</p>
      )}

      {!loading && !error && items?.length > 0 && (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Inventory
