import Model from './modules/model'
import '../scss/style.scss'
// let a = 0 // ESLint 'prefer-const': 'error', 確認用

class ViewController {
  private model: Model
  private $element: HTMLInputElement
  private $decrement: HTMLButtonElement | null
  private $increment: HTMLButtonElement | null
  private $inputIncrement: HTMLButtonElement | null
  private $inputDecrement: HTMLButtonElement | null
  private $input: HTMLInputElement | null

  constructor() {
    this.model = new Model()
    this.$element = <HTMLInputElement>document.getElementById('app')
    this.$decrement = null
    this.$increment = null
    this.$inputIncrement = null
    this.$inputDecrement = null
    this.$input = null
  }

  mount() {
    this.render()
    window.addEventListener('count/decrement', () => this.onMessage())
    window.addEventListener('count/increment', () => this.onMessage())
    window.addEventListener('count/input_decrement', () => this.onMessage())
    window.addEventListener('count/input_increment', () => this.onMessage())
  }

  render() {
    this.$element.innerHTML = `
    <div class="div1">
        <h1>Vanilla Class Counter App</h1>
      </div>
    <div class="div1">
      <button "id="decrement_button">decrement</button>
      <p>${this.model.count}</p>
      <button id="increment_button">increment</button>
    </div>
    <div class="div1 div2">
      <button id="input_decrement_button">decrement</button> 
      <input  id="input" type="text" value=${this.model.input} />
      <button id="input_increment_button">increment</button>
    </div>
      
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
    this.$inputDecrement = <HTMLButtonElement>(
      document.getElementById('input_decrement_button')
    )
    this.$inputDecrement.addEventListener('click', () => {
      this.inputDecrement()
    })
    this.$input = <HTMLInputElement>document.getElementById('input')
    this.$input.addEventListener('input', (e: Event) => {
      const { target } = e
      if (!(target instanceof HTMLInputElement)) {
        return
      }
      this.model.input = parseInt(target.value)
    })
    this.$inputIncrement = <HTMLButtonElement>(
      document.getElementById('input_increment_button')
    )
    this.$inputIncrement.addEventListener('click', () => {
      this.inputIncrement()
    })
  }

  decrement() {
    this.model.decrement()
  }

  increment() {
    this.model.increment()
  }

  inputDecrement() {
    this.model.inputDecrement()
  }

  inputIncrement() {
    this.model.inputIncrement()
  }
  onMessage() {
    this.render()
  }
}

const view = new ViewController()
view.mount()
