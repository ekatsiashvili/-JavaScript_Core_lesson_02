'use strict'

function calc(a, b, c) {
	try {
		if (isNaN(a) && isNaN(b)) {
			throw "incorrect number or numbers";
		} else if (c != '-' & c != '+' & c != '*' & c != '/') {
			throw "incorrect operator";
		}
		if (a + b) {
			console.log(a + b);
		}
		if (a - b) {
			console.log(a - b);
		}
		if (a * b) {
			console.log(a * b);
		}
		if (b == 0) {
			throw "cannot be divided by 0";
		}

		else {
			(a / b)
			console.log(a / b);
		}
	} catch (err) {
		console.log(err);
	}
}
console.log(calc('108', '3452.89', "+"));
console.log(calc('fgydh', '9o0oi', "45"));
console.log(calc('67', '0', "/"));
console.log(calc('7njb', '0', "*"));
console.log(calc('5674', '89', "-"));
console.log(calc('456372.90', '45637.9', "/"));
console.log(calc('3', '2', "*"));
