import owner1Photo from '../assets/owners/owner1.png'
import owner2Photo from '../assets/owners/owner2.png'

export type Owner = {
  id: number
  name: string
  title: string
  imageUrl: string
  description: string
}

export const owners: Owner[] = [
  {
    id: 1,
    name: 'Chanchal Dey',
    title: 'Co-founder & Director',
    imageUrl: owner1Photo,
    description:
      'Oversees processing operations and quality control to ensure every batch meets food safety and grade standards.',
  },
  {
    id: 2,
    name: 'Arya Dey',
    title: 'Co-founder & Director',
    imageUrl: owner2Photo,
    description:
      'Leads sourcing, customer relations, and partnerships with farmers and buyers across India.',
  },
]
