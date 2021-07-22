const { hash } = location;

const message = atob(hash.replace("#", ""));
const form = document.querySelector("form");
const input = document.getElementById("message-input");
const output = document.getElementById("link-input");
const inputCard = document.getElementById("input-card");
const outputCard = document.getElementById("output-card");
const showMessage = document.getElementById("message-show");
const messageOutput = document.querySelector("#message-show h1");

if (message) {
	showMessage.classList.remove("hide");
	inputCard.classList.add("hide");
	messageOutput.textContent = message;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Encodes the input value to Base64
	const encrypted = btoa(input.value);
	// Hide Input card and show Output card
	inputCard.classList.add("hide");
	outputCard.classList.remove("hide");
	// Link with the encoded hash
	output.value = `${window.location}#${encrypted}`;
	// Selects the output field to be able to ctrl + c
	output.select();
});
