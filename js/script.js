export function initSlider() {
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const caption = document.querySelector('.slider-caption');

  if (!slides || images.length === 0) return;

  let index = 0;
  const totalImages = images.length;

  function showSlide(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
    if (caption) {
      caption.textContent = images[index].dataset.caption || "";
    }
  }

  prevButton.onclick = null;
  nextButton.onclick = null;

  nextButton.onclick = () => {
    index = (index + 1) % totalImages;
    showSlide(index);
  };

  prevButton.onclick = () => {
    index = (index - 1 + totalImages) % totalImages;
    showSlide(index);
  };

  // Initialisation du texte du premier slide
  showSlide(index);
}



