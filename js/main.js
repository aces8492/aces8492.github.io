function multiply(num1, num2) {
	var result = num1 * num2;
	return result;
}

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Show 10*10 result when click this!';

var mult_result = 0;
mult_result = multiply(10,10); 

document.querySelector('html').onClick = function() {
	alert('ok');
}


