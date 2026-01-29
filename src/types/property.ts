export interface Property {
  id: string
  address: string
  propertyType: string
  acquisitionDate?: string
  appraisalDate?: string
  purchasePrice?: number
  purchaseDate?: string
  rehab?: number
  payoff?: number
  squareFootage?: number
  condition?: string
  taxes?: number
  insurance?: number
  floodInsurance?: number
  hoaFee?: number
  leaseAmount?: number
  marketRent?: number
  createdAt: string
}
