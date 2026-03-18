const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const layers = document.querySelectorAll(".cursor-layer");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}

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
    if (sliderImage) {
        sliderImage.src = images[index];
    }
}, 1000);


// if (window.innerWidth <= 768) return;
let mouseX = 0;
let mouseY = 0;

let positions = [];

// Initialize positions
layers.forEach(() => {
    positions.push({ x: 0, y: 0 });
});

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animation loop
function animate() {
    layers.forEach((layer, index) => {
        let targetX = index === 0 ? mouseX : positions[index - 1].x;
        let targetY = index === 0 ? mouseY : positions[index - 1].y;

        // Different speed for each layer
        let speed = 0.25 - index * 0.05;

        positions[index].x += (targetX - positions[index].x) * speed;
        positions[index].y += (targetY - positions[index].y) * speed;

        layer.style.left = positions[index].x + "px";
        layer.style.top = positions[index].y + "px";
    });

    requestAnimationFrame(animate);
}

animate();

const clickableSelectors = "a, button, .btn, input[type='submit'], input[type='button'], [role='button']";

const clickables = document.querySelectorAll(clickableSelectors);

clickables.forEach(el => {
    el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hidden");
    });

    el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hidden");
    });
});
