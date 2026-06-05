const openBtn = document.getElementById("openBtn");
const slideTitle = document.getElementById("slideTitle");
const envelopeScreen = document.getElementById("screen-envelope");
const memoriesScreen = document.getElementById("screen-memories");
const letterScreen = document.getElementById("screen-letter");

const memoryPhoto = document.getElementById("memoryPhoto");
const bgMusic = document.getElementById("bgMusic");

const slides = [
  {
    title: "How it started",
    photo: "assets/photo1.jpg"
  },
  {
    title: "The promise we made",
    photo: "assets/photo2.jpg"
  },
  {
    title: "How it’s going",
    photo: "assets/photo3.jpg"
  }
];

let currentPhotoIndex = 0;

openBtn.addEventListener("click", () => {
  bgMusic.play();

  envelopeScreen.classList.remove("active");
  memoriesScreen.classList.add("active");

  startMemoryAnimation();
});

function startMemoryAnimation() {
  memoryPhoto.src = slides[currentPhotoIndex].photo;
  slideTitle.textContent = slides[currentPhotoIndex].title;

  const slideshow = setInterval(() => {
    currentPhotoIndex++;

    if (currentPhotoIndex < slides.length) {
      memoryPhoto.src = slides[currentPhotoIndex].photo;
      slideTitle.textContent = slides[currentPhotoIndex].title;

      memoryPhoto.classList.remove("fade-in");
      slideTitle.classList.remove("fade-in");

      void memoryPhoto.offsetWidth;
      void slideTitle.offsetWidth;

      memoryPhoto.classList.add("fade-in");
      slideTitle.classList.add("fade-in");
    } else {
      clearInterval(slideshow);

      memoriesScreen.classList.remove("active");
      letterScreen.classList.add("active");
    }
  }, 9000);
}
