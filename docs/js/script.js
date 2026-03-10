/* 
  Central data source for the page.
  This keeps all text, images, and card data in one place
  so the UI can be rendered dynamically without hardcoding content in HTML.
*/
const pageData = {
  content: [{
      h2: "WHAT DOES COOKING MEAN?",
      description: "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg…",
      label: "THE PERFECT EGG",
      h3: "Keep water between 67 and 68°C for a flavourful, tender yolk"
  }],

  /* 
    Gallery image data used to render the image grid dynamically.
    Each object contains the thumbnail (grid view) and full image (modal view).
  */
  gallery: [
    {
      thumbnail: "./images/pot.jpg",
      full: "./images/pot.jpg",
      alt: "Gallery Image"
    },
    {
      thumbnail: "./images/chef.jpg",
      full: "./images/chef.jpg",
      alt: "Gallery Image"
    },
    {
      thumbnail: "./images/eggs.jpg",
      full: "./images/eggs.jpg",
      alt: "Gallery Image"
    }
  ],

  /* 
    Card data for the informational card section.
    Each card includes an image, title, description, and link.
  */
  cards: [
    {
      thumbnail: "./images/red.jpg",
      title: "Red",
      description: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
      url: "https://example.com/red/",
      newTab: true
    },
    {
      thumbnail: "./images/green.jpg",
      title: "Green",
      description: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
      url: "https://example.com/green/",
      newTab: true
    },
    {
      thumbnail: "./images/white.jpg",
      title: "White",
      description: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
      url: "https://example.com/white/",
      newTab: true
    }
  ]
};


/* ===== Gallery Logic ===== */

/*
  Select key DOM elements needed for the gallery and modal functionality
*/
const galleryContainer = document.querySelector('.gallery-grid');
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const modalClose = document.querySelector('.modal-close');


/*
  Dynamically render gallery images based on pageData.gallery
*/
pageData.gallery.forEach((item, index) => {

  const div = document.createElement('div');
  div.className = 'img-'+index;

  const img = document.createElement('img');
  img.src = item.thumbnail;
  img.alt = item.alt;

  // Lazy loading improves performance by loading images only when needed
  img.loading = "lazy";

  // Allow keyboard accessibility
  img.tabIndex = 0;

  div.appendChild(img);

  /*
    Clicking an image opens the modal with the full image
  */
  img.addEventListener('click', () => openModal(item));

  /*
    Keyboard accessibility:
    pressing Enter while focused on the image also opens the modal
  */
  img.addEventListener('keydown', e => {
    if (e.key === "Enter") openModal(item);
  });

  galleryContainer.appendChild(div);
});


/*
  Render text content section dynamically
*/
pageData.content.forEach(item => {

  const content = document.createElement('div');
  content.className = 'content';

  const h2 = document.createElement('h2');
  h2.textContent= item.h2;
  content.appendChild(h2);

  const description = document.createElement('p');
  description.textContent= item.description;
  content.appendChild(description)

  const label = document.createElement('span');
  label.className = 'label';
  label.textContent= item.label;
  content.appendChild(label)

  const h3 = document.createElement('h3');
  h3.textContent= item.h3;
  content.appendChild(h3)

  galleryContainer.appendChild(content);
});


/*
  Opens the modal and displays the selected image
*/
function openModal(item) {

  modalImg.src = item.full;
  modalImg.alt = item.alt;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  // Prevent page scrolling when modal is open
  document.body.style.overflow = "hidden";
}


/*
  Closes the modal and restores page scroll
*/
function closeModal() {

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');

  document.body.style.overflow = "auto";
}


/*
  Close modal when clicking the close button
*/
modalClose.addEventListener('click', closeModal);


/*
  Close modal when clicking outside the modal content
*/
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});


/*
  Accessibility: allow closing modal using Escape key
*/
document.addEventListener('keydown', e => {
  if (e.key === "Escape") closeModal();
});


/* ===== Cards Logic ===== */

/*
  Container for all cards
*/
const cardContainer = document.querySelector('.card-list');


/*
  Dynamically render cards from pageData.cards
*/
pageData.cards.forEach(card => {

  const article = document.createElement('article');
  article.classList.add('card');

  /*
    Card layout includes image, title, description and link
  */
  article.innerHTML = `
     <a href="${card.url}"
       ${card.newTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        <div class="image-box">
          <img src="${card.thumbnail}" alt="${card.title}">
        </div>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
    </a>
  `;

  cardContainer.appendChild(article);
});


/*
  Event delegation for card links
  Captures link clicks for analytics or debugging
*/
cardContainer.addEventListener('click', e => {

  const anchor = e.target.closest('a');

  if (anchor) {
    console.log(anchor);
  }

});