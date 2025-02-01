//  arrays.js
// const steps = ['one', 'two', 'three'];

// function listTemplate(step) {
// 	return `<li> ${step}</li>`;
// }
// const stepsHtml = steps.map(listTemplate);
// document.querySelector('#myList').innerHTML = stepsHtml.join(''); // set the innerHTML
// console.log('#myList');

const letters = ['A', 'B', 'c'];

function gpaCalculator(letter) {
	letter = letter.toUpperCase();
	let score = 0;
	switch (letter) {
		case 'A':
			score = 4;
			break;
		case 'B':
			score = 3.0;
			break;
		case 'C':
			score = 2.0;
			break;
	}
	return score;
}

const grades = letters.map(gpaCalculator);
console.log(grades);

function sum(total, current) {
	return total + current;
}
const gpaTotal = grades.reduce(sum, 0);
console.log(gpaTotal);
