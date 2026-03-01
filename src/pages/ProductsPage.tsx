import { products } from '../data/products'
import { ProductCard } from '../components/Products/ProductCard'
import { contactInfo } from '../data/contact'

export const ProductsPage = () => {
  return (
    <section id="products" className="py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-stone-900 md:text-4xl">
          Cashew Products Catalog
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-stone-600">
          An overview of our cashew kernels, raw nuts, and value-added products.
          For grades, pricing, and bulk orders, please contact us directly.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-10 rounded-lg border border-stone-200 bg-amber-50/50 p-4 text-center text-sm text-stone-600">
        <p>
          For full grade list, availability, and pricing, call us on{' '}
          <strong className="text-stone-800">{contactInfo.phone}</strong> or
          WhatsApp <strong className="text-stone-800">{contactInfo.whatsapp}</strong>.
        </p>
      </div>
    </section>
  )
}
