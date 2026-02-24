export function initCursor() {
  const cursor = document.getElementById('cursor')
  const follower = document.getElementById('cursor-follower')
  
  if (!cursor || !follower) return

  let mouseX = 0, mouseY = 0
  let followerX = 0, followerY = 0

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    cursor.style.left = mouseX + 'px'
    cursor.style.top = mouseY + 'px'
  })

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12
    followerY += (mouseY - followerY) * 0.12
    follower.style.left = followerX + 'px'
    follower.style.top = followerY + 'px'
    requestAnimationFrame(animateFollower)
  }
  animateFollower()

  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered')
      follower.classList.add('hovered')
    })
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered')
      follower.classList.remove('hovered')
    })
  })
}
