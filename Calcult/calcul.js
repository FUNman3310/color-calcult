let num1 = prompt('first value');
num1 = Number(num1);

let num2 = prompt('second value');
num2 = Number(num2);


let operator = prompt('operator (/,+,*,-)');


switch (operator) {
    case '+':
        alert (num1 + num2);
        break;
    case '-':
        alert (num1 - num2);
        break;
    case '/':
        alert (num1 / num2);
        break;
    case '*':
        alert (num1 * num2);
        
     
}