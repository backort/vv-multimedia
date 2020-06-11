const ACCESS_KEY =
  "a28ea14a2a1ef94ae9bf00973ba8eb17ebb7f5db5b449c0150c96ed2a93b3e30";
const galleryContainer = document.querySelector(".gallery");
const inputButton = document.querySelector(".btn");
const input = document.querySelector(".count");
inputButton.addEventListener("click", getRenderData);
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    getRenderData();
  }
});

function getRenderData() {
  galleryContainer.innerHTML = "";
  let count = input.value;
  fetch(
    `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=${count}`
  )
    .then((res) => res.json())
    .then((photos) => {
      photos.map((photo) => {
        let url = photo.urls.regular;
        let alt = photo.alt_description;
        galleryContainer.innerHTML += `
      <div class="gallery-item">
          <div class="gallery-content">
          <a href="${url}"><img src="${url}" alt="${alt}" /></a>
          </div>
      </div>`;
      });
    });
}