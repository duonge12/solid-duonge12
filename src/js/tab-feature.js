const initTabComponent = () => {
	const component = document.querySelector(".tab-container");
	if (!component) return;

	const tabs = component.querySelectorAll(".tab-menu-item");
	const cards = component.querySelectorAll(".tab-card");

	tabs.forEach((tab, selectedIndex) => {
		tab.addEventListener("click", () => {
			if (tab.classList.contains("selected")) return;

			tabs.forEach((otherTab, index) => {
				if (index !== selectedIndex) {
					otherTab.classList.remove("selected");
					cards[index].classList.remove("selected");
				}
			});

			tab.classList.add("selected");
			cards[selectedIndex].classList.add("selected");
		});
	});
};

initTabComponent();
