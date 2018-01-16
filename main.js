var readLine = require('readline-sync');
var calc = require('./calc');

console.log("Seong's Simple Calculator");

while(true){
    var num1 = readLine.question("Please Enter First Number: ");
    var num2 = readLine.question("Please Enter Second Number: ");
    var operation = readLine.question("Please Enter Operation(+,-,/,*): ");

    var result;

    switch(operation){
        case "+":
            result = calc.add(num1, num2);
            break;
        case "-":
            result = calc.sub(num1, num2);
            break;
        case "*":
            result = calc.mul(num1, num2);
            break;
        case "/":
            result = calc.div(num1, num2);
            break;
        default:
            console.log("Wrong Operation Input!");
            continue;
    }
    console.log(result);
    var end = readLine.question("Do you want to end the program(Y/N): ");
    if(end.toUpperCase() == "Y"){
        console.log("Program Ended!");
        break;
    }
}
