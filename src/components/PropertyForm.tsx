import React, { useState } from 'react'
import { Property } from '../types/property'

type Props = {
  onAdd: (p: Property) => void
}

export default function PropertyForm({ onAdd }: Props) {
  const [address, setAddress] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [acquisitionDate, setAcquisitionDate] = useState('')
  const [appraisalDate, setAppraisalDate] = useState('')
  const [purchasePrice, setPurchasePrice] = useState<number | undefined>(undefined)
  const [purchaseDate, setPurchaseDate] = useState('')
  const [rehab, setRehab] = useState<number | undefined>(undefined)
  const [payoff, setPayoff] = useState<number | undefined>(undefined)
  const [squareFootage, setSquareFootage] = useState<number | undefined>(undefined)
  const [condition, setCondition] = useState('')
  const [taxes, setTaxes] = useState<number | undefined>(undefined)
  const [insurance, setInsurance] = useState<number | undefined>(undefined)
  const [floodInsurance, setFloodInsurance] = useState<number | undefined>(undefined)
  const [hoaFee, setHoaFee] = useState<number | undefined>(undefined)
  const [leaseAmount, setLeaseAmount] = useState<number | undefined>(undefined)
  const [marketRent, setMarketRent] = useState<number | undefined>(undefined)

  function reset() {
    setAddress('')
    setPropertyType('')
    setAcquisitionDate('')
    setAppraisalDate('')
    setPurchasePrice(undefined)
    setPurchaseDate('')
    setRehab(undefined)
    setPayoff(undefined)
    setSquareFootage(undefined)
    setCondition('')
    setTaxes(undefined)
    setInsurance(undefined)
    setFloodInsurance(undefined)
    setHoaFee(undefined)
    setLeaseAmount(undefined)
    setMarketRent(undefined)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!address.trim() || !propertyType.trim()) return

    const newProp: Property = {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      address: address.trim(),
      propertyType: propertyType.trim(),
      acquisitionDate: acquisitionDate || undefined,
      appraisalDate: appraisalDate || undefined,
      purchasePrice: purchasePrice ?? undefined,
      purchaseDate: purchaseDate || undefined,
      rehab: rehab ?? undefined,
      payoff: payoff ?? undefined,
      squareFootage: squareFootage ?? undefined,
      condition: condition || undefined,
      taxes: taxes ?? undefined,
      insurance: insurance ?? undefined,
      floodInsurance: floodInsurance ?? undefined,
      hoaFee: hoaFee ?? undefined,
      leaseAmount: leaseAmount ?? undefined,
      marketRent: marketRent ?? undefined,
      createdAt: new Date().toISOString(),
    }

    onAdd(newProp)
    reset()
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <input placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} style={{ flex: 2 }} required />
        <input placeholder="Property type" value={propertyType} onChange={e => setPropertyType(e.target.value)} style={{ flex: 1 }} required />
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input type="date" placeholder="Acquisition date" value={acquisitionDate} onChange={e => setAcquisitionDate(e.target.value)} />
        <input type="date" placeholder="Appraisal date" value={appraisalDate} onChange={e => setAppraisalDate(e.target.value)} />
        <input type="date" placeholder="Purchase date" value={purchaseDate} onChange={e => setPurchaseDate(e.target.value)} />
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input type="number" step="0.01" placeholder="Purchase price" value={purchasePrice ?? ''} onChange={e => setPurchasePrice(e.target.value ? Number(e.target.value) : undefined)} />
        <input type="number" step="0.01" placeholder="Rehab" value={rehab ?? ''} onChange={e => setRehab(e.target.value ? Number(e.target.value) : undefined)} />
        <input type="number" step="0.01" placeholder="Payoff" value={payoff ?? ''} onChange={e => setPayoff(e.target.value ? Number(e.target.value) : undefined)} />
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input type="number" placeholder="Square footage" value={squareFootage ?? ''} onChange={e => setSquareFootage(e.target.value ? Number(e.target.value) : undefined)} />
        <input placeholder="Condition" value={condition} onChange={e => setCondition(e.target.value)} />
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input type="number" step="0.01" placeholder="Taxes" value={taxes ?? ''} onChange={e => setTaxes(e.target.value ? Number(e.target.value) : undefined)} />
        <input type="number" step="0.01" placeholder="Insurance" value={insurance ?? ''} onChange={e => setInsurance(e.target.value ? Number(e.target.value) : undefined)} />
        <input type="number" step="0.01" placeholder="Flood insurance" value={floodInsurance ?? ''} onChange={e => setFloodInsurance(e.target.value ? Number(e.target.value) : undefined)} />
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input type="number" step="0.01" placeholder="HOA fee" value={hoaFee ?? ''} onChange={e => setHoaFee(e.target.value ? Number(e.target.value) : undefined)} />
        <input type="number" step="0.01" placeholder="Lease amount" value={leaseAmount ?? ''} onChange={e => setLeaseAmount(e.target.value ? Number(e.target.value) : undefined)} />
        <input type="number" step="0.01" placeholder="Market rent" value={marketRent ?? ''} onChange={e => setMarketRent(e.target.value ? Number(e.target.value) : undefined)} />
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button type="submit">Add property</button>
        <button type="button" onClick={reset}>Reset</button>
      </div>
    </form>
  )
}
