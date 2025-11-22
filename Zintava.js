// Interactive gallery: thumbnail click + arrow navigation

document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("displayedImage");
  const thumbnails = Array.from(document.querySelectorAll(".thumb"));
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentIndex = 0;

  function updateMainImage(index) {
    currentIndex = index;
    mainImage.src = thumbnails[currentIndex].src;
    mainImage.classList.remove("fade-in");
    void mainImage.offsetWidth; // restart animation
    mainImage.classList.add("fade-in");
  }

  // Thumbnail click
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => updateMainImage(index));
  });

  // Left arrow click
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateMainImage(currentIndex);
  });

  // Right arrow click
  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateMainImage(currentIndex);
  });

  console.log("Gallery script loaded with arrows and thumbnails.");
});
