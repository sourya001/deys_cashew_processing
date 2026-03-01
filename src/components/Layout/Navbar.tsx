import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteContent } from '../../data/content'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={handleLinkClick}
          className="text-lg font-semibold text-stone-800 no-underline hover:text-amber-700 hover:underline"
        >
          {siteContent.companyName}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `text-sm font-medium no-underline transition-colors ${
                  isActive
                    ? 'text-amber-700 underline'
                    : 'text-stone-600 hover:text-amber-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="flex flex-col gap-1.5 rounded p-2 text-stone-600 hover:bg-stone-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-stone-200 bg-white px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded px-3 py-2 text-sm font-medium no-underline ${
                  isActive
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-stone-600 hover:bg-stone-50'
                }`
              }
              onClick={handleLinkClick}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
