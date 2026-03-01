import { galleryImages } from '../data/gallery'

export const GalleryPage = () => {
  return (
    <section id="gallery" className="py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-stone-900 md:text-4xl">Gallery</h1>
        <p className="mt-3 text-stone-600">
          A glimpse into our cashew processing facility, quality checks, and
          packaging.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((item) => (
          <figure
            key={item.id}
            className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm"
          >
            <div className="aspect-[3/2] overflow-hidden bg-stone-100">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="p-3">
              <span className="block text-sm font-medium text-stone-800">
                {item.title}
              </span>
              {item.category && (
                <span className="text-xs text-stone-500">{item.category}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
