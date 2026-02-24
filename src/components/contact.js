export function initContact() {
  const form = document.getElementById('contact-form')
  const submitBtn = document.getElementById('submit-btn')

  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    submitBtn.textContent = 'Sending...'
    submitBtn.style.opacity = '0.7'
    submitBtn.disabled = true

    setTimeout(() => {
      submitBtn.textContent = '✓ Message Sent!'
      submitBtn.style.background = '#10b981'
      submitBtn.style.opacity = '1'
      form.reset()
      setTimeout(() => {
        submitBtn.textContent = 'Send Message'
        submitBtn.style.background = ''
        submitBtn.disabled = false
      }, 3000)
    }, 1400)
  })
}
