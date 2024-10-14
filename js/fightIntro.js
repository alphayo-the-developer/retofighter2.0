// const elts = {
//   text1: document.getElementById('text1'),
//   text2: document.getElementById('text2')
// }

// const texts = ['1', '2', '3', 'Fight']

// const morphTime = 1
// const cooldownTime = 0.25

// let textIndex = texts.length - 1
// let time = new Date()
// let morph = 0
// let cooldown = cooldownTime

// elts.text1.textContent = texts[textIndex % texts.length]
// elts.text2.textContent = texts[(textIndex + 1) % texts.length]

// function doMorph() {
//   morph -= cooldown
//   cooldown = 0

//   let fraction = morph / morphTime

//   if (fraction > 1) {
//     cooldown = cooldownTime
//     fraction = 1
//   }

//   setMorph(fraction)
// }

// function setMorph(fraction) {
//   elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
//   elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

//   fraction = 1 - fraction
//   elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
//   elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

//   elts.text1.textContent = texts[textIndex % texts.length]
//   elts.text2.textContent = texts[(textIndex + 1) % texts.length]
// }

// function doCooldown() {
//   morph = 0

//   elts.text2.style.filter = ''
//   elts.text2.style.opacity = '100%'

//   elts.text1.style.filter = ''
//   elts.text1.style.opacity = '0%'
// }
// var end = 'now'
// function animateStartFight() {
//   if (end == 'now') requestAnimationFrame(animateStartFight)

//   let newTime = new Date()
//   let shouldIncrementIndex = cooldown > 0
//   let dt = (newTime - time) / 1000
//   time = newTime
//   cooldown -= dt

//   if (cooldown <= 0) {
//     if (shouldIncrementIndex) {
//       textIndex++
//     }

//     doMorph()
//   } else {
//     doCooldown()
//   }

//   if (elts.text2.textContent == 'Fight') {
//     setTimeout(() => {
//       end = 'notnow'
//       fightintro = true
//       elts.text1.style.display = 'none'
//       elts.text2.style.display = 'none'
//     }, 500)
//   }
// }

// function setFightIntro() {
//   // setTimeout(() => {

//   //     }, 1000);

//   end = 'now'
//   console.log(elts.text1.style.display)
//   elts.text1.style.display = 'block'
//   elts.text2.style.display = 'block'
// }

// // animateStartFight()

const displayText = document.querySelector('#fightdisplay');
function startFightntro() {
  let count = 3;
  let displayedtext;
  let fight = 'FIGHT';

  setInterval(() => {
      count--;
  }, 2500)

  setInterval(() => {
      console.log(count)
      if(count != 0){
          displayText.innerHTML = count;
      }

      if(count == 0){
        displayText.innerHTML = fight;
    }

    if(count == -1){
        displayText.style.display = 'none';
    }
  }, 2000);
}






// import { gsap } from "../gsap/index.js";
// var tl = gsap.timeline();

var startSequence =  function () {



tl.to(".disthree", { opacity: 0, duration: 2, onComplete: displayThree });
tl.to(".distwo", { opacity: 1, duration: 2, onStart: displayTwo },2);
tl.to(".disone", { opacity: 1, duration: 2, onStart: displayOne },4);
tl.to(".disfight", { opacity: 1, duration: 2, onStart: displayFight, onComplete: kill },6);

function displayThree() {
  let el = document.querySelector(".disthree");
  el.style.display = "none";
}

function displayTwo() {
   let el = document.querySelector(".distwo");
   el.style.display = "block";

 }

 function displayOne() {
   let el1 = document.querySelector(".distwo");
   el1.style.display = "none";

   let el = document.querySelector(".disone");
   el.style.display = "block";
 }

 function displayFight() {
   let el1 = document.querySelector(".disone");
   el1.style.display = "none";

   let el = document.querySelector(".disfight");
   el.style.display = "block";
 }

function kill() {
   console.log(333)
} 
}


