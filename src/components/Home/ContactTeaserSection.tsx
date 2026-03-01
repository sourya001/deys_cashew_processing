import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { contactInfo } from '../../data/contact'

export const ContactTeaserSection = () => {
  return (
    <section id="contact-teaser" className="border-t border-stone-200 bg-white py-12 md:py-16">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center md:gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-stone-900">
            Ready to discuss your requirements?
          </h2>
          <p className="mt-2 max-w-lg text-stone-600">
            Reach out for bulk orders, grade specifications, pricing, or any
            questions about our cashew products. We&apos;re happy to help.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-700"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
        <p className="text-sm text-stone-500">
          Prefer email or a form?{' '}
          <Link to="/contact" className="font-medium text-amber-700 hover:underline">
            Go to Contact page
          </Link>
        </p>
      </div>
    </section>
  )
}
