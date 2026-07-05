import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import { navItems } from '../data/siteData'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-[#C89B3C]/20 bg-[#F8F3EA]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="font-['Cinzel'] text-xl font-semibold tracking-[0.2em] text-[#5A1E1E]">
          Kings Institute of Fine Arts
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#3B2418]/80 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#C89B3C]">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-[#C89B3C] px-5 py-2.5 text-sm font-semibold text-[#3B2418] shadow-[0_12px_30px_rgba(200,155,60,0.25)] transition hover:-translate-y-0.5 hover:bg-[#d8af4f] lg:inline-flex"
        >
          Enroll Now
        </a>
        <button
  onClick={() => setIsOpen(!isOpen)}
  className="rounded-full border border-[#C89B3C]/40 p-2.5 text-[#5A1E1E] lg:hidden"
  aria-label="Open menu"
>
  <FiMenu className="text-xl" />
</button>
           </div>

      {isOpen && (
        <div className="lg:hidden border-t border-[#C89B3C]/20 bg-[#F8F3EA]">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-[#3B2418] font-medium hover:text-[#C89B3C]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-[#C89B3C] px-5 py-3 text-center font-semibold text-[#3B2418]"
            >
              Enroll Now
            </a>
          </nav>
        </div>
      )}

    </motion.header>
  )
}

export default Navbar 
