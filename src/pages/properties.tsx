import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import PropertyForm from '../components/PropertyForm'
import PropertyList from '../components/PropertyList'
import { Property } from '../types/property'

const STORAGE_KEY = 'properties'

const PropertiesPage: NextPage = () => {
  const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setProperties(JSON.parse(raw))
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(properties))
    } catch (e) {
      // ignore
    }
  }, [properties])

  function addProperty(p: Property) {
    setProperties(prev => [p, ...prev])
  }

  function deleteProperty(id: string) {
    setProperties(prev => prev.filter(p => p.id !== id))
  }

  function clearAll() {
    if (!confirm('Clear all properties?')) return
    setProperties([])
  }

  function exportJSON() {
    const data = JSON.stringify(properties, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'properties.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  function importJSON(file: File | null) {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as Property[]
        if (Array.isArray(parsed)) setProperties(parsed)
      } catch (e) {
        alert('Invalid JSON file')
      }
    }
    reader.readAsText(file)
  }

  return (
    <>
      <Head>
        <title>Properties — Aggregator</title>
      </Head>
      <main style={{ padding: '1.5rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1>Property Aggregator</h1>

        <section style={{ marginBottom: 16 }}>
          <h2>Add a property</h2>
          <PropertyForm onAdd={addProperty} />
        </section>

        <section style={{ marginBottom: 16 }}>
          <h2>Manage properties ({properties.length})</h2>
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            <button onClick={exportJSON} disabled={!properties.length}>Export JSON</button>
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <input type="file" accept="application/json" onChange={e => importJSON(e.target.files?.[0] ?? null)} />
            </label>
            <button onClick={clearAll} disabled={!properties.length}>Clear all</button>
          </div>
          <PropertyList properties={properties} onDelete={deleteProperty} />
        </section>
      </main>
    </>
  )
}

export default PropertiesPage
