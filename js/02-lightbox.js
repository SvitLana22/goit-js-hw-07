import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const itemTemplate = ({
  preview,
  original,
  description,
}) => `<li> <a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>
</li>
`;
const refs = {
  galleryElem: document.querySelector(".gallery"),
};

const render = () => {
  const galleryList = galleryItems.map((item) => itemTemplate(item)).join("");
  refs.galleryElem.innerHTML = "";
  refs.galleryElem.insertAdjacentHTML("beforeend", galleryList);
};
render();
const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
