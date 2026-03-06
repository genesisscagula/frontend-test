export function cardsTemplate(cards){

	return cards.map(card => `
		<div class="card">

		<h3>${card.title}</h3>
		<p>${card.desc}</p>

		<a href="${card.link}" target="_blank" rel="noopener noreferrer">
		Learn More
		</a>

		</div>
	`).join("");

}