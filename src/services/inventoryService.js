import { api } from './api'

/**
 * Fetches inventory items from the backend.
 * Backend endpoint (planned): GET /api/inventory
 */
export function getInventory() {
  return api.get('/api/inventory')
}
