const LargeImg = document.querySelector('#largeImg')
const envtitle = document.querySelector('#envtitle')

const forest = document.querySelector('#forest')
const green = document.querySelector('#green')
const red = document.querySelector('#red')
const creepy = document.querySelector('#creepy')
const arenanext = document.querySelector('#arenanext')

const foreststory = document.querySelector('#forestStory')
const greenstory = document.querySelector('#greenStory')
const redstory = document.querySelector('#redStory')
const creepystory = document.querySelector('#creepyStory')

const stories = [foreststory, greenstory, redstory, creepystory]
const envs = [forest, green, red, creepy]




const envstory = {
  forest: foreststory,
  green: greenstory,
  red: redstory,
  creepy: creepystory
}

// const envstitle = {
//   forest: 'forest',
//   green: 'Green Lands',
//   red: 'archaid Layer',
//   creepy: 'Chill Spot'
// }


const envstitle = {
  forest: 'forest',
  green: 'green',
  red: 'red',
  creepy: 'creepy'
}

var lastclicked = forest
var currentstory = foreststory
var currenttitle = 'The forest'

for (let index = 0; index < envs.length; index++) {
  const element = envs[index]
  element.addEventListener('click', (e) => {
    lastclicked.className = ''
    e.currentTarget.className = 'border'
    LargeImg.src = e.currentTarget.src
    lastclicked = e.currentTarget
    let id = element.id
    currentstory = envstory[id]
    currenttitle = envstitle[id]
    back1 = currenttitle
    changeStory()
    changeTitle(currenttitle)
  })
}

function changeStory() {
  stories.forEach((e) => {
    if (e == currentstory) {
      e.style.display = 'block'
    } else {
      e.style.display = 'none'
    }
  })
}

function changeTitle(title) {
  envtitle.innerText = title
}



arenanext.addEventListener('click',()=>{
  back1 = currenttitle;
})



