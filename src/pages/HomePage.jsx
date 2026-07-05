import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaCheck, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import AnimatedCounter from '../components/AnimatedCounter'
import Navbar from '../components/Navbar'
import teacherImage from "../assets/ra.jpeg";
import heroImage from "../assets/nataraja.png";
import SectionHeading from '../components/SectionHeading'
import { courses, faqs, galleryItems, highlights, navItems, reasons, stats, testimonials } from '../data/siteData'

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    document.title = 'Kings Institute of Fine Arts'
  }, [])

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  const filteredGallery =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#F8F3EA] text-[#3B2418]">
      <Navbar />
      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,155,60,0.24),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(90,30,30,0.94),rgba(59,36,24,0.8))]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#C89B3C]/40 bg-white/12 px-4 py-2 text-sm font-medium text-[#F8F3EA] backdrop-blur">
                <span className="text-[#C89B3C]">✨</span>
                Admissions Open
              </div>
              <h1 className="max-w-3xl font-['Cinzel'] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Experience the Grace, Rhythm & Tradition of Bharatanatyam
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F8F3EA]/90">
                Learn Bharatanatyam from an experienced Guru through weekend offline classes or flexible online classes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full bg-[#C89B3C] px-6 py-3 font-semibold text-[#3B2418] shadow-[0_12px_30px_rgba(200,155,60,0.25)] transition hover:-translate-y-0.5 hover:bg-[#d8af4f]">
                  Enroll Now
                </a>
                <a href="tel:9110454148" className="rounded-full border border-[#C89B3C]/40 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                  Call Now
                </a>
              </div>
              <ul className="mt-8 grid gap-3 text-sm text-[#F8F3EA]/90 sm:grid-cols-3">
                {['Offline Classes (Weekends)', 'Online Classes (Anytime)', 'All Age Groups'].map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
                    <FaCheck className="text-[#C89B3C]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-[#C89B3C]/50" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#C89B3C]/20 blur-3xl" />
              <img
               src={heroImage}
                alt="Lord Nataraja statue"
                className="relative h-[650px] w-full rounded-[2rem] border border-white/20 object-cover object-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
              />
              <div className="absolute bottom-6 left-6 rounded-[1.25rem] border border-[#C89B3C]/40 bg-[#F8F3EA]/90 px-5 py-4 shadow-[0_20px_45px_rgba(90,30,30,0.16)] backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-[#C89B3C]">Curated Learning</p>
                <p className="mt-1 font-['Cinzel'] text-xl text-[#5A1E1E]">Traditional. Modern. Elegant.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="About the Guru" title="Meet Your Guru" description="A professional journey shaped by dedication, discipline and a deep love for preserving Bharatanatyam." />
          <div className="grid items-center gap-12 rounded-[2rem] border border-[#C89B3C]/20 bg-white/70 p-8 shadow-[0_20px_60px_rgba(90,30,30,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[1.75rem] border border-[#C89B3C]/30">
              <img src={teacherImage} alt="Guru Rakshithanjali BJ" className="h-[430px] w-full object-cover object-top" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-['Cinzel'] text-3xl text-[#5A1E1E]">Rakshithanjali BJ</h3>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">IBA • MA • Diploma in Nattuvangam • Bharatanatyam</p>
              <p className="mt-5 text-lg leading-8 text-[#3B2418]/80">
                A devoted teacher and performer, Rakshithanjali BJ has spent years nurturing students with a deep commitment to preserving Bharatanatyam as both an art form and a disciplined life practice. Her teaching inspires confidence, artistic excellence and inner grace in every learner.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Kalai Kaveri College', 'Dedicated to preserving tradition', 'Builds confidence and discipline', 'Encourages artistic excellence'].map((item) => (
                  <div key={item} className="rounded-[1rem] border border-[#C89B3C]/20 bg-[#F8F3EA] px-4 py-3 text-sm text-[#5A1E1E]">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <AnimatedCounter key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
            ))}
          </div>
        </section>

        <section id="courses" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="Our Courses" title="A Learning Experience Beyond the Ordinary" description="Choose a format that suits your rhythm, schedule and artistic goals." />
          <div className="grid gap-7 lg:grid-cols-2">
            {courses.map((course, index) => {
              const Icon = course.icon
              return (
                <motion.article key={course.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[1.75rem] border border-[#C89B3C]/20 bg-white/80 p-8 shadow-[0_20px_55px_rgba(90,30,30,0.08)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#5A1E1E]">
                      <Icon className="text-xl" />
                    </div>
                    <span className="rounded-full border border-[#C89B3C]/30 px-3 py-1 text-sm font-semibold text-[#C89B3C]">{course.badge}</span>
                  </div>
                  <h3 className="mt-6 font-['Cinzel'] text-2xl text-[#5A1E1E]">{course.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-[#3B2418]/80">{course.description}</p>
                  <ul className="mt-6 space-y-3 text-[#3B2418]/80">
                    {course.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3">
                        <FaCheck className="text-[#C89B3C]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section id="why-choose-us" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="Excellence, Tradition and Personal Care" description="Every detail of the learning experience is crafted to feel refined, encouraging and deeply meaningful." />
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="rounded-[1.5rem] border border-[#C89B3C]/20 bg-gradient-to-br from-white to-[#fdf7ed] p-7 shadow-[0_20px_45px_rgba(90,30,30,0.08)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#5A1E1E]">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="font-['Cinzel'] text-xl text-[#5A1E1E]">{item.title}</h3>
                  <p className="mt-3 text-[#3B2418]/75">{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="Our Highlights" title="Crafted for Graceful Growth" description="A journey of artistry, confidence and cultural depth." />
          <div className="grid gap-7 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[1.5rem] border border-[#C89B3C]/20 bg-[#fffaf2] p-7 shadow-[0_20px_50px_rgba(90,30,30,0.06)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#5A1E1E] text-[#C89B3C]">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="font-['Cinzel'] text-xl text-[#5A1E1E]">{item.title}</h3>
                  <p className="mt-3 text-[#3B2418]/75">{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="Moments of Grace and Celebration" description="A glimpse into the studio, stage and spirit of the academy." />
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {['All', 'Classes', 'Performances', 'Events', 'Competitions'].map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? 'bg-[#5A1E1E] text-white' : 'bg-white text-[#3B2418] border border-[#C89B3C]/30'}`}>
                {category}
              </button>
            ))}
          </div>
          <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
            {filteredGallery.map((item) => (
              <button key={item.src} onClick={() => setSelectedImage(item)} className="mb-5 block w-full overflow-hidden rounded-[1.5rem] border border-[#C89B3C]/20 shadow-[0_20px_45px_rgba(90,30,30,0.08)] transition hover:scale-[1.01]">
                <img src={item.src} alt={item.alt} className="h-auto w-full object-cover transition duration-500 hover:scale-110" />
              </button>
            ))}
          </div>
          {selectedImage ? (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#3B2418]/80 p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
              <div className="relative max-w-4xl rounded-[1.75rem] bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]" onClick={(event) => event.stopPropagation()}>
                <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[75vh] w-full rounded-[1.25rem] object-contain" />
                <button onClick={() => setSelectedImage(null)} className="absolute right-5 top-5 rounded-full bg-[#5A1E1E] px-3 py-2 text-sm font-semibold text-white">Close</button>
              </div>
            </div>
          ) : null}
        </section>

        <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="What Students and Parents Say" description="A reflection of the confidence, warmth and excellence nurtured here." />
          <div className="rounded-[2rem] border border-[#C89B3C]/20 bg-white/80 p-8 shadow-[0_20px_60px_rgba(90,30,30,0.08)] lg:p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#C89B3C]">Featured Review</p>
                <h3 className="mt-2 font-['Cinzel'] text-2xl text-[#5A1E1E]">{testimonials[testimonialIndex].name}</h3>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-[#C89B3C]/30 p-3 text-[#5A1E1E] transition hover:bg-[#F8F3EA]">
                  <FaArrowLeft />
                </button>
                <button onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)} className="rounded-full border border-[#C89B3C]/30 p-3 text-[#5A1E1E] transition hover:bg-[#F8F3EA]">
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <motion.div key={testimonialIndex} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-[1.5rem] bg-[#F8F3EA] p-8">
              <div className="flex items-center gap-2 text-[#C89B3C]">
                {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="mt-5 text-xl leading-9 text-[#3B2418]">“{testimonials[testimonialIndex].comment}”</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5A1E1E] font-['Cinzel'] text-lg text-[#F8F3EA]">
                  {testimonials[testimonialIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#5A1E1E]">{testimonials[testimonialIndex].name}</p>
                  <p className="text-sm text-[#3B2418]/60">{testimonials[testimonialIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-[#C89B3C]/20 bg-white/80 p-8 shadow-[0_20px_60px_rgba(90,30,30,0.08)] lg:p-10">
              <SectionHeading eyebrow="FAQ" title="Questions We Often Hear" description="Everything you need to know before beginning your journey." align="left" />
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="rounded-[1rem] border border-[#C89B3C]/20 bg-[#F8F3EA] p-4">
                    <summary className="cursor-pointer font-semibold text-[#5A1E1E]">{faq.question}</summary>
                    <p className="mt-3 text-[#3B2418]/75">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <div id="contact" className="rounded-[2rem] border border-[#C89B3C]/20 bg-gradient-to-br from-[#5A1E1E] to-[#3B2418] p-8 text-white shadow-[0_20px_60px_rgba(90,30,30,0.16)] lg:p-10">
              <SectionHeading eyebrow="Admission" title="Reserve Your Place" description="Begin your Bharatanatyam journey with a refined and welcoming first step." align="left" />
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="rounded-[0.9rem] border border-white/15 bg-white/10 px-4 py-3 placeholder:text-white/60" placeholder="Name" />
                  <input className="rounded-[0.9rem] border border-white/15 bg-white/10 px-4 py-3 placeholder:text-white/60" placeholder="Age" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="rounded-[0.9rem] border border-white/15 bg-white/10 px-4 py-3 placeholder:text-white/60" placeholder="Phone" />
                  <input className="rounded-[0.9rem] border border-white/15 bg-white/10 px-4 py-3 placeholder:text-white/60" placeholder="Email" />
                </div>
                <select className="w-full rounded-[0.9rem] border border-white/15 bg-white/10 px-4 py-3 text-white">
                  <option className="text-[#3B2418]">Offline Weekend</option>
                  <option className="text-[#3B2418]">Online Anytime</option>
                </select>
                <textarea rows="4" className="w-full rounded-[0.9rem] border border-white/15 bg-white/10 px-4 py-3 placeholder:text-white/60" placeholder="Message" />
                <button className="rounded-full bg-[#C89B3C] px-6 py-3 font-semibold text-[#3B2418] transition hover:-translate-y-0.5 hover:bg-[#d8af4f]">Enroll Now</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#C89B3C]/20 bg-[#3B2418] py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <h3 className="font-['Cinzel'] text-2xl text-[#C89B3C]">Kings Institute of Fine Arts</h3>
            <p className="mt-4 max-w-md text-[#F8F3EA]/80">A premium Bharatanatyam academy committed to tradition, artistry and disciplined growth.</p>
          </div>
          <div>
            <h4 className="font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-[#F8F3EA]/80">
              {navItems.map((item) => (
                <li key={item.href}><a href={item.href} className="transition hover:text-white">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">Contact</h4>
            <ul className="mt-4 space-y-3 text-[#F8F3EA]/80">
              <li className="flex items-center gap-2"><FaPhoneAlt className="text-[#C89B3C]" /> 9110454148</li>
              <li className="flex items-center gap-2"><MdEmail className="text-[#C89B3C]" /> kingsinstitution92@gmail.com</li>
              <li className="flex items-center gap-2"><MdLocationPin className="text-[#C89B3C]" /> No.48, 4th Cross, Vidhyanagar, Nanjangud Taluk, Mysore District, Karnataka – 571301</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-sm text-[#F8F3EA]/70 lg:px-8">
          © 2026 Kings Institute of Fine Arts. All rights reserved.
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://wa.me/919110454148" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_rgba(37,211,102,0.3)]">
          <FaWhatsapp className="text-xl" />
        </a>
        <a href="tel:9110454148" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C89B3C] text-[#3B2418] shadow-[0_15px_35px_rgba(200,155,60,0.25)]">
          <FaPhoneAlt />
        </a>
        {showBackToTop ? (
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C89B3C]/40 bg-white text-[#5A1E1E] shadow-[0_15px_35px_rgba(90,30,30,0.12)]">
            ↑
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default HomePage
