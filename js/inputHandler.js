window.keys = {
  a: {
    pressed: false
  },
  c: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  arrowDown: {
    pressed: false
  },
  u: {
    pressed: false
  },
  w: {
    pressed: false
  },
  space: {
    pressed: false
  },
  v: {
    pressed: false
  },
  b: {
    pressed: false
  }
}

// Keyboard Inputs

window.addEventListener('keydown', (event) => {
  if (!player.dead && timing == 'fight') {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      case 'c':
        keys.c.pressed = true
        player.lastKey = 'c'
        break
      case 'w':
        player.velocity.y = -20
        break
      case ' ':
        // grunt1.play()
        // woosh1.play()
        player.attack('attack1')
        break
      case 'b':
        player.block = true
        // player.switchSprite()
        break
      case 'v':
        // woosh1.play()
        grunt2.play()
        // player.attack('attack2')
        //  effectController.firebolt(player)

        throwEffect(player1, player)
        player.attack('attack3')

        break
    }
  }
  if (!enemy.dead && timing == 'fight') {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        enemy.attack('attack1')
        // woosh1.play()
        break
      case 'u':
        enemy.attack('attack2')
        // woosh1.play()
        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 'c':
        keys.c.pressed = false
        break  
    case 'b':
      player.block = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
    case 'ArrowDown':
      keys.arrowDown.pressed = false
      break
    case 'u':
      keys.u.pressed = false
      break
  }
})

// Mobile Inputs

const attack1Btn = document.getElementById('touch1')
const attack2Btn = document.getElementById('touch2')
const attack3Btn = document.getElementById('touch3')
const blockBtn = document.getElementById('touch4')

attack1Btn.addEventListener('touchstart', function (e) {
  if (!player.dead && timing == 'fight') {
    // grunt1.play()
    // woosh1.play()
    player.attack('attack1')
  }
})

attack2Btn.addEventListener('touchstart', function (e) {
  if (!player.dead && timing == 'fight') {
    player.attack('attack2')
  }
})

attack3Btn.addEventListener('touchstart', function (e) {
  if (!player.dead && timing == 'fight') {
    throwEffect(player1, player)
    player.attack('attack3')
  }
})

blockBtn.addEventListener('touchstart', function (e) {
  if (!player.dead && timing == 'fight') {
    player.block = true
    // player.switchSprite
  }
})
