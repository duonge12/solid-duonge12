const handleDashButtonClick = () => {
	const dashButton = document.querySelector(".dashes-button");
	const navContainer = document.querySelector(".nav-container");
	dashButton.addEventListener("click", () => {
		navContainer.classList.toggle("up");
	});
};
const handleDropDownButtonClick = () => {
	const dropDownButton = document.querySelector(".dropdown-container");
	dropDownButton.addEventListener("click", () => {
		dropDownButton.classList.toggle("up");
	});
};
const handleToggleThemeClick = () => {
	const toggleThemeButtons = document.querySelectorAll(".toggle-theme");
	const body = document.getElementsByTagName("body")[0];
	toggleThemeButtons.forEach((button) => {
		button.addEventListener("click", () => {
			body.classList.toggle("dark");
		});
	});
};
handleDashButtonClick();
handleDropDownButtonClick();
handleToggleThemeClick();
