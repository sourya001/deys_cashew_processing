import white180 from '../assets/products/white-wholes-180.jpg'
import white210 from '../assets/products/white-wholes-210.jpg'
import white240 from '../assets/products/white-wholes-240.jpg'
import white320 from '../assets/products/white-wholes-320.jpg'
import splits from '../assets/products/splits.jpg'
import k from '../assets/products/K.jpg'
import babyBits from '../assets/products/Cashew-Baby-Bites.jpg'

export type Product = {
  id: number
  name: string
  imageUrl: string
  minOrderQty: string
  category?: string
  description?: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'White Wholes 180 (W180)',
    imageUrl:
      white180,
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Grade Giant White Whole Cashews (W170–180) – 375–395 Kernels per Kg | Extra Large Size | Superior Quality',
    featured: true,
  },
  {
    id: 2,
    name: 'White Wholes 210 (W210)',
    imageUrl:
      white210,
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Grade Jumbo White Whole Cashews (W200–210) – 440–465 Kernels per Kg | Large Size | Export Quality',
    featured: true,
  },
  {
    id: 3,
    name: 'White Wholes 240 (W240)',
    imageUrl:
      white240,
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Grade White Whole Cashews (W220–240) – 485–530 Kernels per Kg | Larger Than Standard Size | Rich Taste & Superior Quality.',
    featured: true,
  },
  {
    id: 4,
    name: 'White Wholes 320 (W320)',
    imageUrl:
      white320,
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Grade White Whole Cashews (W320) – 580–610 Kernels per Kg | Larger Than Standard Size | Rich Taste & Superior Quality.',
    featured: true,
  },
  {
    id: 5,
    name: 'Splits',
    imageUrl:
      splits,
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Cashew Halves – Same Rich Taste as Whole Cashews | Perfect for Cooking & Bulk Use.',
    featured: true,
  },
  {
    id: 6,
    name: 'K',
    imageUrl:
      k,
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Cashew Quarter Pieces – Uniform 1/4 Cuts | Ideal for Sweets, Bakery & Namkeen',
    featured: true,
  },
   {
    id: 7,
    name: 'Baby Bits',
    imageUrl:
      babyBits,
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'High-Quality Cashew Baby Bits – Small Granules | Ideal for Ice Cream, Chocolates, Bakery & Sweet Preparations',
    featured: true,
  },
]
