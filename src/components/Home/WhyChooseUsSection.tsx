import { siteContent } from '../../data/content'

export const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="border-t border-stone-200 bg-stone-50 py-12 md:py-16">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-stone-900 md:text-3xl">
          Why Choose Us
        </h2>
        <p className="mt-2 text-stone-600">
          We focus on making it easy for you to source and receive the products
          your business needs.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteContent.whyChooseUs.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              ✓
            </span>
            <p className="text-sm text-stone-600">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
