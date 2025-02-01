const newP = document.createElement('p');
newP.textContent = 'Hello World';
document.body.append(newP);

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://picsum.photos/200');
newImg.alt = 'Some Place Holder';

const newS = document.createElement('section');

const h2 = document.createElement('h2');
h2.textContent = 'DOM Basics';
newS.appendChild(h2);

const p = document.createElement('p');
p.textContent = 'This was added through JavaScript';
newS.appendChild(p);

document.body.append(newS);

const newSection2 = document.createElement('section');
newSection2.innerHTML = `
<h2> Test </h2>
<p> This is a paragraph</p>`;

document.body.append(newSection2);

const newC = document.createElement('h3');

const ingredientData = ['Pinto Beans', 'Corn', 'Spices', 'Tortillas'];
const portionData = ['1 15oz can', '1 15oz can', '1 Tbsp', '8'];

const lis = document.createElement('ul');
ingredientData.forEach(function (item, index) {
	lis.innerHTML += ingredientTemplate(index);
});

function ingredientTemplate(index) {
	return `<li> ${ingredientData[index]} ${portionData[index]}</li>`;
}

document.body.append(lis);

lis.classList.add('dark');
