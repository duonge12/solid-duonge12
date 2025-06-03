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
	const container = document.querySelector("section.content");
	const response = await fetch(href);
	if (!response.ok) {
		container.innerHTML = response.statusText;
	} else {
		const result = await response.text();
		container.innerHTML = result;
		if (script) {
			const scriptText = await handleScript(script);
			eval(scriptText);
		}
	}
};
const handleLoadHeader = async (href, script) => {
	const tempContainer = document.createElement("div");
	const response = await fetch(href);
	if (!response.ok) {
		console.error("Failed to load header:", response.statusText);
	} else {
		const result = await response.text();
		tempContainer.innerHTML = result;
		const header = tempContainer.querySelector("header");
		document.body.insertBefore(header, document.body.firstChild);
		if (script) {
			const scriptText = await handleScript(script);
			eval(scriptText);
		}
	}
};
