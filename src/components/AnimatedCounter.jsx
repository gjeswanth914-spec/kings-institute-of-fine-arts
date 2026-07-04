import { useEffect, useState } from 'react'

const AnimatedCounter = ({ value, suffix = '', label }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1400
    const stepTime = 15
    const totalSteps = duration / stepTime
    const increment = value / totalSteps

    const timer = window.setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        window.clearInterval(timer)
        return
      }
      setCount(Math.floor(start))
    }, stepTime)

    return () => window.clearInterval(timer)
  }, [value])

  return (
    <div className="rounded-[1.5rem] border border-[#C89B3C]/40 bg-white/70 p-6 text-center shadow-[0_20px_45px_rgba(90,30,30,0.08)] backdrop-blur">
      <div className="font-['Cinzel'] text-3xl md:text-4xl text-[#5A1E1E]">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#3B2418]/70">{label}</p>
    </div>
  )
}

export default AnimatedCounter
