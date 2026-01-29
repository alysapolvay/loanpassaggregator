import React from 'react'
import { Property } from '../types/property'

type Props = {
  properties: Property[]
  onDelete: (id: string) => void
}

export default function PropertyList({ properties, onDelete }: Props) {
  if (!properties.length) return <div>No properties added yet.</div>

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>Address</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>Type</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>Purchase Price</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>Sqft</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>Market Rent</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>Added</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(p => (
            <tr key={p.id}>
              <td style={{ padding: '8px 4px' }}>{p.address}</td>
              <td style={{ padding: '8px 4px' }}>{p.propertyType}</td>
              <td style={{ padding: '8px 4px' }}>{p.purchasePrice != null ? `$${p.purchasePrice.toLocaleString()}` : '-'}</td>
              <td style={{ padding: '8px 4px' }}>{p.squareFootage ?? '-'}</td>
              <td style={{ padding: '8px 4px' }}>{p.marketRent != null ? `$${p.marketRent}` : '-'}</td>
              <td style={{ padding: '8px 4px' }}>{new Date(p.createdAt).toLocaleString()}</td>
              <td style={{ padding: '8px 4px' }}>
                <button onClick={() => onDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
