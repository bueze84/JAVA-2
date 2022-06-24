let input1 = Number(prompt("Enter first number: "));
let operator = prompt("Enter an operator: +, -, *, /, ");
let input2 = Number(prompt("Enter second number: "));
let answer;
if (operator == "+") {
    answer = input1 + input2;

} else if (operator === "-") {
    answer = input1 - input2;

} else if (operator === "*") {
    answer = input1 * input2;

} else if (operator === "/") {
    answer = input1 / input2;
} else { answer = "invalid operator"; }
alert(answer);