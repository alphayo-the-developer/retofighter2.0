// import {
//   HITEffect,
//   FIREBOLTEffect,
//   DARKEffect,
//   WOODEffect,
//   ICEEffect,
//   WATEREffect
// } from './Effect.js'

var EffectController = class  {
  constructor(canvas) {
    this.canvas = canvas
    this.effects = []
    this.delay = 0
  }

  hit(player, name) {
    // console.log(player.actualPosition())
    // console.log(player)
    // this.effects.push(new Effect((player.position.x +
    //     player.positionOffset -
    //     player.width * player.scale)* -1,player.position.y,5))
    // this.effects.push(new Effect(100,100))
    // if(this.delay <=0){
    //     this.effects.push(new Effect(player.position.x + player.currentCropWidth-35,player.position.y+60,5))
    //     this.delay = 10ff 
    // }
    // this.delay--;

    switch (name) {
      case 'dark':
        this.effects.push(
          new HITEffect(
            player.EnemyactualPosition(),
            './img/effects/throws/Darkeffect.png','./img/blood1.png','./img/smokeExplosion.png','./img/smear.png','./img/effects/smear/smear2.png',6
          )
        )
        case 'ice':
        this.effects.push(
          new HITEffect(
            player.EnemyactualPosition(),
            './img/effects/throws/Icehit.png','./img/blood1.png','./img/smokeExplosion.png','./img/smear.png','./img/effects/smear/smear2.png',10
          )
        )
        break
      case 'water':
        this.effects.push(
          new HITEffect(
            player.EnemyactualPosition(),
            './img/effects/throws/WaterBallImpact.png','./img/blood1.png','./img/smokeExplosion.png','./img/smear.png','./img/effects/smear/smear2.png',4
          )
        )
        break
      case 'wood':
        this.effects.push(
          new HITEffect(
            player.EnemyactualPosition(),
            './img/effects/throws/WoodHit.png','./img/blood1.png','./img/smokeExplosion.png','./img/smear.png','./img/effects/smear/smear2.png',7
          )
        )
        break

      default:
        // this.effects.push(
        //   new HITEffect(
        //     player.EnemyactualPosition(),
        //     './img/effects/throws/Hit3.png','./img/blood1.png','./img/smokeExplosion.png','./img/smear.png','./img/effects/smear/smear2.png'
        //   )
        // )

        this.effects.push(
          new HITEffect(
            player.EnemyactualPosition(),'./img/effects/hits/impact.png'
          )
        )
        
        // this.effects.push(
        //   new HITEffect(
        //     player.EnemyactualPosition(),'./img/effects/throws/Hit3.png'
        //   )
        // )

        break
    }
  }
  firebolt(player) {
    this.effects.push(new FIREBOLTEffect(player.playerActualPosition()))
  }
  darkbolt(player) {
    this.effects.push(new DARKEffect(player.playerActualPosition()))
  }
  woodbolt(player) {
    this.effects.push(new WOODEffect(player.playerActualPosition()))
  }
  icebolt(player) {
    this.effects.push(new ICEEffect(player.playerActualPosition()))
  }
  waterbolt(player) {
    this.effects.push(new WATEREffect(player.playerActualPosition()))
  }
  draw(ctx) {
    this.effects.forEach((effect) => {
      if (this.kill(effect)) {
        let index = this.effects.indexOf(effect)
        this.effects.splice(index, 1)
      } else {
        console.log(effect)
        effect.update(ctx, this.canvas)
      }
      
    })
    //     console.log(this.effects[0])
    //    if(this.effects[0]) this.effects[0].draw(ctx);
  }
  update(ctx) {
    this.draw(ctx)
  }

  kill(effect) {
    console.log('kill')
    return effect.canDelete
  }
}
