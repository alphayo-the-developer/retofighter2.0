var Sprite = class {
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
    this.framesHold = 1
    this.offset = offset
    this.startpositionX = this.position.x
    this.startpositionY = this.position.y
    this.gravity = 0.7
  }

  draw() {
    // console.log(this.image.height)
    c.drawImage(
      this.image,
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
    console.log(startP1, startP2)
    this.health = 100
    // this.image = this.sprites.idle.image
    // this.framesMax = this.sprites.idle.framesMax
    // this.framesCurrent = 0
    this.canStep = true
    this.dead = false
    gsap.to('#enemyHealth', {
      width: this.health + '%'
    })
    gsap.to('#playerHealth', {
      width: this.health + '%'
    })
    if (name == 'player') {
      this.position.x = startP1
    } else {
      if (player2 === 'commander') {
        this.position.x = startP2 * -1 - 700
      } else if (player2 === 'viking') {
        this.position.x = startP2 * -1 - 1000
      } else {
        this.position.x = startP2 * -1 - 1500
      }
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

  update() {
    this.draw()
    this.animateFrames()
  }
}

var Fighter = class extends Sprite {
  constructor(
    {
      position,
      velocity,
      color = 'red',
      imageSrc,
      scale = 1,
      framesMax = 1,
      offset = { x: 0, y: 0 },
      sprites,
      attackBox = { offset: {}, width: undefined, height: undefined },
      bounds,
      positionOffset,
      collisionOffset
    },
    type
  ) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset
    })

    this.type = type
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
    this.health = 100
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.sprites = sprites

    this.dead = false
    this.bounds = bounds
    this.collisionOffset = collisionOffset
    this.positionOffset = positionOffset
    this.brain = new NeuralNetwork([2, 6, 4])
    this.moveLeft = 0
    this.moveRight = 0
    this.jump = 0
    this.canAttack = 0
    this.block = false
    this.enemy
    this.canStep = true
    this.count = 0
    this.states = ['seek', 'attack', 'stepback', 'stepforward', 'jump']
    this.state = 'jump'
    this.playerStates = []
    this.currentPlayerState = this.playerStates[0]

    // if (this.type === 'player') this.currentPlayerState.enter();

    this.EnemyactualPosition = function () {
      return {
        x: (this.position.x + this.positionOffset) * -1,
        y: this.position.y
      }
    }
    this.playerActualPosition = function () {
      return { x: this.position.x + this.positionOffset, y: this.position.y }
    }
    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image()
      sprites[sprite].image.src = sprites[sprite].imageSrc
    }

    if (this.type === 'enemy') this.enemy = this
    BehaviorTree.register(
      'seek',
      new Task({
        run: function (enemy) {
          enemy.moveLeft = 1
          // enemy.velocity.x = 5
          // enemy.switchSprite('run')

          console.log(555)

          return FAILURE
        },
        end: function (enemy) {
          // enemy.moveLeft = 0;
        }
      })
    )

    BehaviorTree.register(
      'stepforward',
      new Task({
        run: function (enemy) {
          enemy.moveLeft = 1
        },
        end: function (enemy) {
          let can = true
          if (can) {
            setTimeout(() => {
              enemy.moveLeft = 0
            }, 500)
          }
          // can =false
          return SUCCESS
        }
      })
    )

    BehaviorTree.register(
      'stepback',
      new Task({
        run: function (enemy) {
          enemy.moveRight = 1
        },
        end: function (enemy) {
          let can = true
          if (can) {
            setTimeout(() => {
              enemy.moveRight = 0
            }, 500)
          }
          // can =false
          return SUCCESS
        }
      })
    )

    BehaviorTree.register(
      'attack',
      new Task({
        run: function (enemy) {
          enemy.attack('attack1')
          return SUCCESS
        }
      })
    )

    BehaviorTree.register(
      'jump',
      new Task({
        run: function (enemy) {
          enemy.jump = 1
        },
        end: function (enemy) {
          let can = true
          if (can) {
            setTimeout(() => {
              enemy.jump = 0
            }, 50)
          }
          // can =false
          return SUCCESS
        }
      })
    )

    const seekSequence = new Sequence({
      nodes: [
        'seek'
        // new Task({
        //   run: function (enemy) {
        //     // enemy.moveRight = 1
        //     enemy.velocity.x = 5
        //     enemy.switchSprite('run')

        //     return SUCCESS
        //   }
        // }),
        // 'seek',
        // new Task({
        //   run: function (enemy) {
        //     // enemy.canAttack = 1
        //     enemy.attack('attack1')
        //     return FAILURE
        //   }
        // })
      ]
    })

    const stepForwardSequence = new Sequence({
      nodes: ['stepforward']
    })

    const stepBackSequence = new Sequence({
      nodes: ['stepback']
    })

    const jumpSequence = new Sequence({
      nodes: ['jump']
    })
    const attackSequence = new Sequence({
      nodes: ['attack']
    })

    const mySelector = new Selector({
      nodes: [
        // here comes in a list of nodes (Tasks, Sequences or Priorities)
        // as objects or as registered strings
        new Task({
          run: function (enemy) {
            // enemy.moveRight = 1
            // enemy.velocity.x = 5
            // enemy.switchSprite('run')
            console.log(44444444444)
            return FAILURE
          }
        })
      ]
    })

    this.seekTree = new BehaviorTree({
      tree: seekSequence,
      blackboard: this.enemy
    })

    this.stepForwardTree = new BehaviorTree({
      tree: stepForwardSequence,
      blackboard: this.enemy
    })

    this.stepBackTree = new BehaviorTree({
      tree: stepBackSequence,
      blackboard: this.enemy
    })

    this.attackTree = new BehaviorTree({
      tree: attackSequence,
      blackboard: this.enemy
    })
    this.jumpTree = new BehaviorTree({
      tree: jumpSequence,
      blackboard: this.enemy
    })
    let i = 1
    setInterval(() => {
      // for (let index = 0; index < this.states.length; index++) {
      //   const element = this.states[index];

      // }
      this.state = this.states[i]
      if (i < this.states.length - 1) {
        i++
      } else {
        i = 0
      }
    }, 500)
    setInterval(() => {
      this.states.reverse()
    }, 2000)
  }
  stateSwitch(state) {
    switch (state) {
      case 'stepforward':
        this.state = 'stepforward'
        break
      case 'stepback':
        this.state = 'stepback'
        break
      case 'jump':
        this.state = 'jump'
        break
      case 'attack':
        this.state = 'attack'
        break

      default:
        break
    }
  }
  update(can2, state, turned) {
    let enemy
    if (this.type === 'enemy') enemy = this

    if (enemy && timing == 'fight' && this.canStep && state === 'seek') {
      this.seekTree.step()
    }

    if (
      enemy &&
      timing == 'fight' &&
      this.canStep &&
      this.state === 'stepforward'
    ) {
      if (this.count == 2) {
        this.stepForwardTree.step()
      }

      this.count++
      if (this.count == 3) {
        this.count = 0
        this.state = 'idle'
      }
      // this.canStep = false;
    }

    if (
      enemy &&
      timing == 'fight' &&
      this.canStep &&
      this.state === 'stepback'
    ) {
      if (this.count == 2) {
        this.stepBackTree.step()
      }

      this.count++
      if (this.count == 3) {
        this.count = 0
        this.state = 'idle'
      }
      console.log(this.count)
      // this.canStep = false;
    }

    if (enemy && timing == 'fight' && this.canStep && this.state === 'attack') {
      if (this.count == 2) {
        this.attackTree.step()
      }

      this.count++
      if (this.count == 3) {
        this.count = 0
        this.state = 'idle'
      }
      // this.canStep = false;
    }

    if (enemy && timing == 'fight' && this.canStep && this.state === 'jump') {
      if (this.count == 2) {
        this.jumpTree.step()
      }

      this.count++
      if (this.count == 3) {
        this.count = 0
        this.state = 'idle'
      }
      // this.canStep = false;
    }
    // console.log(this.bTree)

    //   if (this.color == state && turned == true) {
    //     console.log(state)
    //     this.position.x = -(this.position.x)
    //  }else {
    //     this.position.x = this.position.x

    //   }
    // if (this.color == state)console.log(`player: ${this.position.x}`)
    // if (this.color != state)console.log(`enemy: ${this.position.x}`)
    // this.position.x = -(thisposition.x)

    // if (this.color == 'red')
    //   console.log(`player/samuraimack: ${this.position.x}`)
    // if (this.color == 'blue') console.log(`enemy/wizard: ${this.position.x}`)
    // if (this.color == "blue")console.log(`enemy/wizard/size: ${this.image.width}`)

    // if (this.color == "blue")this.position.x = this.position.x + 500
    this.draw(can2)
    if (!this.dead) this.animateFrames()

    // attack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y

    // draw the attack box

    //     // c.fillStyle = 'green'
    //     // c.beginPath()
    //     // c.fillRect(
    //     //   this.attackBox.position.x,
    //     //   this.attackBox.position.y,
    //     //   this.attackBox.width,
    //     //   this.attackBox.height
    //     // )
    //     // c.stroke()
    // -
    // draw the character box
    // if (player) {
    //   console.log(this.position.x)
    //   c.fillStyle = 'red'
    //   c.beginPath()
    //   c.fillRect(
    //     this.position.x + this.positionOffset,
    //     this.position.y,
    //     this.width,
    //     this.height
    //   )
    //   c.stroke()
    // }
    
    // c.fillStyle = 'red'
    // c.beginPath()
    // c.fillRect(
    //   this.position.x + this.positionOffset,
    //   this.position.y,
    //   this.width,
    //   this.height
    // )
    // c.stroke()

    // c.fillStyle = 'black'
    // c.beginPath()
    // c.fillRect(
    //   this.position.x,
    //   this.position.y,
    //   this.width,
    //   this.height
    // )
    // c.stroke()

    // c.fillStyle = 'purple'
    // c.beginPath()
    // c.fillRect(
    //   this.position.x + this.positionOffset - (this.width* this.scale),
    //   this.position.y,
    //   this.width,
    //   this.height
    // )
    // c.stroke()

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // gravity function
    if (this.position.y + this.height + this.velocity.y >= canvas.height - 80) {
      this.velocity.y = 0
    } else {
      this.velocity.y += this.gravity
    }
    // console.log(this.position.y)
  }

  attack(attackType) {
    this.switchSprite(attackType)
    this.isAttacking = true
  }

  takeHit() {
    if (!xBound) this.position.x = this.position.x - 50
    this.health -= 10

    if (this.health <= 0) {
      this.switchSprite('death')
    } else this.switchSprite('takeHit')
  }

  switchSprite(sprite, ifRestart = false) {
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

    // if (
    //   this.image === this.sprites.attack2.image &&
    //   this.framesCurrent < this.sprites.attack2.framesMax - 1
    // )
    //   return

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

          if (this.sprites.idle.scale) {
            this.scale = this.sprites.idle.scale
          }
        }
        break
      case 'run':
        if (this.sprites.moveF) {
          if (this.image !== this.sprites.moveF.image) {
            this.image = this.sprites.moveF.image
            this.framesMax = this.sprites.moveF.framesMax
            this.framesCurrent = 0
            if (this.sprites.moveF.scale) {
              this.scale = this.sprites.moveF.scale
            }
          }
        }
        break
      case 'crouch':
        if (this.sprites.moveF) {
          if (this.image !== this.sprites.moveF.image) {
            this.image = this.sprites.moveF.image
            this.framesMax = this.sprites.moveF.framesMax
            this.framesCurrent = 0

            if (this.sprites.moveF.scale) {
              this.scale = this.sprites.moveF.scale
            }
          }

          // if (this.image !== this.sprites.fall.image) {
          //   this.image = this.sprites.fall.image
          //   this.framesMax = this.sprites.fall.framesMax
          //   this.framesCurrent = 0
          // }
        }

        break
      case 'jump':
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image
          this.framesMax = this.sprites.jump.framesMax
          this.framesCurrent = 0

          if (this.sprites.jump.scale) {
            this.scale = this.sprites.jump.scale
          }
        }
        break

      case 'fall':
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image
          this.framesMax = this.sprites.fall.framesMax
          this.framesCurrent = 0

          if (this.sprites.fall.scale) {
            this.scale = this.sprites.fall.scale
          }
        }
        break

      case 'attack1':
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image
          this.framesMax = this.sprites.attack1.framesMax
          this.framesCurrent = 0

          if (this.sprites.attack1.scale) {
            this.scale = this.sprites.attack1.scale
          }
        }
        break
      case 'attack2':
        if (this.image !== this.sprites.attack2.image) {
          this.image = this.sprites.attack2.image
          this.framesMax = this.sprites.attack2.framesMax
          this.framesCurrent = 0
        }

      case 'attack3':
        if (this.image !== this.sprites.attack2.image) {
          this.image = this.sprites.attack2.image
          this.framesMax = this.sprites.attack2.framesMax
          this.framesCurrent = 0
        }

        break

      case 'lowkick':
        console.log(this.sprites.lowkick)
        if (this.image !== this.sprites.lowkick.image) {
          this.image = this.sprites.lowkick.image
          this.framesMax = this.sprites.lowkick.framesMax
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

  setState(state) {
    this.currentPlayerState = this.playerStates[state]
    this.currentPlayerState.enter()
  }
}

var AudioManager = class {
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
    // if (this.source.currentTime > this.times.end) {
    //   this.pause()
    // }
  }
}
