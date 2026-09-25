// store history of calculations in an array
const history_calculations = [] 

function storeCalculations(a, b, operation, result){
   
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

function calculate(a,b,operation){
    if(operation === '+'){
        let sum = a + b
        storeCalculations(a,b,operation,sum)
        return sum
    } else if (operation === '-') {
        let sub = a - b
        storeCalculations(a,b,operation,sub)
        return sub
    } else if (operation === '*') {
        let multiply = a * b
        storeCalculations(a,b,operation,multiply)
        return multiply
    } else if (operation === '/') {
        let division = a / b
        storeCalculations(a,b,operation,division)
        return division
    } else {
        return 'Invalid operation!!'
    }
}
 
console.log(calculate(17,2,"/"));
console.log(calculate(98,10,"+"));
console.log(calculate(10,3,"*"));
console.log(calculate(10,6,"-"));

console.log(history_calculations);