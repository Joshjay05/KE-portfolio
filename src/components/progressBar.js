export function initProgressBar() {
  const bar = document.getElementById('progress-bar')
  if (!bar) return

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (scrollTop / docHeight) * 100
    bar.style.width = Math.min(progress, 100) + '%'
  })
}
