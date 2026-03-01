import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'
import { products } from '../../data/products'

const SLIDE_INTERVAL_MS = 5000

const featuredProducts: Product[] =
  products.filter((p) => p.featured).length > 0
    ? products.filter((p) => p.featured)
    : products

export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (featuredProducts.length <= 1) return
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  if (!featuredProducts.length) return null

  const goTo = (index: number) => {
    setCurrentIndex((index + featuredProducts.length) % featuredProducts.length)
  }

  const current = featuredProducts[currentIndex]

  return (
    <section id="featured-products" className="border-t border-stone-200 bg-stone-50 py-12 md:py-16">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-stone-900 md:text-3xl">
          Featured Cashew Products
        </h2>
        <p className="mt-2 text-stone-600">
          A quick look at our key grades and value-added products.
        </p>
      </div>
      <div className="mt-8">
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
          <div className="grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
            <div className="aspect-video overflow-hidden rounded-lg bg-stone-100">
              <img
                src={current.imageUrl}
                alt={current.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-stone-900">{current.name}</h3>
              <p className="mt-1 text-sm text-stone-600">
                Minimum order quantity: <strong className="text-stone-800">{current.minOrderQty}</strong>
              </p>
              {current.description && (
                <p className="mt-2 text-stone-600">{current.description}</p>
              )}
              <Link
                to="/products"
                className="mt-4 inline-flex w-fit items-center justify-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
              >
                View Full Catalog
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          <button
            type="button"
            className="rounded-full p-2 text-stone-500 hover:bg-stone-200 hover:text-stone-700"
            onClick={() => goTo(currentIndex - 1)}
            aria-label="Previous product"
          >
            ‹
          </button>
          <div className="flex gap-1">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-stone-300 hover:bg-stone-400'
                }`}
                onClick={() => goTo(index)}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="rounded-full p-2 text-stone-500 hover:bg-stone-200 hover:text-stone-700"
            onClick={() => goTo(currentIndex + 1)}
            aria-label="Next product"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
