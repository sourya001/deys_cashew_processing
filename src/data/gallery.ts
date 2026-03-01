export type GalleryImage = {
  id: number
  title: string
  imageUrl: string
  category?: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Cashew processing facility',
    imageUrl:
      'https://via.placeholder.com/480x320.png?text=Processing+Facility',
    category: 'Operations',
  },
  {
    id: 2,
    title: 'Grading and quality check',
    imageUrl:
      'https://via.placeholder.com/480x320.png?text=Grading+%26+QC',
    category: 'Quality',
  },
  {
    id: 3,
    title: 'Cashew kernels packaging',
    imageUrl:
      'https://via.placeholder.com/480x320.png?text=Packaging+Line',
    category: 'Packaging',
  },
  {
    id: 4,
    title: 'Finished product storage',
    imageUrl:
      'https://via.placeholder.com/480x320.png?text=Storage+%26+Dispatch',
    category: 'Logistics',
  },
]
