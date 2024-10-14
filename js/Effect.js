// var HITEffect = class {
//   constructor(position, sprite,blood,smoke,smear,smear2, frame = 5) {
//     this.x = position.x
//     this.y = position.y
//     this.image = new Image()

//     // this.image.src = './img/smokeExplosion.png'
//     // this.image.src = './img/shop.png'
//     // this.image.src = './img/Attack2.png'
//     // img\effects\throws\Hit3.png
//     this.image.src = sprite
//     // this.image.src = './img/Firebolt.png'
//     this.spriteWidth = this.image.width
//     this.spriteHeight = this.image.height
//     this.maxFrame = frame
//     this.width = this.spriteWidth / this.maxFrame
//     this.height = this.spriteHeight
//     this.gameFrame = 0
//     this.staggerFrame = 6
//     this.framey = 0
//     this.framex = 0
//     this.frame = 0
//     this.framesElapsed = 0
//     this.framesHold = 5
//     this.canDelete = false
//     this.blood = new Image()
//     this.blood.src = blood;
//     this.smoke = new Image()
//     this.smoke.src = smoke;
//     this.smear = new Image()
//     this.smear.src = smear;
//     this.smear2 = new Image()
//     this.smear2.src = smear2;
    
//   }
//   draw(c) {
//     // console.log(this.image)
//     //   this.x += this.speed;

//     //   c.fillStyle = 'green'
//     // c.beginPath()
//     // c.fillRect(
//     //   this.x,
//     //   this.y,
//     //   600,
//     //   800
//     // )
//     // c.stroke()

//     if(this.image){
//       c.drawImage(
//         this.image,
//         this.framex * this.width,
//         0,
//         this.width,
//         this.height,
//         this.x - this.spriteWidth / 2 + 50,
//         this.y - this.spriteHeight / 2,
//         200,
//         200
//       )
//       c.drawImage(
//         this.image,
//         this.framex * this.width,
//         0,
//         this.width,
//         this.height,
//         this.x - this.spriteWidth / 2 + 50,
//         this.y - this.spriteHeight / 2,
//         200,
//         200
//       )
//     }
    
//     if(this.blood){
//       c.drawImage(
//         this.blood,
//         this.framex * this.width,
//         0,
//         this.width,
//         this.height,
//         this.x - this.spriteWidth / 2 + 50,
//         this.y - this.spriteHeight / 2,
//         200,
//         200
//       ) 
//       c.drawImage(
//         this.blood,
//         this.framex * this.width,
//         0,
//         this.width,
//         this.height,
//         this.x - this.spriteWidth / 2 + 50,
//         this.y - this.spriteHeight / 2,
//         200,
//         200
//       ) 
//     }
//     if(this.smear){
//       c.drawImage(
//         this.smear,
//         this.framex * this.width,
//         0,
//         this.width,
//         this.height,
//         this.x - this.spriteWidth / 2 ,
//         this.y - this.spriteHeight / 2 - 100,
//         300,
//         300
//       )
//       c.drawImage(
//         this.smear,
//         this.framex * this.width,
//         0,
//         this.width,
//         this.height,
//         this.x - this.spriteWidth / 2 ,
//         this.y - this.spriteHeight / 2 - 100,
//         300,
//         300
//       )
//     }
//     // if(this.smear2){
//     //   c.drawImage(
//     //     this.smear2,
//     //     this.framex * this.width,
//     //     0,
//     //     this.width,
//     //     this.height,
//     //     this.x - this.spriteWidth / 2 ,
//     //     this.y - this.spriteHeight / 2 ,
//     //     300,
//     //     300
//     //   )
//     //   c.drawImage(
//     //     this.smear2,
//     //     this.framex * this.width,
//     //     0,
//     //     this.width,
//     //     this.height,
//     //     this.x - this.spriteWidth / 2 ,
//     //     this.y - this.spriteHeight / 2 ,
//     //     300,
//     //     300
//     //   )
      
//     // }
    
//     if(this.smoke){
//       c.drawImage(
//         this.smoke,
//         this.framex * this.width,
//         0,
//         this.width,
//         this.height,
//         this.x - this.spriteWidth / 2 + 50,
//         this.y - this.spriteHeight / 2,
//         200,
//         200
//       )
//     }
    
//     // this.framex++;
//     // this.framex++

//     this.framesElapsed++

//     if (this.framesElapsed % this.framesHold === 0) {
//       if (this.framex < this.maxFrame - 1) {
//         this.framex++
//       } else {
//         this.canDelete = true
//         this.framex = 0
//       }
//     }

//     // console.log(this.framex)
//     // ctx.drawImage(this.image, this.x, this.y,this.image.width,this.image.height);

//     // let position = Math.floor(this.gameFrame / this.staggerFrame) % 3;
//     // this.frames = this.image.width * position;
//     // c.drawImage(
//     //   this.image,
//     //   0,
//     //   this.height,
//     //   100,
//     //   this.height,
//     //   200,
//     //   100,
//     //   this.width,
//     //   this.height
//     // )
//     // this.gameFrame++

//     //   if (
//     //     position == 3 &&
//     //     this.framey < 3
//     //   ) {
//     //     this.framey++;
//     //   }

//     //   if (this.framey == 3) {
//     //     this.framey = 0;
//     //   }
//   }

//   update(c) {
//     this.draw(c)
//   }
// }

var HITEffect = class {
  constructor(position, sprite, frame = 8) {
    this.x = position.x
    this.y = position.y
    this.image = new Image()
    // this.image.src = './img/smokeExplosion.png'
    // this.image.src = '/img/blood1.png'
    // this.image.src = '/img/Hit1.png'
    // this.image.src = './impact03.png'
    this.image.src = sprite
    // this.image.src = './img/Attack2.png'
    // img\effects\throws\Hit3.png
    // this.image.src = sprite
    // this.image.src = './img/Firebolt.png'
    this.spriteWidth = this.image.width
    this.spriteHeight = this.image.height
    this.maxFrame = frame
    this.width = this.spriteWidth / this.maxFrame
    this.height = this.spriteHeight / this.maxFrame
    this.gameFrame = 0
    this.staggerFrame = 6
    this.framey = 0
    this.framex = 0
    this.frame = 0
    this.framesElapsed = 0
    this.framesHold = 1
    this.canDelete = false
    this.smoke = new Image()
  }
  draw(c) {
    // console.log(this.image)
    //   this.x += this.speed;

    //   c.fillStyle = 'green'
    // c.beginPath()
    // c.fillRect(
    //   this.x,
    //   this.y,
    //   60,
    //   80
    // )
    // c.stroke()
    c.drawImage(
      this.image,
      this.framex * this.width,
      this.framey * this.width,
      this.width,
      this.height,
      // this.x - this.spriteWidth / 2 + 50,
      // this.y - this.spriteHeight / 2,
      // 20,
      this.x,
      this.y,
      600,
      600
    )

    // this.framex++;
    // this.framex++

    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framex < this.maxFrame - 1) {
        this.framex++
      } else {
        // this.canDelete = true
        this.framex = 0
        this.framey++;
      }
    }

    if(this.framey >= this.maxFrame - 1){
      this.framey = 0;
      this.canDelete = true

    }
  }




  update(c) {
    this.draw(c)
  }
}

var FIREBOLTEffect = class {
  constructor(position1, sprite) {
    this.name = 'fire'
    this.x = position1.x
    this.y = position1.y
    // this.position.x = this.x;
    // this.position.y = this.y;
    this.speed = 20
    this.image = new Image()
    this.image.src = './img/effects/throws/Firebolt.png'
    this.spriteWidth = this.image.width
    this.spriteHeight = this.image.height
    this.maxFrame = 4
    this.width = this.spriteWidth / this.maxFrame
    this.height = this.spriteHeight
    this.gameFrame = 0
    this.staggerFrame = 6
    this.framey = 0
    this.framex = 0
    this.frame = 0
    this.framesElapsed = 0
    this.framesHold = 3
    this.canDelete = false
    this.frameCurrent = 0
  }
  draw(c) {
    c.drawImage(
      this.image,
      this.framex * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y - this.spriteHeight / 2,
      250,
      250
    )

    this.framesElapsed++
    this.frameCurrent++
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framex < this.maxFrame - 1) {
        this.framex++
      } else {
        // this.canDelete = true;
        this.frameCurrent = 0
        this.framex = 0
      }
    }
  }

  update(c, canvas) {
    this.x += this.speed
    this.draw(c)
    if (this.x >= canvas.width) {
      this.canDelete = true
    }
  }
}

var DARKEffect = class  {
  constructor(position1, sprite) {
    this.name = 'dark'
    this.x = position1.x
    this.y = position1.y
    // this.position.x = this.x;
    // this.position.y = this.y;
    this.speed = 10
    this.image = new Image()

    this.image.src = './img/effects/throws/Dark.png'
    this.spriteWidth = this.image.width
    this.spriteHeight = this.image.height
    this.maxFrame = 10
    this.width = this.spriteWidth / this.maxFrame
    this.height = this.spriteHeight
    this.gameFrame = 0
    this.staggerFrame = 6
    this.framey = 0
    this.framex = 0
    this.frame = 0
    this.framesElapsed = 0
    this.framesHold = 10
    this.canDelete = false
  }
  draw(c) {

    c.drawImage(
      this.image,
      this.framex * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y - this.spriteHeight / 2,
      150,
      150
    )

    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framex < this.maxFrame - 1) {
        this.framex++
      } else {
        // this.canDelete = true;
        this.framex = 0
      }
    }
  }

  update(c, canvas) {
    this.x += this.speed
    this.draw(c)
    console.log(canvas.width)
    if (this.x >= canvas.width) {
      this.canDelete = true
    }
  }
}

var WOODEffect = class  {
  constructor(position1, speed, sprite) {
    this.name = 'wood'
    this.x = position1.x
    this.y = position1.y
    // this.position.x = this.x;
    // this.position.y = this.y;
    this.speed = 10
    this.image = new Image()
    this.image.src = './img/effects/throws/Wood.png'
    this.spriteWidth = this.image.width
    this.spriteHeight = this.image.height
    this.maxFrame = 8
    this.width = this.spriteWidth / this.maxFrame
    this.height = this.spriteHeight
    this.gameFrame = 0
    this.staggerFrame = 6
    this.framey = 0
    this.framex = 0
    this.frame = 0
    this.framesElapsed = 0
    this.framesHold = 10
    this.canDelete = false
  }
  draw(c) {
    //   this.x += this.speed;

    //   c.fillStyle = 'green'
    // c.beginPath()
    // c.fillRect(
    //   this.x,
    //   this.y,
    //   600,
    //   800
    // )
    // c.stroke()

    c.drawImage(
      this.image,
      this.framex * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y - this.spriteHeight / 2,
      150,
      150
    )

    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framex < this.maxFrame - 1) {
        this.framex++
      } else {
        // this.canDelete = true;
        this.framex = 0
      }
    }
  }

  update(c, canvas) {
    this.x += this.speed
    this.draw(c)
    if (this.x >= canvas.width) {
      this.canDelete = true
    }
  }
}

var ICEEffect = class  {
  constructor(position1, speed, sprite) {
    this.name = 'ice'
    this.x = position1.x
    this.y = position1.y
    // this.position.x = this.x;
    // this.position.y = this.y;
    this.speed = 10
    this.image = new Image()
    this.image.src = './img/effects/throws/Ice.png'
    this.spriteWidth = this.image.width
    this.spriteHeight = this.image.height
    this.maxFrame = 10
    this.width = this.spriteWidth / this.maxFrame
    this.height = this.spriteHeight
    this.gameFrame = 0
    this.staggerFrame = 6
    this.framey = 0
    this.framex = 0
    this.frame = 0
    this.framesElapsed = 0
    this.framesHold = 10
    this.canDelete = false
  }
  draw(c) {
    //   this.x += this.speed;

    //   c.fillStyle = 'green'
    // c.beginPath()
    // c.fillRect(
    //   this.x,
    //   this.y,
    //   600,
    //   800
    // )
    // c.stroke()

    c.drawImage(
      this.image,
      this.framex * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y - this.spriteHeight / 2,
      150,
      150
    )

    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framex < this.maxFrame - 1) {
        this.framex++
      } else {
        // this.canDelete = true;
        this.framex = 0
      }
    }
  }

  update(c, canvas) {
    this.x += this.speed
    this.draw(c)
    console.log(canvas.width)
    if (this.x >= canvas.width) {
      this.canDelete = true
    }
  }
}
var ICEEffect = class  {
  constructor(position1, speed, sprite) {
    this.name = 'water'
    this.x = position1.x
    this.y = position1.y
    this.speed = 10
    this.image = new Image()
    this.image.src = './img/effects/throws/WaterBall.png'
    this.spriteWidth = this.image.width
    this.spriteHeight = this.image.height
    this.maxFrame = 5
    this.maxFramey = 5

    this.width = this.spriteWidth / this.maxFrame
    this.height = this.spriteHeight / this.maxFramey
    this.gameFrame = 0
    this.staggerFrame = 6
    this.framey = 0
    this.framex = 0
    this.frame = 0
    this.framesElapsed = 0
    this.framesHold = 10
    this.canDelete = false
  }
  draw(c) {
    c.drawImage(
      this.image,
      this.framex * this.width,
      this.framey * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      150,
      150
    )

    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framex < this.maxFrame - 1) {
        this.framex++
      } else {
        this.framex = 0
      }
    }
  }

  update(c, canvas) {
    this.x += this.speed
    this.draw(c)
    console.log(canvas.width)
    if (this.x >= canvas.width) {
      this.canDelete = true
    }
  }
}
