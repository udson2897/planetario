function revealAndHighlight() {
  const layers = document.querySelectorAll(".layer");
  const middleY = window.innerHeight / 2;

  layers.forEach(layer => {
    const rect = layer.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;

    if (isVisible) {
      layer.classList.add("show");
    } else {
      layer.classList.remove("show");
    }

    const center = rect.top + rect.height / 2;
    const distanceToMiddle = Math.abs(center - middleY);

    if (distanceToMiddle < 200) {
      layer.classList.add("destacado");
    } else {
      layer.classList.remove("destacado");
    }
  });
}

function updateLuzParallax() {
  const luz = document.querySelector(".luz");
  if (luz) {
    const scrollY = window.scrollY;
    const scale = 0.6 + scrollY * 0.0005;
    const translateY = scrollY * 0.08;
    const fade = Math.max(1 - scrollY / 1000, 0);

    luz.style.transform = `translate(-50%, ${translateY}px) scale(${scale})`;
    luz.style.opacity = fade;
  }
}

window.addEventListener("scroll", () => {
  revealAndHighlight();
  updateLuzParallax();
});

window.addEventListener("load", () => {
  revealAndHighlight();
  updateLuzParallax();
});






