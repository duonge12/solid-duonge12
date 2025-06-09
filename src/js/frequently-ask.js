const initFrequentlyAskComponent = () => {
    const containers=document.querySelectorAll(".frequently-ask-item");
	const buttons = document.querySelectorAll(".frequently-ask-item >button");
    console.log(buttons);
	buttons.forEach((button, selectedIndex) => {
		button.addEventListener("click", () => {
			containers.forEach((container, index) => {
				if (index !== selectedIndex) {
					container.classList.remove("plus");
				}
			});
            containers[selectedIndex].classList.toggle('plus');
		});
	});
};

initFrequentlyAskComponent();
