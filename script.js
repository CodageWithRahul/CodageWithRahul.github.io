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
    if (slides.length === 0) return;
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

const dpdpImages = [
    "img/dpdp_cloud_auditor/login.png",
    "img/dpdp_cloud_auditor/signup.png",
    "img/dpdp_cloud_auditor/dashboard.png",
    "img/dpdp_cloud_auditor/connected_account.png",
    "img/dpdp_cloud_auditor/Add_account.png",
    "img/dpdp_cloud_auditor/scan_history.png",
    "img/dpdp_cloud_auditor/overview.png",
    "img/dpdp_cloud_auditor/risk_v.png",
    "img/dpdp_cloud_auditor/action_plan.png",
    "img/dpdp_cloud_auditor/top_problems.png",
    "img/dpdp_cloud_auditor/top_risk.png",
    "img/dpdp_cloud_auditor/Vur.png",
    "img/dpdp_cloud_auditor/log_export.png",
    "img/dpdp_cloud_auditor/profile.png",
];

const todoImages = [
    "img/todo_img/login_page.png",
    "img/todo_img/dashboard.png",
    "img/todo_img/add_task.png",
    "img/todo_img/dashboard2.png",
    "img/todo_img/task_history.png",
    "img/todo_img/task_history2.png",
    "img/todo_img/upcoming_page.png",
    "img/todo_img/account_info.png",
    "img/todo_img/regular_page.png",
    "img/todo_img/singup_page.png"
];

let dpdpIndex = 0;
let todoIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const dpdpSliderImage = document.getElementById("dpdpSliderImage");

setInterval(() => {
    dpdpIndex = (dpdpIndex + 1) % dpdpImages.length;
    todoIndex = (todoIndex + 1) % todoImages.length;
    if (sliderImage) {
        sliderImage.src = todoImages[todoIndex];
    }
    if (dpdpSliderImage) {
        dpdpSliderImage.src = dpdpImages[dpdpIndex];
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
