const pageData = {
  content: [{
      h2: "WHAT DOES COOKING MEAN?",
      description: "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg…",
      label: "THE PERFECT EGG",
      h3: "Keep water between 67 and 68°C for a flavourful, tender yolk"
  }],
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
const galleryContainer = document.querySelector('.gallery-grid');
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const modalClose = document.querySelector('.modal-close');

pageData.gallery.forEach((item, index) => {
  console.log(index);
  const div = document.createElement('div');
  div.className = 'img-'+index;
  const img = document.createElement('img');
  img.src = item.thumbnail;
  img.alt = item.alt;
  img.loading = "lazy";
  img.tabIndex = 0;

  div.appendChild(img);

  img.addEventListener('click', () => openModal(item));
  img.addEventListener('keydown', e => {
    if (e.key === "Enter") openModal(item);
  });

  galleryContainer.appendChild(div);
});

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

function openModal(item) {
  modalImg.src = item.full;
  modalImg.alt = item.alt;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = "hidden";
}

function closeModal() {
  console.log('test')
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = "auto";
}

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {  // Only if background clicked
    closeModal();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === "Escape") closeModal();
});

/* ===== Cards Logic ===== */
const cardContainer = document.querySelector('.card-list');

pageData.cards.forEach(card => {
  const article = document.createElement('article');
  article.classList.add('card');

  article.innerHTML = `
    <h3>${card.title}</h3>
    <p>${card.description}</p>
    <a href="${card.url}"
       ${card.newTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>
       Learn More
    </a>
  `;

  article.innerHTML = `
     <a href="${card.url}"
       ${card.newTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        <div class="image-box"><img src="${card.thumbnail}" alt="Red"></div>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
    </a>
  `;

  cardContainer.appendChild(article);
});

// Capture all link clicks
cardContainer.addEventListener('click', e => {
  const anchor = e.target.closest('a');
  if (anchor) {
    console.log(anchor);
  }
});