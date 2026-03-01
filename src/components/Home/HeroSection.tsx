import { siteContent } from '../../data/content'
import { Link } from 'react-router-dom'

export const HeroSection = () => {
  return (
    <section id="home" className="py-12 md:py-16 lg:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-wide text-amber-600">
            Welcome to
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {siteContent.companyName}
          </h1>
          <p className="mt-3 text-lg font-medium text-stone-700">
            {siteContent.tagline}
          </p>
          <p className="mt-2 text-stone-600">
            {siteContent.heroSubtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="shrink-0">
          <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-stone-800">
              Premium cashew processing
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li>• Graded kernels (W240, W320, W450)</li>
              <li>• Hygienic processing &amp; QC</li>
              <li>• Bulk orders &amp; export</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
