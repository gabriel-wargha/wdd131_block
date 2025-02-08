let errorMsg = '';

function isCardNumberValid(number) {
	return number === '1234123412341234';
}

function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
	event.preventDefault();
	cardNumber = document.querySelector('#cardNumber');

	let errorMsg = '';

	// clear any previous errors
	displayError('');
	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n';
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n';
	} else if (!isDateValid(event)) {
		errorMsg = 'The expiration date must be in the future';
	}
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg);
		return false;
	}

	errorMessage = '';
	return true;
}

function isDateValid(event) {
	event.preventDefault();
	let inputMonth = parseInt(document.getElementById('month').value) - 1;
	let inputYear = parseInt(document.getElementById('year').value);

	let userDate = new Date(inputYear, inputMonth, 1);

	let today = new Date();
	today.setHours(0, 0, 0, 0);

	if (userDate < today) {
		return false;
	}

	return true;
}

document.querySelector('.form1').addEventListener('submit', submitHandler);
