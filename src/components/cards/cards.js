import { cardsTemplate } from "./cards.template.js";

export function renderCards(cards){

const container = document.getElementById("cards-section");

container.innerHTML = `
	<h2>Cards</h2>
	<div class="cards-grid">
	${cardsTemplate(cards)}
	</div>
`;

const links = container.querySelectorAll("a");

	links.forEach(link => {

		link.addEventListener("click", e => {

			console.log("Card link clicked:", e.currentTarget);

		});

	});

}