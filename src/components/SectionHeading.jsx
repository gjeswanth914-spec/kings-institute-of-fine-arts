const SectionHeading = ({ eyebrow, title, description, align = 'center' }) => {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'left' ? 'text-left' : 'text-center'} mb-12`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">{eyebrow}</p>
      <h2 className="font-['Cinzel'] text-3xl md:text-4xl text-[#5A1E1E]">{title}</h2>
      {description ? <p className="mt-4 text-lg text-[#3B2418]/80">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
