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
    name: 'Cashew Kernels W320',
    imageUrl:
      '../../assets/products/product1.png',
    minOrderQty: '50 kg',
    category: 'Cashew Kernels',
    description: 'Whole white kernels, 320 pieces per pound. Ideal for snacks and confectionery.',
    featured: true,
  },
  {
    id: 2,
    name: 'Cashew Kernels W240',
    imageUrl:
      'https://via.placeholder.com/400x260.png?text=Cashew+Kernels+W240',
    minOrderQty: '100 kg',
    category: 'Cashew Kernels',
    description: 'Larger whole kernels, 240 pieces per pound. Premium grade for export and retail.',
    featured: true,
  },
  {
    id: 3,
    name: 'Raw Cashew Nuts (RCN)',
    imageUrl:
      'https://via.placeholder.com/400x260.png?text=Raw+Cashew+Nuts',
    minOrderQty: '1 MT',
    category: 'Raw Material',
    description: 'Quality raw cashew nuts for processing or resale. Sourced from trusted origins.',
    featured: true,
  },
  {
    id: 4,
    name: 'Roasted Salted Cashews',
    imageUrl:
      'https://via.placeholder.com/400x260.png?text=Roasted+Salted+Cashews',
    minOrderQty: '25 kg',
    category: 'Value Added',
    description: 'Ready-to-eat roasted and salted cashews. Perfect for retail and F&B.',
    featured: false,
  },
  {
    id: 5,
    name: 'Cashew Pieces (Broken)',
    imageUrl:
      'https://via.placeholder.com/400x260.png?text=Cashew+Pieces',
    minOrderQty: '50 kg',
    category: 'Cashew Kernels',
    description: 'Broken kernels for baking, cooking, and industrial use. Cost-effective option.',
    featured: false,
  },
  {
    id: 6,
    name: 'Cashew Kernels W450',
    imageUrl:
      'https://via.placeholder.com/400x260.png?text=Cashew+Kernels+W450',
    minOrderQty: '50 kg',
    category: 'Cashew Kernels',
    description: 'Smaller whole kernels, 450 pieces per pound. Suitable for bulk and food manufacturing.',
    featured: false,
  },
]
