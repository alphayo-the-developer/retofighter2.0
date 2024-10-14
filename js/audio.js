// Load audio
const gruntsEl = document.getElementById('grunts')
const fightgruntsEl = document.getElementById('fightgrunts')
const wooshesEl = document.getElementById('wooshes')
const introsoundEl = document.getElementById('intro')
const kosoundEl = document.getElementById('ko')
// const background1soundEl = document.getElementById('background1')

window.grunt1 = new AudioManager(gruntsEl, { start: 0.8, end: 1 })
window.grunt2 = new AudioManager(gruntsEl, { start: 0.04, end: 1 })
window.woosh1 = new AudioManager(wooshesEl, { start: 0.8, end: 1 })
window.koSound = new AudioManager(kosoundEl, { start: 0, end: 1 })
window.introSound = new AudioManager(introsoundEl, { start: 0, end: 4 })
