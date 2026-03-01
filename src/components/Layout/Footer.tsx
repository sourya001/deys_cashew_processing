import { MessageCircle } from 'lucide-react'
import { contactInfo } from '../../data/contact'
import { siteContent } from '../../data/content'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-stone-800">
              {siteContent.companyName}
            </h3>
            <p className="mt-1 text-sm text-stone-600">{siteContent.tagline}</p>
          </div>
          <div className="text-sm text-stone-600">
            <p className="mb-3">
              <span className="font-medium text-stone-700">Address:</span>{' '}
              <span className="text-stone-600">Ground Floor, Arya Dey, Primary School, C/O, Rani Basan, Contai, West Bengal 721433</span>
            </p>
            <p className="mb-3">
              <span className="font-medium text-stone-700">Phone:</span>{' '}
              <a href={`tel:${contactInfo.phone}`} className="text-amber-700 hover:underline">
                {contactInfo.phone}
              </a>
            </p>
            <p className="mb-3 flex items-center gap-2">
              <span className="font-medium text-stone-700">WhatsApp:</span>{' '}
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-amber-700 hover:underline"
              >
                <MessageCircle size={16} />
                {contactInfo.whatsapp}
              </a>
            </p>
            <p>
              <span className="font-medium text-stone-700">Email:</span>{' '}
              <a href={`mailto:${contactInfo.email}`} className="text-amber-700 hover:underline">
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-200 bg-stone-50 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-stone-500">
          © {year} {siteContent.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
