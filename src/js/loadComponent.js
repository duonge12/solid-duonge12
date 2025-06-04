const handleScript = async (href) => {
	const response = await fetch(href);
	if (!response.ok) {
		return `console.error("Failed to load script:", ${response.statusText});`;
	} else {
		const result = await response.text();
		return result;
	}
};

const handleLoadComponent = async (href, script) => {
	const tempContainer = document.createElement("div");
	const response = await fetch(href);
	if (!response.ok) {
		console.error("Failed to load header:", response.statusText);
	} else {
		const result = await response.text();
		tempContainer.innerHTML = result;
		const section = tempContainer.firstChild;
		document.body.appendChild(section);
		if (script) {
			const scriptText = await handleScript(script);
			eval(scriptText);
		}
	}
};
