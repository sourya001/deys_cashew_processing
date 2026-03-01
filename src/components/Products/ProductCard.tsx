import type { Product } from '../../data/products'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-stone-900">{product.name}</h3>
        {product.category && (
          <p className="mt-0.5 text-sm text-amber-600">{product.category}</p>
        )}
        <p className="mt-2 text-sm text-stone-600">
          Minimum order quantity: <strong className="text-stone-800">{product.minOrderQty}</strong>
        </p>
        {product.description && (
          <p className="mt-2 text-sm text-stone-600">{product.description}</p>
        )}
      </div>
    </article>
  )
}
