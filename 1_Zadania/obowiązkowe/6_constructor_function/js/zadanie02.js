//Task 2
function Calculator () {
    this.operations = []
  }
  Calculator.prototype.add = function(num1, num2){
      let result = num1 + num2
      this.operations.push(`added ${num1} to ${num2} got ${result}`)
  }
  Calculator.prototype.multiply = function(num1, num2){
    let result = num1 * num2
      this.operations.push(`multiplied ${num1} with ${num2} got ${result}`)
  }
  Calculator.prototype.subtract = function(num1, num2){
    let result = num1 - num2
    this.operations.push(`subtracted ${num1} from ${num2} got ${result}`)
}
Calculator.prototype.divide = function(num1, num2){
    let result = num1 / num2
    this.operations.push(`divided ${num1} by ${num2} got ${result}`)
}
Calculator.prototype.printOperations = function(){
    return this.operations
}
Calculator.prototype.clearOperations = function(){
    this.operations = []
}

const calc = new Calculator()
calc.add(4, 3)
calc.multiply(3, 3)
calc.subtract(10, 5)
calc.divide(4, 2)
console.log(calc.printOperations())
calc.clearOperations()
