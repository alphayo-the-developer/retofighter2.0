var canPlay = false
window.player1 = "martial";
window.player2 = "wizard"


var gamesettings = {
  platform: 'desktop'
}

if(/Android|iPhone/i.test(navigator.userAgent)){
  gamesettings.platform = 'mobile'
}

const settings = {
  players: {
    samuraiMack: {
      position: {
        x: -500,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      offset: {
        x: 500,
        y: 440
      },
      imageSrc: './img/samuraiMack/Idle.png',
      framesMax: 10,
      scale: 2,
      offset: {
        x: -100,
        y: 160
      },
      sprites: {
        idle: {
          imageSrc: './img/samuraiMack/Idle.png',
          framesMax: 7
        },
        run: {
          imageSrc: './img/samuraiMack/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/samuraiMack/Jump.png',
          framesMax: 2
        },
        fall: {
          imageSrc: './img/samuraiMack/Fall.png',
          framesMax: 2
        },
        attack1: {
          imageSrc: './img/samuraiMack/Attack1.png',
          framesMax: 6
        },
        attack2: {
          imageSrc: './img/samuraiMack/Attack2.png',
          framesMax: 6
        },
        takeHit: {
          imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
          framesMax: 4
        },
        death: {
          imageSrc: './img/samuraiMack/Death.png',
          framesMax: 6
        }
      },
      attackBox: {
        offset: {
          x: 670,
          y: 50
        },
        width: 170,
        height: 50
      },
      positionOffset: 550,
      collisionOffset: 1150
    },
    Ryu: {
      position: {
        x: -550,
        y: 300
      },
      velocity: {
        x: 0,
        y: 0
      },
      
      imageSrc: './img/ryu/idle1.png',
      framesMax: 7,
      scale: 2.3,
      offset: {
        x: -100,
        y: 220
      },
      sprites: {
        idle: {
          imageSrc: './img/ryu/idle1.png',
          framesMax: 7,

        },
        moveF: {
          imageSrc: './img/ryu/walk1.png',
          framesMax: 11,

        },
        crouch: {
          imageSrc: './img/ryu/moveR.png',
          framesMax: 11,

        },
        run: {
          imageSrc: './img/ryu/air combo.png',
          framesMax: 25,
        
        },
        jump: {
          imageSrc: './img/ryu/jump.png',
          framesMax: 5,

        },
        fall: {
          imageSrc: './img/ryu/fall.png',
          framesMax: 6,
        },
        attack1: {
          imageSrc: './img/ryu/mp.png',
          framesMax: 5,

        },
        lowkick: {
          imageSrc: './img/ryu/low kick.png',
          framesMax: 7
        },
        attack2: {
          imageSrc: './img/samuraiMack/Attack2.png',
          framesMax: 6
        },
        takeHit: {
          imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
          framesMax: 4
        },
        death: {
          imageSrc: './img/samuraiMack/Death.png',
          framesMax: 6
        }
      },
      attackBox: {
        offset: {
          x: 670,
          y: 50
        },
        width: 170,
        height: 50
      },
      positionOffset: 700,
      collisionOffset: 1150
    },
    dudley: {
      position: {
        x: -200,
        y: 300
      },
      velocity: {
        x: 0,
        y: 0
      },
      offset: {
        x: 500,
        y: 0
      },
      imageSrc: './img/dudley/a.png',
      framesMax: 14,
      scale: 2.3,
      offset: {
        x: -600,
        y: 350
      },
      sprites: {
        idle: {
          imageSrc: './img/dudley/a.png',
          framesMax: 14,

        },
        moveF: {
          imageSrc: './img/dudley/block.png',
          framesMax: 9,

        },
        crouch: {
          imageSrc: './img/ryu/moveR.png',
          framesMax: 11,

        },
        run: {
          imageSrc: './img/ryu/air combo.png',
          framesMax: 25,
        
        },
        jump: {
          imageSrc: './img/dudley/jump.png',
          framesMax: 7,

        },
        fall: {
          imageSrc: './img/dudley/fall.png',
          framesMax: 7,
        },
        attack1: {
          imageSrc: './img/dudley/mhit.png',
          framesMax: 5,

        },
        lowkick: {
          imageSrc: './img/ryu/low kick.png',
          framesMax: 7
        },
        attack2: {
          imageSrc: './img/samuraiMack/Attack2.png',
          framesMax: 6
        },
        takeHit: {
          imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
          framesMax: 4
        },
        death: {
          imageSrc: './img/samuraiMack/Death.png',
          framesMax: 6
        }
      },
      attackBox: {
        offset: {
          x: 670,
          y: 50
        },
        width: 170,
        height: 50
      },
      positionOffset: 950,
      collisionOffset: 1150
    },
    kenji: {
      position: {
        x: 400,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: -10
      },
      imageSrc: './img/kenji/Idle.png',
      framesMax: 4,
      scale: 4.2,
      offset: {
        x: 0,
        y: 390
      },
      sprites: {
        idle: {
          imageSrc: './img/kenji/Idle.png',
          framesMax: 4
        },
        run: {
          imageSrc: './img/kenji/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/kenji/Jump.png',
          framesMax: 2
        },
        fall: {
          imageSrc: './img/kenji/Fall.png',
          framesMax: 2
        },
        attack1: {
          imageSrc: './img/kenji/Attack1.png',
          framesMax: 4
        },
        takeHit: {
          imageSrc: './img/kenji/Take hit.png',
          framesMax: 3
        },
        death: {
          imageSrc: './img/kenji/Death.png',
          framesMax: 7
        }
      },
      attackBox: {
        offset: {
          x: -170,
          y: 50
        },
        width: 170,
        height: 50
      }
    },
    wizard: {
      position: {
        x: 100,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: 0
      },
      imageSrc: './img/Wizard/Idle.png',
      framesMax: 6,
      scale: 2.8,
      offset: {
        x: 0,
        y: 250
      },
      sprites: {
        idle: {
          imageSrc: './img/Wizard/Idle.png',
          framesMax: 6
        },
        run: {
          imageSrc: './img/Wizard/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/Wizard/Jump.png',
          framesMax: 2
        },
        fall: {
          imageSrc: './img/Wizard/Fall.png',
          framesMax: 2
        },
        attack1: {
          imageSrc: './img/Wizard/Attack1.png',
          framesMax: 8
        },
        attack2: {
          imageSrc: './img/Wizard/Attack2.png',
          framesMax: 8
        },
        takeHit: {
          imageSrc: './img/Wizard/Hit.png',
          framesMax: 4
        },
        death: {
          imageSrc: './img/Wizard/Death.png',
          framesMax: 7
        }
      },
      attackBox: {
        offset: {
          x: 370,
          y: 50
        },
        width: 170,
        height: 50
      },
      bounds: {
        right:{
          p1: -200,
          p2:200
        },
        left:{
          p1: 200,
          p2:200
        }
        
      },
      positionOffset: 340,
      collisionOffset: 750,


      
    },
    wizard2: {
      position: {
        x: -300,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: 0
      },
      imageSrc: './img/Wizard/Idle.png',
      framesMax: 6,
      scale: 2.8,
      offset: {
        x: 00,
        y: 260
      },
      sprites: {
        idle: {
          imageSrc: './img/Wizard/Idle.png',
          framesMax: 6
        },
        run: {
          imageSrc: './img/Wizard/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/Wizard/Jump.png',
          framesMax: 2
        },
        fall: {
          imageSrc: './img/Wizard/Fall.png',
          framesMax: 2
        },
        attack1: {
          imageSrc: './img/Wizard/Attack1.png',
          framesMax: 8
        },
        attack2: {
          imageSrc: './img/Wizard/Attack2.png',
          framesMax: 8
        },
        takeHit: {
          imageSrc: './img/Wizard/Fall.png',
          framesMax: 3
        },
        death: {
          imageSrc: './img/Wizard/Death.png',
          framesMax: 7
        }
      },
      attackBox: {
        offset: {
          x: 350,
          y: 50
        },
        width: 170,
        height: 50
      }
    },
    viking: {
      position: {
        x: 400,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: 0
      },
      imageSrc: './img/viking/idle.png',
      framesMax: 6,
      scale: 4.8,
      offset: {
        x: 215,
        y: 315
      },
      sprites: {
        idle: {
          imageSrc: './img/viking/idle.png',
          framesMax: 6
        },
        run: {
          imageSrc: './img/viking/Run.png',
          framesMax: 6
        },
        jump: {
          imageSrc: './img/viking/Jump.png',
          framesMax: 5
        },
        fall: {
          imageSrc: './img/viking/Jump.png',
          framesMax: 5
        },
        attack1: {
          imageSrc: './img/viking/Attack_2.png',
          framesMax: 4
        },
        attack2: {
          imageSrc: './img/viking/Attack_2.png',
          framesMax: 4
        },
        takeHit: {
          imageSrc: './img/viking/Hurt.png',
          framesMax: 2
        },
        death: {
          imageSrc: './img/viking/Dead.png',
          framesMax: 4
        }
      },
      attackBox: {
        offset: {
          x: 70,
          y: 50
        },
        width: 170,
        height: 50
      },
      positionOffset: 70,
      collisionOffset: 200,
    },
    martial: {
      position: {
        x: 400,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: 0
      },
      imageSrc: './img/martial/Idle.png',
      framesMax: 10,
      scale: 5,
      offset: {
        x: 215,
        y: 260
      },
      sprites: {
        idle: {
          imageSrc: './img/martial/Idle.png',
          framesMax: 10
        },
        run: {
          imageSrc: './img/martial/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/martial/Going up.png',
          framesMax: 3
        },
        fall: {
          imageSrc: './img/martial/Going Down.png',
          framesMax: 3
        },
        attack1: {
          imageSrc: './img/martial/Attack1.png',
          framesMax: 7
        },
        attack2: {
          imageSrc: './img/martial/Attack2.png',
          framesMax: 6
        },
        takeHit: {
          imageSrc: './img/martial/Take Hit.png',
          framesMax: 3
        },
        death: {
          imageSrc: './img/martial/Death.png',
          framesMax: 11
        }
      },
      attackBox: {
        offset: {
          x: 200,
          y: 50
        },
        width: 170,
        height: 50
      },
      positionOffset: 170,
      collisionOffset: 400
    },
    commander: {
      position: {
        x: 400,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: 0
      },
      imageSrc: './img/commander/Idle.png',
      framesMax: 5,
      scale: 3,
      offset: {
        x: 215,
        y: 240
      },
      sprites: {
        idle: {
          imageSrc: './img/commander/Idle.png',
          framesMax: 5
        },
        run: {
          imageSrc: './img/commander/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/commander/Jump.png',
          framesMax: 7
        },
        fall: {
          imageSrc: './img/commander/Jump.png',
          framesMax: 7
        },
        attack1: {
          imageSrc: './img/commander/Attack_3.png',
          framesMax: 4
        },
        attack2: {
          imageSrc: './img/commander/Attack_2.png',
          framesMax: 5
        },
        takeHit: {
          imageSrc: './img/commander/Hurt.png',
          framesMax: 2
        },
        death: {
          imageSrc: './img/commander/Dead.png',
          framesMax: 6
        }
      },
      attackBox: {
        offset: {
          x: 70,
          y: 50
        },
        width: 170,
        height: 50
      },
      positionOffset: 0,
      collisionOffset: 50
    }
  },
  backgrounds: {
    forest: {
      position: {
        x: 0,
        y: 0
      },
      imageSrc: './img/background forest.png',
      scale: 1,
      offset: { x: 0, y: 0 }
    },
    creepy: {
      position: {
        x: 0,
        y: 0
      },
      imageSrc: './img/background.png',
      scale: 1.5,
      offset: { x: 0, y: 120 }
    },
    green: {
      position: {
        x: 0,
        y: 0
      },
      imageSrc: './img/background green.png',
      scale: 0.8,
      offset: { x: 0, y: 170 }
    },
    red: {
      position: {
        x: 0,
        y: 0
      },
      imageSrc: './img/background red.png',
      scale: 0.8,
      offset: { x: 0, y: 170 }
    }
  }
}

const mobileSettings = {
  players: {
    samuraiMack: {
      position: {
        x: -700,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      offset: {
        x: 500,
        y: 440
      },
      imageSrc: './img/samuraiMack/Idle.png',
      framesMax: 8,
      scale: 5,
      offset: {
        x: -100,
        y: 460
      },
      sprites: {
        idle: {
          imageSrc: './img/samuraiMack/Idle.png',
          framesMax: 8
        },
        run: {
          imageSrc: './img/samuraiMack/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/samuraiMack/Jump.png',
          framesMax: 2
        },
        fall: {
          imageSrc: './img/samuraiMack/Fall.png',
          framesMax: 2
        },
        attack1: {
          imageSrc: './img/samuraiMack/Attack1.png',
          framesMax: 6
        },
        takeHit: {
          imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
          framesMax: 4
        },
        death: {
          imageSrc: './img/samuraiMack/Death.png',
          framesMax: 6
        }
      },
      attackBox: {
        offset: {
          x: 100,
          y: 50
        },
        width: 160,
        height: 50
      }
    },
    kenji: {
      position: {
        x: 400,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: -10
      },
      imageSrc: './img/kenji/Idle.png',
      framesMax: 4,
      scale: 4.2,
      offset: {
        x: 215,
        y: 390
      },
      sprites: {
        idle: {
          imageSrc: './img/kenji/Idle.png',
          framesMax: 4
        },
        run: {
          imageSrc: './img/kenji/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/kenji/Jump.png',
          framesMax: 2
        },
        fall: {
          imageSrc: './img/kenji/Fall.png',
          framesMax: 2
        },
        attack1: {
          imageSrc: './img/kenji/Attack1.png',
          framesMax: 4
        },
        takeHit: {
          imageSrc: './img/kenji/Take hit.png',
          framesMax: 3
        },
        death: {
          imageSrc: './img/kenji/Death.png',
          framesMax: 7
        }
      },
      attackBox: {
        offset: {
          x: -170,
          y: 50
        },
        width: 170,
        height: 50
      }
    },
    wizard: {
      position: {
        x: 400,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: 0
      },
      imageSrc: './img/Wizard/Idle.png',
      framesMax: 6,
      scale: 2.8,
      offset: {
        x: 500,
        y: 250
      },
      sprites: {
        idle: {
          imageSrc: './img/Wizard/Idle.png',
          framesMax: 6
        },
        run: {
          imageSrc: './img/Wizard/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/Wizard/Jump.png',
          framesMax: 2
        },
        fall: {
          imageSrc: './img/Wizard/Fall.png',
          framesMax: 2
        },
        attack1: {
          imageSrc: './img/Wizard/Attack2.png',
          framesMax: 8
        },
        takeHit: {
          imageSrc: './img/Wizard/Take hit.png',
          framesMax: 3
        },
        death: {
          imageSrc: './img/Wizard/Death.png',
          framesMax: 7
        }
      },
      attackBox: {
        offset: {
          x: -170,
          y: 50
        },
        width: 170,
        height: 50
      }
    },
    wizard2: {
      position: {
        x: -800,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: 0
      },
      imageSrc: './img/Wizard/Idle.png',
      framesMax: 6,
      scale: 2,
      offset: {
        x: -100,
        y: 420
      },
      sprites: {
        idle: {
          imageSrc: './img/Wizard/Idle.png',
          framesMax: 6
        },
        run: {
          imageSrc: './img/Wizard/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/Wizard/Jump.png',
          framesMax: 2
        },
        fall: {
          imageSrc: './img/Wizard/Fall.png',
          framesMax: 2
        },
        attack1: {
          imageSrc: './img/Wizard/Attack2.png',
          framesMax: 8
        },
        takeHit: {
          imageSrc: './img/Wizard/Fall.png',
          framesMax: 3
        },
        death: {
          imageSrc: './img/Wizard/Death.png',
          framesMax: 7
        }
      },
      attackBox: {
        offset: {
          x: -170,
          y: 50
        },
        width: 170,
        height: 50
      }
    },
    viking: {
      position: {
        x: 400,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: 0
      },
      imageSrc: './img/viking/idle.png',
      framesMax: 6,
      scale: 4.8,
      offset: {
        x: 215,
        y: 315
      },
      sprites: {
        idle: {
          imageSrc: './img/viking/idle.png',
          framesMax: 6
        },
        run: {
          imageSrc: './img/viking/Run.png',
          framesMax: 6
        },
        jump: {
          imageSrc: './img/viking/Jump.png',
          framesMax: 5
        },
        fall: {
          imageSrc: './img/viking/Jump.png',
          framesMax: 5
        },
        attack1: {
          imageSrc: './img/viking/Attack_2.png',
          framesMax: 4
        },
        takeHit: {
          imageSrc: './img/viking/Hurt.png',
          framesMax: 2
        },
        death: {
          imageSrc: './img/viking/Dead.png',
          framesMax: 4
        }
      },
      attackBox: {
        offset: {
          x: -170,
          y: 50
        },
        width: 170,
        height: 50
      }
    },
    martial: {
      position: {
        x: -800,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -100,
        y: 400
      },
      imageSrc: './img/martial/Idle.png',
      framesMax: 10,
      scale: 3.5,
      offset: {
        x: 215,
        y: 420
      },
      sprites: {
        idle: {
          imageSrc: './img/martial/Idle.png',
          framesMax: 10
        },
        run: {
          imageSrc: './img/martial/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/martial/Going up.png',
          framesMax: 3
        },
        fall: {
          imageSrc: './img/martial/Going Down.png',
          framesMax: 3
        },
        attack1: {
          imageSrc: './img/martial/Attack1.png',
          framesMax: 7
        },
        takeHit: {
          imageSrc: './img/martial/Take Hit.png',
          framesMax: 3
        },
        death: {
          imageSrc: './img/martial/Death.png',
          framesMax: 11
        }
      },
      attackBox: {
        offset: {
          x: 170,
          y: 50
        },
        width: 170,
        height: 50
      }
    },
    commander: {
      position: {
        x: 400,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'blue',
      offset: {
        x: -50,
        y: 0
      },
      imageSrc: './img/commander/Idle.png',
      framesMax: 5,
      scale: 3,
      offset: {
        x: 215,
        y: 470
      },
      sprites: {
        idle: {
          imageSrc: './img/commander/Idle.png',
          framesMax: 5
        },
        run: {
          imageSrc: './img/commander/Run.png',
          framesMax: 8
        },
        jump: {
          imageSrc: './img/commander/Jump.png',
          framesMax: 7
        },
        fall: {
          imageSrc: './img/commander/Jump.png',
          framesMax: 7
        },
        attack1: {
          imageSrc: './img/commander/Attack_3.png',
          framesMax: 4
        },
        takeHit: {
          imageSrc: './img/commander/Hurt.png',
          framesMax: 2
        },
        death: {
          imageSrc: './img/commander/Dead.png',
          framesMax: 6
        }
      },
      attackBox: {
        offset: {
          x: 170,
          y: 50
        },
        width: 170,
        height: 50
      }
    }
  },
  backgrounds: {
    forest: {
      position: {
        x: 0,
        y: 0
      },
      imageSrc: './img/background forest.png',
      scale: 0.6,
      offset: { x: 0, y: 270 }
    },
    creepy: {
      position: {
        x: 0,
        y: 0
      },
      imageSrc: './img/background.png',
      scale: 1.2,
      offset: { x: 0, y: 250 }
    },
    green: {
      position: {
        x: 0,
        y: 0
      },
      imageSrc: './img/background green.png',
      scale: 0.65,
      offset: { x: 0, y: 170 }
    },
    red: {
      position: {
        x: 0,
        y: 0
      },
      imageSrc: './img/background red.png',
      scale: 0.65,
      offset: { x: 0, y: 300 }
    }
  }
}

// desktop character settings


// if (gamesettings.platform === 'desktop') {

//   switch (player1) {
//     case 'samuraiMack':
//       var avatar1 = settings.players.samuraiMack
  
//       break
  
//     case 'kenji':
//       var avatar1 = settings.players.kenji
  
//       break
//     case 'wizard':
//       var avatar1 = settings.players.wizard
  
//       break
//     case 'martial':
//       var avatar1 = settings.players.martial
  
//       break
//     case 'commander':
//       var avatar1 = settings.players.commander
  
//       break
//     case 'viking':
//       var avatar1 = settings.players.viking
  
//       break
//       case 'wizard2':
//       var avatar1 = settings.players.wizard2
  
//       break
//     default:
//       break
//   }
  
//   switch (player2) {
//     case 'samuraiMack':
//       var avatar12 = settings.players.samuraiMack
  
//       break
  
//     case 'kenji':
//       var avatar2 = settings.players.kenji
  
//       break
//     case 'wizard':
//       var avatar2 = settings.players.wizard
  
//       break
//     case 'martial':
//       var avatar2 = settings.players.martial
  
//       break
//     case 'commander':
//       var avatar2 = settings.players.commander
  
//       break
//     case 'viking':
//       var avatar2 = settings.players.viking
  
//       break
//       case 'wizard2':
//       var avatar2 = settings.players.wizard2
  
//       break
//     default:
//       break
//   }

// }




// mobile character settings
// if (gamesettings.platform === 'mobile') {

  
// switch (player1) {
//   case 'samuraiMack':
//     var avatar1 = mobileSettings.players.samuraiMack

//     break

//   case 'kenji':
//     var avatar1 = mobileSettings.players.kenji

//     break
//   case 'wizard':
//     var avatar1 = mobileSettings.players.wizard

//     break
//   case 'martial':
//     var avatar1 = mobileSettings.players.martial

//     break
//   case 'commander':
//     var avatar1 = mobileSettings.players.commander

//     break
//   case 'viking':
//     var avatar1 = mobileSettings.players.viking

//     break
//     case 'wizard2':
//     var avatar1 = mobileSettings.players.wizard2

//     break
//   default:
//     break
// }

// switch (player2) {
//   case 'samuraiMack':
//     var avatar12 = mobileSettings.players.samuraiMack

//     break

//   case 'kenji':
//     var avatar2 = mobileSettings.players.kenji

//     break
//   case 'wizard':
//     var avatar2 = mobileSettings.players.wizard

//     break
//   case 'martial':
//     var avatar2 = mobileSettings.players.martial

//     break
//   case 'commander':
//     var avatar2 = mobileSettings.players.commander

//     break
//   case 'viking':
//     var avatar2 = mobileSettings.players.viking

//     break
//     case 'wizard2':
//     var avatar2 = mobileSettings.players.wizard2

//     break
//   default:
//     break
// }
// }



var back1 = 'forest'

// desktop background setting

if (gamesettings.platform === 'desktop') {
  // if (back1 == 'forest') {
  //   var background1 = settings.backgrounds.forest
  // } else if (back1 == 'creepy') {
  //   var background1 = settings.backgrounds.creepy
  //   var shop = new Sprite({
  //     position: {
  //       x: 600,
  //       y: 128
  //     },
  //     imageSrc: './img/shop.png',
  //     scale: 2.75,
  //     framesMax: 6,
  //     offset: { x: -400, y: -120 }
  //   })
  // } else if (back1 == 'red') {
  //   var background1 = settings.backgrounds.red
  // } else if (back1 == 'green') {
  //   var background1 = settings.backgrounds.green
  // }

  switch (back1) {
    case 'forest':
      var background1 = settings.backgrounds.forest
      break;

      case 'crepy':
      var background1 = settings.backgrounds.creepy
      break;

      case 'red':
      var background1 = settings.backgrounds.red
      break;

      case 'green':
      var background1 = settings.backgrounds.green
      break;
  
    default:
      break;
  }
}

//  mobile background settings

if (gamesettings.platform === 'mobile') {
  if (back1 == 'forest') {
    background1 = mobileSettings.backgrounds.forest
  } else if (back1 == 'creepy') {
    background1 = mobileSettings.backgrounds.creepy
    var shop = new Sprite({
      position: {
        x: 600,
        y: 128
      },
      imageSrc: './img/shop.png',
      scale: 2.75,
      framesMax: 6,
      offset: { x: -400, y: -120 }
    })
  } else if (back1 == 'red') {
    background1 = mobileSettings.backgrounds.red
  } else if (back1 == 'green') {
    background1 = mobileSettings.backgrounds.green
  }
}
