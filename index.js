const tabs = document.querySelectorAll('.tabs li');
const tabContent = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		tabs.forEach((t) => t.classList.remove('active'));
		tab.classList.add('active');

		tabContent.forEach((content) => {
			content.classList.remove('active');
			document.querySelector(`#${tab.querySelector('a').href.split('#')[1]}`).classList.add('active');
		});
	});
});