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
      'src/assets/products/white-wholes-180.jpg',
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Grade Giant White Whole Cashews (W170–180) – 375–395 Kernels per Kg | Extra Large Size | Superior Quality',
    featured: true,
  },
  {
    id: 2,
    name: 'White Wholes 210 (W210)',
    imageUrl:
      'src/assets/products/white-wholes-210.jpg',
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Grade Jumbo White Whole Cashews (W200–210) – 440–465 Kernels per Kg | Large Size | Export Quality',
    featured: true,
  },
  {
    id: 3,
    name: 'White Wholes 240 (W240)',
    imageUrl:
      'src/assets/products/white-wholes-240.jpg',
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Grade White Whole Cashews (W220–240) – 485–530 Kernels per Kg | Larger Than Standard Size | Rich Taste & Superior Quality.',
    featured: true,
  },
  {
    id: 4,
    name: 'White Wholes 320 (W320)',
    imageUrl:
      'src/assets/products/white-wholes-320.jpg',
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Grade White Whole Cashews (W320) – 580–610 Kernels per Kg | Larger Than Standard Size | Rich Taste & Superior Quality.',
    featured: true,
  },
  {
    id: 5,
    name: 'Splits',
    imageUrl:
      'src/assets/products/splits.jpg',
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Cashew Halves – Same Rich Taste as Whole Cashews | Perfect for Cooking & Bulk Use.',
    featured: true,
  },
  {
    id: 6,
    name: 'K',
    imageUrl:
      'src/assets/products/K.jpg',
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'Premium Cashew Quarter Pieces – Uniform 1/4 Cuts | Ideal for Sweets, Bakery & Namkeen',
    featured: true,
  },
   {
    id: 7,
    name: 'Baby Bits',
    imageUrl:
      'src/assets/products/Cashew-Baby-Bites.jpg',
    minOrderQty: '10 kg',
    category: 'Cashew Kernels',
    description: 'High-Quality Cashew Baby Bits – Small Granules | Ideal for Ice Cream, Chocolates, Bakery & Sweet Preparations',
    featured: true,
  },
]
