import { FAILURE } from '../constants.js'
import Decorator from '../Decorator.js'

export default class CooldownDecorator extends Decorator {
  nodeType = 'CooldownDecorator'

  setConfig({ cooldown = 5 }) {
    this.config = {
      cooldown
    }
  }

  decorate(run) {
    if (this.lock) {
      return FAILURE
    }
    this.lock = true
    setTimeout(() => {
      this.lock = false
    }, this.config.cooldown * 1000)
    return run()
  }
}
