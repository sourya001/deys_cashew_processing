import { owners } from '../../data/owners'
import { siteContent } from '../../data/content'

export const OwnersSection = () => {
  return (
    <section id="owners" className="border-t border-stone-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-stone-900 md:text-3xl">
          Meet the Owners
        </h2>
        <p className="mt-2 text-stone-600">
          {siteContent.companyName} is led by two hands-on founders dedicated to
          quality cashew processing and long-term partnerships.
        </p>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {owners.map((owner) => (
          <article
            key={owner.id}
            className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-[4/3.2] overflow-hidden bg-stone-100">
              <img
                src={owner.imageUrl}
                alt={owner.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-stone-900">{owner.name}</h3>
              <p className="text-sm font-medium text-amber-600">{owner.title}</p>
              <p className="mt-2 text-sm text-stone-600">{owner.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
