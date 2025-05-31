const handleMenuToggle = () => {
	const button = document
		.querySelector("header .menu-toggle")
		.addEventListener("click", () => {
			const navListClass = document.querySelector("header .navList").classList;
			if (navListClass.contains("invisible")) {
				navListClass.remove("invisible");
				navListClass.add("visible");
			} else {
				navListClass.add("invisible");
				navListClass.remove("visible");
			}
		});
};
const themeToggle = () => {
	const buttons = document
		.querySelectorAll("header .theme-toggle")
		.forEach((button) => {
			button.addEventListener("click", () => {
				const body = document.querySelector("body");
				if (body.classList.contains("dark")) {
					body.classList.remove("dark");
					body.classList.add("light");
				} else {
					body.classList.remove("light");
					body.classList.add("dark");
				}
			});
		});
};
handleMenuToggle();
themeToggle();