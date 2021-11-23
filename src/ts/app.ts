import Model from './modules/model'

// let a = 0 // ESLint 'prefer-const': 'error', 確認用

class ViewController {
  private model: Model
  private $element: HTMLInputElement
  private $decrement: HTMLButtonElement | null
  private $increment: HTMLButtonElement | null

  constructor() {
    this.model = new Model()
    this.$element = <HTMLInputElement>document.getElementById('app')
    this.$decrement = null
    this.$increment = null
  }

  mount() {
    this.render()
    window.addEventListener('count/decrement', () => this.onMessage())
    window.addEventListener('count/increment', () => this.onMessage())
  }

  render() {
    this.$element.innerHTML = `
      <button id="decrement_button">decrement</button>
      <span>${this.model.count}</span>
      <button id="increment_button">increment</button>
    `
    this.$decrement = <HTMLButtonElement>(
      document.getElementById('decrement_button')
    )
    this.$decrement.addEventListener('click', () => {
      this.decrement()
    })
    this.$increment = <HTMLButtonElement>(
      document.getElementById('increment_button')
    )
    this.$increment.addEventListener('click', () => {
      this.increment()
    })
  }

  decrement() {
    this.model.decrement()
  }

  increment() {
    this.model.increment()
  }

  onMessage() {
    this.render()
  }
}

const view = new ViewController()
view.mount()
