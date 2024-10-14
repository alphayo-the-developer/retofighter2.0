const pauseBtn = document.querySelector('#pause')
const countinueBtn = document.querySelector('#continue')
window.restartBtn = document.querySelector('#restart')
pauseBtn.addEventListener('click', () => {
  stickEl.style.display = 'none'
  touchEl.style.display = 'none'
  console.log(` 33 ${restart}`)
  canAnimate = false
  reduceTime = false
})

restartBtn.addEventListener('click', () => {
  console.log(` 33 ${restart}`)
  canAnimate = true
  reduceTime = true
  decrese = true
  restart = true
  clearTimeout(timerId)
  modalContainer.classList.remove('active')

  window.setTimeout(function () {
    modalContainer.style.display = 'none'
  }, 3000)

  animate()
  
})

countinueBtn.addEventListener('click', () => {
  setTimeout(() => {
    setTimeout(() => {
      stickEl.style.display = 'block'
      touchEl.style.display = 'grid'
    }, 1500)
    clearTimeout(timerId)
    canAnimate = true
    reduceTime = true
    decrese = true
    // timing = 'dialog'
    animate()
    decreaseTimer(canAnimate)
  }, 100)
})

