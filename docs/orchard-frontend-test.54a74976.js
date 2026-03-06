let e=[{image:"https://picsum.photos/400/300?1",large:"https://picsum.photos/1200/800?1",alt:"Gallery image 1"},{image:"https://picsum.photos/400/300?2",large:"https://picsum.photos/1200/800?2",alt:"Gallery image 2"},{image:"https://picsum.photos/400/300?3",large:"https://picsum.photos/1200/800?3",alt:"Gallery image 3"}],t=[{title:"Card One",desc:"Example card description",link:"https://example.com"},{title:"Card Two",desc:"Another card description",link:"https://example.com"},{title:"Card Three",desc:"Third card description",link:"https://example.com"}];document.addEventListener("DOMContentLoaded",()=>{!function(e){document.getElementById("gallery-section").innerHTML=`
	<h2>Gallery</h2>
	<div class="gallery-grid">
	${e.map(e=>`
		<div class="gallery-item">
		<img src="${e.image}" 
		data-large="${e.large}" 
		alt="${e.alt}" 
		class="gallery-img">
		</div>
	`).join("")}
	</div>
`;let t=document.querySelectorAll(".gallery-img"),a=document.getElementById("modal"),l=document.getElementById("modal-img"),r=document.querySelector(".modal-close");function i(){a.classList.remove("open"),a.setAttribute("aria-hidden","true")}t.forEach(e=>{e.addEventListener("click",()=>{l.src=e.dataset.large,a.classList.add("open"),a.setAttribute("aria-hidden","false")})}),r.addEventListener("click",i),document.addEventListener("keydown",e=>{"Escape"===e.key&&i()})}(e);let a=document.getElementById("cards-section");a.innerHTML=`
	<h2>Cards</h2>
	<div class="cards-grid">
	${t.map(e=>`
		<div class="card">

		<h3>${e.title}</h3>
		<p>${e.desc}</p>

		<a href="${e.link}" target="_blank" rel="noopener noreferrer">
		Learn More
		</a>

		</div>
	`).join("")}
	</div>
`,a.querySelectorAll("a").forEach(e=>{e.addEventListener("click",e=>{console.log("Card link clicked:",e.currentTarget)})})});
//# sourceMappingURL=orchard-frontend-test.54a74976.js.map
