const slides = document.querySelectorAll(".slide");
const arrows = document.querySelectorAll(".arrow");
const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");
const audioPlayer = new Audio("./intromusic.mp3");
const weatherPlayer = new Audio("./weathermusic.mp3");
const bipSound = new Audio("./bipad.mp3");
const audioSlides = [0, 1, 2, 3, 4, 6];
const zeroSound = [1];
const bipSlide = 7;
let currentSlide = 0;

showSlide(currentSlide);

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  if (slides[index] === slides[0]) {
    arrowLeft.style.display = "none";
  } else {
    arrowLeft.style.display = "block";
  }

  if (slides[index] === slides[slides.length - 1]) {
    arrowRight.style.display = "none";
  } else {
    arrowRight.style.display = "block";
  }

  slides[index].classList.add("active");

  if (audioSlides.includes(index)) {
    audioPlayer.play();
  } else {
    audioPlayer.volume = 0;
    weatherPlayer.pause();
  }

  if (audioSlides.includes(index) && index === 0) {
    audioPlayer.volume = 0.3;
  } else if (audioSlides.includes(index)) {
    audioPlayer.volume = 0.15;
  }

  if (zeroSound.includes(index)) {
    audioPlayer.volume = 0;
  }

  if (index === bipSlide) {
    bipSound.play();
  } else {
    bipSound.pause();
    bipSound.currentTime = 0;
  }

  if (index === 8) {
    weatherPlayer.play();
    weatherPlayer.volume = 0.2;
  }
}

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("arrow-left")) {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
    } else if (arrow.classList.contains("arrow-right")) {
      currentSlide++;
      if (currentSlide === slides.length) {
        currentSlide = 0;
      }
    }

    showSlide(currentSlide);
  });
});

const startButton = document.querySelector(".header-button");
const header = document.querySelector(".header");
const weatherButton = document.getElementById("weather-button");

startButton.addEventListener("click", () => {
  header.style.zIndex = 0;
  header.style.opacity = 0;
  header.style.pointerEvents = "none";
  audioPlayer.play();
});

weatherButton.addEventListener("click", () => {
  weatherPlayer.pause();
});
