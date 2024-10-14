class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 }
  }) {
    this.position = position
    this.width = 50
    this.height = 150
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.framesMax = framesMax
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.offset = offset
    // this.startpositionX = this.position.x
    // this.startpositionY = this.position.y
    this.gravity = 0.7;
    console.log(position)

  }

  draw(can2) {
    if(can2){
      var imgr = can2
    }else {
      var imgr = this.image
    }
    can2.drawImage(
      imgr,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    )
  }

  restart(name) {
    if(name == 'player'){
      this.position.x = startP1;

    }else {
      this.position.x = startP2;

    }
  }

  animateFrames() {
    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0
      }
    }
  }

  update(c) {
    this.draw(c)
    this.animateFrames()
  }
}

class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    color = 'red',
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined }
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      
    })

    this.position = position
    console.log(position)

    this.velocity = velocity
    this.width = 50
    this.height = 150
    this.lastKey
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height
    }
    this.color = color
    this.isAttacking
    this.health = 40
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.sprites = sprites
    this.dead = false

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image()
      sprites[sprite].image.src = sprites[sprite].imageSrc
    }
  }
  draw(can2) {
    if(can2){
      var imgr = can2
    }else {
      var imgr = this.image
    }
    can2.drawImage(
      imgr,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    )
  }

  update(can2,state, turned) {
    //   if (this.color == state && turned == true) {
    //     console.log(state)
    //     this.position.x = -(this.position.x)
    //  }else {
    //     this.position.x = this.position.x

    //   }
    // if (this.color == state)console.log(`player: ${this.position.x}`)
    // if (this.color != state)console.log(`enemy: ${this.position.x}`)
    // this.position.x = -(thisposition.x)

    if (this.color == 'red')
      console.log(`player/samuraimack: ${this.position.x}`)
    if (this.color == 'blue') console.log(`enemy/wizard: ${this.position.x}`)
    // if (this.color == "blue")console.log(`enemy/wizard/size: ${this.image.width}`)

    // if (this.color == "blue")this.position.x = this.position.x + 500
    this.draw(can2)
    if (!this.dead) this.animateFrames()

    // attack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y

    // draw the attack box

    // c.fillStyle = 'green'
    // c.beginPath()
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // )
    // c.stroke()

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // gravity function
    if (this.position.y + this.height + this.velocity.y >= canvas.height - 80) {
      this.velocity.y = 0
      this.position.y = 464
    } else this.velocity.y += this.gravity
    // console.log(this.position.y)
  }

  attack(attackType) {
    // if (attackType === 'attack1') this.switchSprite('attack1')
    // if (attackType === 'attack2') this.switchSprite('attack2')
    this.switchSprite(attackType)
    this.isAttacking = true
  }

  takeHit() {
    this.health -= 10

    if (this.health <= 0) {
      this.switchSprite('death')
    } else this.switchSprite('takeHit')
  }

  switchSprite(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1)
        this.dead = true
      return
    }

    // fix this

    // overriding all other animations with the attack animation
    if (
      this.image === this.sprites.attack1.image &&
      this.framesCurrent < this.sprites.attack1.framesMax - 1
    )
      return

    // override when fighter gets hit
    if (
      this.image === this.sprites.takeHit.image &&
      this.framesCurrent < this.sprites.takeHit.framesMax - 1
    )
      return

    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image
          this.framesMax = this.sprites.idle.framesMax
          this.framesCurrent = 0
        }
        break
      case 'run':
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image
          this.framesMax = this.sprites.run.framesMax
          this.framesCurrent = 0
        }
        break
      case 'jump':
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image
          this.framesMax = this.sprites.jump.framesMax
          this.framesCurrent = 0
        }
        break

      case 'fall':
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image
          this.framesMax = this.sprites.fall.framesMax
          this.framesCurrent = 0
        }
        break

      case 'attack1':
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image
          this.framesMax = this.sprites.attack1.framesMax
          this.framesCurrent = 0
        }
        break
      case 'attack2':
        if (this.image !== this.sprites.attack2.image) {
          this.image = this.sprites.attack2.image
          this.framesMax = this.sprites.attack2.framesMax
          this.framesCurrent = 0
        }
        break

      case 'takeHit':
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image
          this.framesMax = this.sprites.takeHit.framesMax
          this.framesCurrent = 0
        }
        break

      case 'death':
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image
          this.framesMax = this.sprites.death.framesMax
          this.framesCurrent = 0
        }
        break
    }
  }
}

class AudioManager {
  constructor(source, times) {
    this.times = times
    this.source = source
    
    // end effect
    this.source.addEventListener(
      'timeupdate',
      () => {
        if (this.source.currentTime > this.times.end) {
          this.source.pause()
        }
      },
      false
    )
  }

  play() {
    this.source.currentTime = this.times.start
    this.source.play()
    console.log(this.times)
    if (this.source.currentTime > this.times.end) {
      this.pause()
    }
  }
}

class love {
  constructor({
    position,
    velocity,
    color = 'red',
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined }
  }
  ){
    this.x= position;
    console.log(this.x)
  }
}