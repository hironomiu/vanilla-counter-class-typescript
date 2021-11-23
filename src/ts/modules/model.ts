class Model {
  public count: number
  public input: number

  constructor() {
    this.count = 0
    this.input = 0
  }

  increment() {
    this.count++
    this.incrementTrigger()
  }

  decrement() {
    this.count--
    this.decrementTrigger()
  }

  inputDecrement() {
    this.count -= this.input
    this.inputDecrementTrigger()
  }

  inputIncrement() {
    this.count += this.input
    this.inputIncrementTrigger()
  }
  incrementTrigger() {
    const event = new CustomEvent('count/increment', { detail: this.count })
    dispatchEvent(event)
  }

  decrementTrigger() {
    const event = new CustomEvent('count/decrement', { detail: this.count })
    dispatchEvent(event)
  }

  inputDecrementTrigger() {
    const event = new CustomEvent('count/input_decrement', {
      detail: { count: this.count, input: this.input },
    })
    dispatchEvent(event)
  }

  inputIncrementTrigger() {
    const event = new CustomEvent('count/input_increment', {
      detail: { count: this.count, input: this.input },
    })
    dispatchEvent(event)
  }
}

export default Model
