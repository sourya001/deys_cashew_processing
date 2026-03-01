import { siteContent } from '../../data/content'

export const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="border-t border-stone-200 bg-white py-12 md:py-16">
      <h2 className="text-center text-2xl font-semibold text-stone-900 md:text-3xl">
        Our Vision &amp; Mission
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-amber-700">Our Vision</h3>
          <p className="mt-3 text-stone-600">{siteContent.vision}</p>
        </div>
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-amber-700">Our Mission</h3>
          <p className="mt-3 text-stone-600">{siteContent.mission}</p>
        </div>
      </div>
    </section>
  )
}
