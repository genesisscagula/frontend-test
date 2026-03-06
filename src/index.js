import { galleryData, cardsData } from "./data/page-data.js";

import { renderGallery } from "./components/gallery/gallery.js";
import { renderCards } from "./components/cards/cards.js";

document.addEventListener("DOMContentLoaded", () => {

renderGallery(galleryData);
renderCards(cardsData);

});