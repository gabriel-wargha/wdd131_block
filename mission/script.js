const select = document.querySelector('#theme-select');

select.addEventListener('change', changeTheme);
function changeTheme() {
	const selectedValue = document.getElementById('theme-select').value;
	if (selectedValue == 'dark') {
		const body = document.body;
		body.classList.add('dark');
		const logo = document.querySelector('.logo');
		logo.src = '../mission/byui-logo_white.png';
	} else {
		const body = document.body;
		body.classList.remove('dark');
		const logo = document.querySelector('.logo');
		logo.src = './byui-logo_blue.webp';
	}
}
