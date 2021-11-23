class Model {
  public count: number
  constructor() {
    this.count = 0
  }

  increment() {
    this.count++
    this.incrementTrigger()
  }

  decrement() {
    this.count--
    this.decrementTrigger()
  }

  incrementTrigger() {
    const event = new CustomEvent('count/increment', { detail: this.count })
    dispatchEvent(event)
  }

  decrementTrigger() {
    const event = new CustomEvent('count/decrement', { detail: this.count })
    dispatchEvent(event)
  }
}

export default Model
