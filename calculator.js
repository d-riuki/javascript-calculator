// store history of calculations in an array
const history_calculations = [] 
//store history of calculations in an array
function storeCalculations(a, b, operation, result){
    // how to represent the data
    // create an object to represent the calculation
    const calculation = {
        "a": a,
        "b": b,
        "operation": operation,
        "result": result
    };
    history_calculations.push(calculation);
}
//display the history of calculations
function displayHistory() {
    if (history_calculations.length === 0) {
        console.log("No calculations stored.");
    } else {
        console.log(history_calculations);
    }
}
// This function calculates the result of a simple arithmetic operation
function calculate(a,b,operation) {
    if (operation === '+') {
        let sum = a + b
        storeCalculations(a, b, '+', sum)
        return sum
    } else if (operation === '-') {
        let sub = a - b
        storeCalculations(a, b, '-', sub)
        return sub
    } else if (operation === '*') {
        let multiply = a * b
        storeCalculations(a, b, '*', multiply)
        return multiply
    } else if (operation === '/') {
        let division = a / b
        storeCalculations(a, b, '/', division)
        return division
    } else {
        return 'Invalid operation!!'
    }
}
 
