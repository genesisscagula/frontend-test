export function galleryTemplate(items) {

	return items.map(item => `
		<div class="gallery-item">
		<img src="${item.image}" 
		data-large="${item.large}" 
		alt="${item.alt}" 
		class="gallery-img">
		</div>
	`).join("");

}