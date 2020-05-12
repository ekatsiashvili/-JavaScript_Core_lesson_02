'use strict'

let employeeSalaries = {
	"Yeugen" : 1000,
	"Mykola" : 1500,
	"Petro" : 2000,
	"Yuriy" : 8000,
	"Alex" : 1200,
};

let sum = 0;

for ( let key in employeeSalaries) {
	sum += employeeSalaries[key];
}
console.log(sum);