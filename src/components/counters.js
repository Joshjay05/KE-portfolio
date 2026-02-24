export function initCounters() {
  const counters = document.querySelectorAll('[data-count]')

  const getsuffix = (target) => {
    if (target === 3) return '' // certifications & products — no suffix needed
    if (target === 2) return '+'
    if (target === 13) return '+'
    return ''
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const target = parseInt(el.dataset.count)
        const suffix = getsuffix(target)
        const duration = 1600
        const step = target / (duration / 16)
        let current = 0

        const update = () => {
          current += step
          if (current >= target) {
            el.textContent = target + suffix
          } else {
            el.textContent = Math.floor(current) + suffix
            requestAnimationFrame(update)
          }
        }
        requestAnimationFrame(update)
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.5 })

  counters.forEach(c => observer.observe(c))
}
