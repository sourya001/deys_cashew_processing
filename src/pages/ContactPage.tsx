import { MessageCircle } from 'lucide-react'
import { contactInfo } from '../data/contact'
import { siteContent } from '../data/content'


export const ContactPage = () => {

  const handleWhatsAppSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') || '')
    const phone = String(formData.get('phone') || '')
    const subject = String(formData.get('subject') || 'Website Enquiry')
    const message = String(formData.get('message') || '')

    const text = `
New Enquiry from Website

Name: ${name}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
    `.trim()

    const encodedText = encodeURIComponent(text)
    const whatsappNumber = contactInfo.whatsapp.replace(/\D/g, '')

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedText}`,
      '_blank'
    )

    form.reset()
  }

  return (
    <section id="contact" className="py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-stone-900 md:text-4xl">
          Contact Us
        </h1>
        <p className="mt-3 text-stone-600">
          Get in touch with {siteContent.companyName} for bulk orders, grade
          specifications, or more information about our cashew products.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-900">
            Business Details
          </h2>

          <div className="mt-4 space-y-2 text-sm text-stone-600">
            <p>
              <strong className="text-stone-800">Address</strong>
              <br />
              {contactInfo.addressLine1}
              <br />
              {contactInfo.addressLine2}
              <br />
              {contactInfo.city}, {contactInfo.state} {contactInfo.postalCode}
              <br />
              {contactInfo.country}
            </p>

            <p>
              <strong className="text-stone-800">Phone:</strong>{' '}
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-amber-700 hover:underline"
              >
                {contactInfo.phone}
              </a>
            </p>

            <p className="flex items-center gap-2">
              <strong className="text-stone-800">WhatsApp:</strong>{' '}
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
              <strong className="text-stone-800">Email:</strong>{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-amber-700 hover:underline"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-900">
            Send us a message
          </h2>

          <form
            className="mt-4 space-y-4"
            onSubmit={handleWhatsAppSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-stone-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-800 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-stone-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-800 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1 block text-sm font-medium text-stone-700"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Grade enquiry / Bulk order / Export / Other"
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-800 placeholder:text-stone-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-stone-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-800 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Send Message
            </button>

            <p className="text-xs text-stone-500">
              This form opens WhatsApp with your message pre-filled. You can
              also call or WhatsApp directly using the details on this page.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}