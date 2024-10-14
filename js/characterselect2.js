const p2LargeImg = document.querySelector('#p2largimg')
const p2Name = document.querySelector('#p2name')


const p2wizard = document.querySelector('#p2wizard')
const p2martial = document.querySelector('#p2martial')
const p2samuraimack = document.querySelector('#p2samuraimack')
const p2viking = document.querySelector('#p2viking')
const p2commander = document.querySelector('#p2commander')

const p2SmallImgs = [p2wizard, p2martial, p2samuraimack, p2viking, p2commander]
var lastclicked2 = p2wizard




var char2 = 'p2wizard'
for (let index = 0; index < p2SmallImgs.length; index++) {
  const element = p2SmallImgs[index]
  element.addEventListener('click', (e) => {
    lastclicked2.className = ''
    e.currentTarget.className = 'border'
    // p2LargeImg.src = e.currentTarget.src
    lastclicked2 = e.currentTarget
    changeName(e)
    char2 = e.currentTarget.id;
  })
}

// p1Select
function changeName(element) {
  switch (element.currentTarget.id) {
    // p2

    case 'p2wizard':
      p2Name.innerText = 'Wizard'
      player2 = 'wizard'
      break
    case 'p2martial':
      p2Name.innerText = 'Martial'
      player2 = 'martial'
      break
    case 'p2viking':
      p2Name.innerText = 'Viking'
      player2 = 'viking'
      break
    case 'p2commander':
      p2Name.innerText = 'Commander'
      player2 = 'commander'
      break
    case 'p2samuraimack':
      p2Name.innerText = 'SamuraiMack'
      player2 = 'samuraiMack'
      break

    default:
      break
  }
}

// IDLES

var characterP2Canvas = document.querySelector('#p2Select');
var p2C = characterP1Canvas.getContext('2d');




class CharacterShowCase2 {
  constructor(image, x, y, frameMax,scale) {
    this.x = x
    this.y = y
    this.image = image
    // this.image = new Image();
    // this.image.src = 'img\martial\Idle.png';
    this.frameMax = frameMax
    this.spriteWidth = this.image.width / this.frameMax
    this.spriteHeight = this.image.height
    this.scale = scale;
    this.frame = 0
    this.timer = 0
  }
  update() {
    this.timer++
    if (this.timer % 6 === 0) {
      this.frame++
    }
    if (this.frame >= this.frameMax) {
      this.frame = 0
    }
  }
  draw(lo) {
    this.update()
    // console.log(this.image)
    console.log(lo)
    

    p2C.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      characterP2Canvas.width * this.scale,
      characterP2Canvas.height * this.scale
    )
  }
}




const tester_ = new CharacterShowCase2(p2wizard, 0, 0, 6,1.2)
const tester1_ = new CharacterShowCase2(p2martial, 0, 0, 10,1.2)
const tester2_ = new CharacterShowCase2(p2samuraimack, 0, 0, 8,1.2)
const tester3_ = new CharacterShowCase2(p2viking, 0, 0, 6,1)
const tester4_ = new CharacterShowCase2(p2commander, 0, 0, 5,1)

const showcases2 = []
// var drawableImage;
// function drawableImages(image){
//   drawableImage = new CharacterShowCase(image, 0, 0, 8)
// }

// showcases.push(tester)
// showcases.push(tester1)
// showcases.push(tester2)
// showcases.push(tester3)
// showcases.push(tester4)

showcases2.push(tester_)
showcases2.push(tester1_)
showcases2.push(tester2_)
showcases2.push(tester3_)
showcases2.push(tester4_)


// var mar =  new CharacterShowCase(p1martial,0,0,8);
// function characterinit(image) {
//   characterP1Canvas = document.querySelector('#p1Select')
//   p1C = characterP1Canvas.getContext('2d')
//   mar = new CharacterShowCase(image,0,0,10);
  
  
//   // console.log(characterP1Canvas.width,characterP1Canvas.height)
//   // const mar = new CharacterShowCase(image,0,0,10);
//   // showcases.splice(0,1)
//   // showcases.push(new CharacterShowCase(image, 0, 0, 8))
//   // drawableImage = new CharacterShowCase(image, 0, 0, 8);
//   // drawableImages(image)
// }

// characterinit(p1wizard)

// function switchChar(char) {
//   console.log(char)
//   switch (char) {
//     case 'p1martial':
//       mar = new CharacterShowCase(p1martial,0,0,8);
//       console.log(mar)
  
//       break;
  
//       case 'p1wizard':
//       mar = new CharacterShowCase(p1wizard,0,0,10);
//       console.log(mar)
  
//       break;
  
//     default:
//       break;
//   }  
// }



// function animate() {
//   p1C.clearRect(0, 0, characterP1Canvas.width, characterP1Canvas.height)
//   // p1C.clearRect(0, 0, characterP2Canvas.width, characterP2Canvas.height)
//   // c.drawImage(image, 0, 0,characterP1Canvas.width,characterP1Canvas.height)
//   // mar.draw()
//   // if(mar) mar.draw()

//   requestAnimationFrame(animate)
// // tester.draw()
//   // tester.draw()
//   // drawableImage.draw()  
//   // showcases[0].draw()
//   for (let index = 0; index < showcases.length; index++) {
//     let element = showcases[index]
//     if(char == element.image.id) element.draw('left')
//     // if (showcases[index].frame > showcases[index].frameMax) {
//     //   showcases.splice(index,1);
//     //   index--
//     // }
//   //   // console.log(showcases[index].frame >  showcases[index].frameMax-6)

//   }


  
//   // for (let index = 0; index < showcases2.length; index++) {
//   //   const element = showcases2[index]
//   //   if(char2 == element.image.id) element.draw('right')
   
//   // }


//   // console.log(showcases)
// }
// animate()


function animate2() {
   console.log(333) 
  p2C.clearRect(0, 0, characterP2Canvas.width, characterP2Canvas.height)
  // p1C.clearRect(0, 0, characterP2Canvas.width, characterP2Canvas.height)
  // c.drawImage(image, 0, 0,characterP1Canvas.width,characterP1Canvas.height)
  // mar.draw()
  // if(mar) mar.draw()

  requestAnimationFrame(animate2)
// tester.draw()
  // tester.draw()
  // drawableImage.draw()  
  // showcases[0].draw()
  // for (let index = 0; index < showcases.length; index++) {
  //   const element = showcases[index]
  //   if(char == element.image.id) element.draw('left')
    // if (showcases[index].frame > showcases[index].frameMax) {
    //   showcases.splice(index,1);
    //   index--
    // }
  //   // console.log(showcases[index].frame >  showcases[index].frameMax-6)

  // }


  
  for (let index = 0; index < showcases2.length; index++) {
    let element2 = showcases2[index]
    console.log(char2  == element2.image.id)
    if(char2 == element2.image.id) element2.draw('right')
   
  }


  // console.log(showcases)
}
animate2()
