import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import { navItems } from '../data/siteData'

const Navbar = () => {
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
        <button className="rounded-full border border-[#C89B3C]/40 p-2.5 text-[#5A1E1E] lg:hidden" aria-label="Open menu">
          <FiMenu className="text-xl" />
        </button>
      </div>
    </motion.header>
  )
}

export default Navbar
