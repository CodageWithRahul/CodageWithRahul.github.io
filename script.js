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

let  img_url = "img/todo_img/"
const images = [
    img_url+"login_page.png",
    img_url+"dashboard.png",
    img_url+"add_task.png",
    img_url+"dashboard2.png",
    img_url+"task_history.png",
    img_url+"task_history2.png",
    img_url+"upcoming_page.png",
    img_url+"account_info.png",
    img_url+"regular_page.png",
    img_url+"singup_page.png"
];

let index = 0;
const sliderImage = document.getElementById("sliderImage");

setInterval(() => {
    index = (index + 1) % images.length;
    sliderImage.src = images[index];
}, 1000);