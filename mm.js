window.init = function () {
  var num = 15

  var p1hitsText = document.querySelector('#p1hits')
  var p2hitsText = document.querySelector('#p2hits')

  const moveForwardBtn = document.querySelector('.moveforward')
  const moveBackBtn = document.querySelector('.movebackward')

  const slowAttackkBtn = document.querySelector('.slowattack')
  const fasttatackkBtn = document.querySelector('.fastattack')

  const jumpBtn = document.querySelector('.jump')

  window.canvas = document.querySelector('#maincanvas')
  const fullScreen = document.querySelector('.body')
  window.c = canvas.getContext('2d')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // window.c = setPixelDensitity(canvas)

  const fullScreenBtn = document.getElementById('gomenu')

  function toggleFullScreen() {
    console.log(document.fullscreenElement)
    if (!document.fullscreenElement) {
      fullScreen.requestFullscreen().catch((err) => {
        alert(err)
      })
    } else {
      document.exitFullscreen()
    }
  }

  fullScreenBtn.addEventListener('click', toggleFullScreen)

  function setPixelDensitity(canvas) {
    let pixelRatio = window.devicePixelRatio
    let sizeOnScreen = canvas.getBoundingClientRect()
    console.log(pixelRatio, sizeOnScreen)
    canvas.width = sizeOnScreen.width
    canvas.height = sizeOnScreen.height

    canvas.style.width = canvas.width + 'px'
    canvas.style.height = canvas.height + 'px'

    let context = canvas.getContext('2d')

    context.scale(pixelRatio, pixelRatio)

    return context
  }

  addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })

  // set joystick

  var stickEl = document.querySelector('#stick2')
  var touchEl = document.querySelector('#fightBtns')
  if (gamesettings.platform === 'mobile') {
    stickEl.style.display = 'block'
    touchEl.style.display = 'grid'
    var joystick1 = new JoystickController('stick1', 64, 8)
  }

  // c.fillRect(0, 0, canvas.width, canvas.height)

  // c.restore()
  const gravity = 0.7

  // no avatar2
  window.startP1 = 200
  window.startP2 = -100
  if (player2 === 'commander') {
    startP2 = 400
  }

  if (player2 === 'viking') {
    startP2 = 200
  }

  if (player1 === 'samuraiMack') {
    startP1 = -200
  }
  if (gamesettings.platform === 'desktop') {
    settings.players[player1].position.x = startP1
    settings.players[player2].position.x = startP2
    window.player = new Fighter(settings.players.Ryu, 'player')
    window.enemy = new Fighter(settings.players.dudley, 'enemy')
  } else {
    mobileSettings.players[player1].position.x = startP1
    mobileSettings.players[player2].position.x = startP2
    window.player = new Fighter(mobileSettings.players[player1])
    window.enemy = new Fighter(mobileSettings.players[player2])
  }

  if (gamesettings.platform === 'desktop') {
    var background = new Sprite(settings.backgrounds[back1])
  } else {
    var background = new Sprite(mobileSettings.backgrounds[back1])
  }

  // var background = new Sprite(settings.backgrounds[back1])

  var love = false

  window.canAnimate = true
  window.restart = false

  const domBody = document.querySelector('.body')

  var turn = true
  var turned = true
  var modalToggle = false
  window.decrese = true
  window.timing = 'startFight'
  var player1Hits = 0
  var player2Hits = 0
  window.xBound = false
  window.playerBound = false
  window.enemyState = 'seek'
  window.reduceTime = true
  window.canDetermineWinner = true
  window.leftBound = false

  function countHits() {
    if (player1Hits > 0) {
      p1hitsText.style.display = 'none'
    }
  }
  function drawHitbox(c, x, y, w, h, f = 'red', o = 0) {
    c.save()

    c.fillStyle = f
    c.globalAlpha = 0.5
    c.beginPath()
    c.fillRect(x + o, y, w, h)
    c.stroke()
    c.restore()
  }

  var dialoging = false
  window.fightintro = false

  const tl = gsap.timeline()

  function startSequence() {
    tl.to('.disthree', { opacity: 0, duration: 2, onComplete: displayThree })
    tl.to('.distwo', { opacity: 1, duration: 2, onStart: displayTwo }, 2)
    tl.to('.disone', { opacity: 1, duration: 2, onStart: displayOne }, 4)
    tl.to(
      '.disfight',
      { opacity: 1, duration: 2, onStart: displayFight, onComplete: kill },
      6
    )

    function displayThree() {
      let el = document.querySelector('.disthree')
      el.style.display = 'none'
    }

    function displayTwo() {
      let el = document.querySelector('.distwo')
      el.style.display = 'block'
    }

    function displayOne() {
      let el1 = document.querySelector('.distwo')
      el1.style.display = 'none'

      let el = document.querySelector('.disone')
      el.style.display = 'block'
    }

    function displayFight() {
      let el1 = document.querySelector('.disone')
      el1.style.display = 'none'

      let el = document.querySelector('.disfight')
      el.style.display = 'block'
    }

    function kill() {
      let el = document.querySelector('.disfight')
      el.style.display = 'none'

      timing = 'fight'

      if (decrese) {
        console.log(44)
        reduceTime = true
        decreaseTimer(canAnimate)
        decrese = false
      }
    }
  }
  var effectController = new EffectController(canvas)
  function animate() {
    // console.log(timing)

    if (canAnimate) window.requestAnimationFrame(animate)
    if (timing === 'dialog') {
      background.update()
      // turn enemy
      if (turn) {
        c.save()
        c.scale(-1, 1)
        // c.transform(-1, 1)
        enemy.update()
        c.restore()
        if (turned) enemy.position.x = enemy.position.x - 1386
        turned = false
      }

      // turned = false
      player.update()

      if (!dialoging) {
        dialoging = true
        setTimeout(() => {
          timing = 'startFight'
          // startDialog()
          // revealOneCharacter(characters)
        }, 5000)
      }
    }

    if (timing === 'startFight') {
      // introSound.play()
      background.update()
      // turn enemy
      // if (turn) {
      //   c.save()
      //   c.scale(-1, 1)
      //   // c.transform(-1, 1)
      //   // enemy.update()
      //   c.restore()
      //   // if (turned) enemy.position.x = enemy.position.x + 2686
      //   turned = false
      // }

      enemy.update()

      c.save()
      c.scale(-1, 1)
      player.update()
      c.restore()
      // player.position.x = player.position.x + 386

      // player.update()

      startSequence()
    }

    if (timing == 'fight') {
      if (stickEl.style.display !== 'block') {
        // stickEl.style.display = 'block'
      }
      // console.log(enemy.position.x)

      if (restart) {
        // animateStartFight()
        timing = 'startFight'
        player.restart('player')
        enemy.restart('enemy')
        // background.restart()
        restart = false
        timer = 60
      }
      background.update()
      // turn enemy
      // if (turn) {
      //   c.save()
      //   c.scale(-1, 1)
      //   enemy.update()
      //   c.restore()
      //   if (turned) enemy.position.x = enemy.position.x - 1386
      //   turned = false
      // }

      enemy.update()

      console.log(player.position)
      if (turn) {
        c.save()
        c.scale(-1, 1)
        player.update()
        c.restore()
        // if (turned) player.position.x = player.position.x + 1230
        turned = false
      }

      let x1 = player.position.x * -1 - 350
      let w1 = player.width * player.scale + 50
      let x2 = enemy.position.x

      // player hit boxes

      if (turn) {
        c.save()
        c.scale(-1, 1)
        drawHitbox(
          c,
          player.position.x - 350,
          player.position.y - player.height * enemy.scale * 0.5 + 50,
          player.width * player.scale + 50,
          player.height * enemy.scale - 70,
          'black',
          700
        )
        c.restore()
        // if (turned) player.position.x = player.position.x + 1230
        turned = false
      }

      // drawHitbox(c,player.position.x ,(player.position.y - ((player.height* enemy.scale)*.5))+50,(player.width*player.scale) + 50,(player.height* enemy.scale)-70,'black',700)
      drawHitbox(c, player.position.x - 350, 100, 400, 400)

      // enemy hit boxes
      drawHitbox(
        c,
        enemy.position.x,
        enemy.position.y - 100,
        enemy.width * enemy.scale + 40,
        enemy.height * enemy.scale - 100,
        'red',
        enemy.positionOffset
      )

      let b2 = player.position.x - 350;
      let c2 = player.width * player.scale + 50;
      let b3 = b2 * -1 - 860;

      console.log(`B3 ${b3}`)
      console.log(`C ${c2}`)
      console.log(`B+C ${b3 + c2}`)
      console.log(`enemy ${enemy.position.x - 100}`)

      // console.log(hitCollision(x1,w1,x2))
      console.log(hitCollision(b3, c2, enemy.position.x))
      // player.update()
      effectController.update(c)

      player.velocity.x = 0
      enemy.velocity.x = 0

      let playerneuralInput = [
        1 - (player.position.x + player.positionOffset + enemy.collisionOffset)
      ]
      let enemyneuralInput = [1 - enemy.position.x * -1 + enemy.positionOffset]

      // if (
      //   player.position.x +
      //     player.positionOffset -
      //     player.width * player.scale <=
      //   -100
      // ) {
      //   xBound = true
      // } else {
      //   xBound = false
      // }

      // if (
      //   player.position.x +
      //     player.positionOffset +
      //     enemy.collisionOffset +
      //     100 >
      //   enemy.position.x * -1 + enemy.positionOffset
      // ) {
      //   playerBound = true
      // } else {
      //   playerBound = false
      // }

      // if (
      //   (enemy.position.x + enemy.positionOffset - enemy.width * enemy.scale) *
      //     -1 <=
      //   canvas.width
      // ) {
      //   leftBound = true
      // }

      // player movement

      // mobile touch
      if (gamesettings.platform === 'mobile') {
        if (joystick1.value.y < -0.4) {
          player.velocity.y = -20
          canJump = false
        }
        if (joystick1.value.x < -0.25 && !xBound) {
          player.velocity.x = -5
          player.switchSprite('run')
        } else if (joystick1.value.x > 0.25 && !playerBound) {
          player.velocity.x = 5
          player.switchSprite('run')
        } else {
          player.switchSprite('idle')
        }
      }

      if (gamesettings.platform === 'desktop') {
        if (keys.a.pressed && player.lastKey === 'a' && !xBound) {
          player.velocity.x = 5
          player.switchSprite('run')
        } else if (keys.d.pressed && player.lastKey === 'd' && !playerBound) {
          player.velocity.x = -5
          player.switchSprite('run')
        } else if (keys.c.pressed && player.lastKey === 'c') {
          player.switchSprite('crouch')
        } else {
          player.switchSprite('idle')
        }
      }

      // crouch
      // if (keys.c.pressed && player.lastKey === 'c') {
      //     player.switchSprite('crouch')
      // }

      // jumping
      if (player.velocity.y < 0) {
        player.switchSprite('jump')
      } else if (player.velocity.y > 0) {
        player.switchSprite('fall')
      }

      // // Enemy movement

      if (!enemy.dead && timing == 'fight') {
        if (enemy.moveLeft && !playerBound) {
          enemy.velocity.x = 5
          enemy.switchSprite('run')
        } else if (enemy.moveRight && !leftBound) {
          enemy.velocity.x = -5
          enemy.switchSprite('run')
        } else {
          enemy.switchSprite('idle')
        }

        // ATTACK
        if (enemy.canAttack) {
          enemy.attack('attack1')
          // woosh1.play()
        }
        // jumping
        if (enemy.jump) {
          enemy.velocity.y = -20
        }
      }
      // jumping

      if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump')
      } else if (enemy.velocity.y > 0) {
        enemy.switchSprite('fall')
      }

      // detect for collision & enemy gets hit
      if (
        rectangularCollision2({
          rectangle1: player,
          rectangle2: enemy
        }) &&
        player.isAttacking &&
        player.framesCurrent === 2
      ) {
        // grunt2.play()
        enemy.takeHit()
        player.isAttacking = false
        console.log('enemy/wizard get hit')
        // effectController.hit(enemy)
        gsap.to('#enemyHealth', {
          width: enemy.health + '%'
        })
      }

      effectController.effects.forEach((effect) => {
        let name = effect.name
        if (
          throwrectangularCollision2({
            rectangle1: effect,
            rectangle2: enemy
          }) &&
          player.isAttacking
        ) {
          // grunt2.play()
          enemy.takeHit()
          player.isAttacking = false
          effectController.hit(enemy, name)
          gsap.to('#enemyHealth', {
            width: enemy.health + '%'
          })
          effect.canDelete = true
        }
      })

      //     // if player misses
      if (player.isAttacking && plplayer.framesCurrent === 4) {
        player.isAttacking = falseplayer
      }

      //  player   // player is where our player gets hit
      if (
        rectangularCollision1({
          rectangle1: enemy,
          rectangle2: player
        }) &&
        enemy.isAttacking &&
        enemy.framesCurrent === 2 &&
        !player.block
      ) {
        player.takeHit()
        // grunt1.play()
        enemy.isAttacking = false
        console.log('player/samurai get HIT')
        gsap.to('#playerHealth', {
          width: player.health + '%'
        })
      }

      // if player misses
      if (enemy.isAttacking && enemy.framesCurrent === 2) {
        enemy.isAttacking = false
      }

      // end game based on health
      if (enemy.health <= 0 || player.health <= 0) {
        koSound.play()
      }
      if (enemy.health <= 0 || player.health <= 0) {
        // koSound.play();
        enemy.canStep = false
        if (canDetermineWinner) determineWinner({ player, enemy, timerId })
        canDetermineWinner = false
      }
    }

    // console.log(canvas.width)
  }

  animate()

  //  mobile touch events

  // if (!enemy.dead) {
  //   // attack 1

  //   fasttatackkBtn.addEventListener('touchstart', () => {
  //     enemy.attack('attack1')
  //   })

  //   fasttatackkBtn.addEventListener('touchmove', () => {})

  //   fasttatackkBtn.addEventListener('touchend', () => {
  //     keys.arrowDown.pressed = false
  //   })

  //   // attack 2

  //   slowAttackkBtn.addEventListener('touchstart', () => {
  //     enemy.attack('attack2')
  //   })

  //   slowAttackkBtn.addEventListener('touchmove', () => {})

  //   slowAttackkBtn.addEventListener('touchend', () => {
  //     keys.u.pressed = false
  //   })

  //   // jump
  //   jumpBtn.addEventListener('touchstart', () => {
  //     enemy.velocity.y = -20
  //     console.log(enemy.velocity.y)
  //   })

  //   jumpBtn.addEventListener('touchmove', () => {})

  //   jumpBtn.addEventListener('touchend', () => {})
  // }

  // viking commander samuraiMack martial wizard

  window.throwEffect = function (char, player) {
    switch (char) {
      case 'viking':
        effectController.woodbolt(player)

        break
      case 'commander':
        effectController.firebolt(player)
        break
      case 'samuraiMack':
        effectController.icebolt(player)

        break
      case 'martial':
        // effectController.waterbolt(player);
        effectController.darkbolt(player)

        break
      case 'wizard':
        effectController.darkbolt(player)

        break
    }
  }
}

// attack 1

// attack1Btn.addEventListener('touchstart', function (e) {
//   if (!player.dead && timing == 'fight') {
//     grunt1.play()
//     woosh1.play()
//     player.attack('attack1')
//   }
// })

// attack1Btn.addEventListener('touchend', function (e) {
//   outputElement.innerText = 'Touch ends'
// })

// // attack 2

// attack2Btn.addEventListener('touchstart', function (e) {
//   outputElement.innerText = 'Touch begins'
// })

// attack2Btn.addEventListener('touchend', function (e) {
//   outputElement.innerText = 'Touch ends'
// })

// // attack 3

// attack3Btn.addEventListener('touchstart', function (e) {
//   outputElement.innerText = 'Touch begins'
// })

// attack3Btn.addEventListener('touchend', function (e) {
//   outputElement.innerText = 'Touch ends'
// })
