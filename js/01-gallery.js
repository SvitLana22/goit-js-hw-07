import { galleryItems } from "./gallery-items.js";
// Change code below this line

const itemTemplate = ({
  preview,
  original,
  description,
}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
const refs = {
  galleryElem: document.querySelector(".gallery"),
};

const render = () => {
  const galleryList = galleryItems.map((item) => itemTemplate(item)).join("");
  refs.galleryElem.innerHTML = "";
  refs.galleryElem.insertAdjacentHTML("beforeend", galleryList);
};
render();

refs.galleryElem.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if ("IMG" !== event.target.nodeName) {
    return;
  }
  const imgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src="${imgUrl}"/>
  `);
  instance.show();

  refs.galleryElem.addEventListener("keydown", onEscClose);
  function onEscClose(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}

// console.log(galleryItems);
