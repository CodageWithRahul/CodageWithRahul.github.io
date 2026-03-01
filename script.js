const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const card = document.querySelector(".project-card");
const slides = card.querySelectorAll(".slide");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll reveal effect for sections
const sections = document.querySelectorAll(".section");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.querySelectorAll(".project-card").forEach(card => {

    const slides = card.querySelectorAll(".slide");
    let index = 0;
    let interval = null;

    function startSlider() {
        interval = setInterval(() => {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
        }, 1000);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    card.addEventListener("mouseenter", startSlider);
    card.addEventListener("mouseleave", stopSlider);

});