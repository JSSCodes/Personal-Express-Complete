const numberButtons = document.querySelectorAll('[data-number]')
const pressButtons = document.querySelectorAll('[data-method]')
const delButton = document.querySelector('[data-delete]')
const clearButtons = document.querySelector('[data-clear]')
const equalButton = document.querySelector('[data-equal]')
const face = document.querySelector('[data-face]')

class calculator{
    constructor(faceandTextElement){
    this.faceandTextElement = faceandTextElement
}

clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined

}


clickNumber(number){
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
          calculator.appendNumber(button.innerText)
          calculator.updateDisplay()
        })
      })
}

mathSymbols(operation){
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''

}

compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }
}

