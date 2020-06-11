let mouseCursor = document.querySelector(".cursor");
let effect = document.querySelector(".effect");
let effectName = document.querySelector(".effect-name");
let effectStr = document.querySelector(".slidecontainer input");
let effectValue = document.querySelector(".effectValue");
let slider = document.querySelector(".slider");
let sliderImage = document.querySelector(".slider img");
let prevbtn = document.querySelector(".prev");
let nextbtn = document.querySelector(".next");

let images = [
  "the-ball-488700_1920.jpg",
  "woman-3083379_1920.jpg",
  "cuba-1197800_1920.jpg",
  "fantasy-3077928_1920.jpg",
];

let counter = 1;
sliderImage.src = `./img/${images[counter]}`;

nextbtn.addEventListener("click", () => {
  sliderImage.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 800,
    fill: "forwards",
  });
  if (counter < images.length - 1) {
    counter++;
    sliderImage.src = `./img/${images[counter]}`;
  } else if (counter === images.length - 1) {
    counter = 0;
    sliderImage.src = `./img/${images[counter]}`;
  } else {
    counter--;
    sliderImage.src = `./img/${images[counter]}`;
  }
});

prevbtn.addEventListener("click", () => {
  sliderImage.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 800,
    fill: "forwards",
  });
  if (counter > 0) {
    counter--;
    sliderImage.src = `./img/${images[counter]}`;
  } else if (counter === 0) {
    counter = images.length - 1;
    sliderImage.src = `./img/${images[counter]}`;
  } else {
    counter--;
    sliderImage.src = `./img/${images[counter]}`;
  }
});

window.addEventListener("mousemove", (e) => {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
});

function onChange() {
  let value = effect.value;
  switch (value) {
    case "blur":
      mouseCursor.style.backdropFilter = value + `(${effectStr.value}px)`;
      effectValue.innerText = effectStr.value + "px";
      effectName.innerText = value;
      break;
    case "invert":
      mouseCursor.style.backdropFilter = value + `(${effectStr.value}%)`;
      effectValue.innerText = effectStr.value + "%";
      effectName.innerText = value;
      break;
    case "grayscale":
      mouseCursor.style.backdropFilter = value + `(${effectStr.value}%)`;
      effectValue.innerText = effectStr.value + "%";
      effectName.innerText = value;
      break;
  }
}

slider.addEventListener("mouseover", () => {
  effect.addEventListener("change", onChange);
  effectStr.addEventListener("input", onChange);
  mouseCursor.style.width = "5rem";
  mouseCursor.style.height = "5rem";
  mouseCursor.style.borderRadius = "0";
});
slider.addEventListener("mouseleave", (e) => {
  mouseCursor.style.width = "";
  mouseCursor.style.height = "";
  mouseCursor.style.borderRadius = "50%";
});