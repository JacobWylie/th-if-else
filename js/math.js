// declare program variables
let num1;
let num2;
let message; 
// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
num1 = parseFloat(num1);
num2 = prompt("Please type another number");
num2 = parseFloat(num2);

if(num2 === 0) {
	alert("You cannot use 0. Please reload the page");
} else if(isNaN(num1) || isNaN(num2)) {
	alert("You must enter numbers'")
} else {
	// build an HTML message
	message += `<h1>Math with the numbers ${num1} and ${num2}</h1>
	${num1} + ${num2} = ${num1 + num2}<br>
	${num1} * ${num2} = ${num1 * num2}<br>
	${num1} / ${num2} = ${num1 / num2}<br>
	${num1} - ${num2} = ${num1 - num2}<br>`;
  
	// write message to web page
	document.write(message);
}




