import { galleryTemplate } from "./gallery.template.js";

export function renderGallery(data) {

const container = document.getElementById("gallery-section");

container.innerHTML = `
	<h2>Gallery</h2>
	<div class="gallery-grid">
	${galleryTemplate(data)}
	</div>
`;

const images = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");

images.forEach(img => {

	img.addEventListener("click", () => {

		modalImg.src = img.dataset.large;
		modal.classList.add("open");
		modal.setAttribute("aria-hidden", "false");

	});

});

closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", e => {

	if (e.key === "Escape") closeModal();

	});

	function closeModal() {

		modal.classList.remove("open");
		modal.setAttribute("aria-hidden", "true");

	}

}