/**
 * RAHUL GUPTA - PORTFOLIO JAVASCRIPT
 * Handles Mobile Menu, Project Filters, Case Study Modal with Screenshot Gallery,
 * One-Click Copy Utils, and Ambient Glow Follower.
 */

// Project Data Registry
const PROJECTS_DATA = {
  dpdp: {
    id: "dpdp",
    title: "DPDP Cloud Auditor",
    subtitle: "Enterprise Multi-Cloud Compliance & Vulnerability Scanner (College Major Project)",
    category: "cloud",
    categoryLabel: "Cloud Security • Django",
    badge: "Final Year Major Project",
    summary: "A production-grade cloud security auditing platform with AWS, Azure, and GCP integration. It automates vulnerability detection, scans cloud resources for misconfigurations, and generates actionable compliance audit reports.",
    longDesc: "DPDP Cloud Auditor was architected and developed as my final year college major project. It addresses the critical need for unified, automated multi-cloud compliance and misconfiguration detection. The platform connects with AWS, Azure, and GCP accounts via secure credential validation, performs deep configuration scans against security benchmarks, quantifies risk vectors, and produces downloadable executive audit reports alongside an interactive risk dashboard.",
    highlights: [
      "Multi-Cloud Integration: Connects securely with AWS, Azure, and GCP cloud environments.",
      "Automated Misconfiguration Auditing: Detects exposed buckets, open security groups, and IAM over-privileges.",
      "Compliance Risk Engine: Categorizes and prioritizes issues with risk score metrics.",
      "Executive Reports & Exports: Generates comprehensive compliance audit logs and PDF/CSV reports.",
      "Interactive Dashboard: Real-time charts, vulnerability trends, and step-by-step remediation action plans."
    ],
    tags: ["Python", "Django", "AWS", "Azure", "GCP", "Cloud Security", "REST APIs", "Vercel"],
    images: [
      "img/dpdp_cloud_auditor/dashboard.png",
      "img/dpdp_cloud_auditor/overview.png",
      "img/dpdp_cloud_auditor/risk_v.png",
      "img/dpdp_cloud_auditor/connected_account.png",
      "img/dpdp_cloud_auditor/scan_history.png",
      "img/dpdp_cloud_auditor/top_problems.png",
      "img/dpdp_cloud_auditor/Top_risk.png",
      "img/dpdp_cloud_auditor/Vur.png",
      "img/dpdp_cloud_auditor/action_plan.png",
      "img/dpdp_cloud_auditor/log_export.png",
      "img/dpdp_cloud_auditor/profile.png",
      "img/dpdp_cloud_auditor/Add_account.png",
      "img/dpdp_cloud_auditor/login.png",
      "img/dpdp_cloud_auditor/signup.png"
    ],
    demoUrl: "https://dpdp-cloud-auditor.vercel.app/pages/login.html",
    githubUrl: "https://github.com/CodageWithRahul/dpdp-cloud-auditor",
    credentials: {
      user: "rahulguptaa650@gmail.com",
      pass: "12345",
      note: "Note: Free tier hosting may take a few seconds to spin up on first access."
    }
  },

  lockbytes: {
    id: "lockbytes",
    title: "LockBytes Desktop",
    subtitle: "Hardware-Bound AES-256-GCM Vault & USB Physical Key Encryption Suite",
    category: "desktop",
    categoryLabel: "Desktop Security • Cryptography",
    badge: "Windows App • v1.0.0",
    summary: "A Windows desktop application that protects sensitive data using authenticated AES-256-GCM encryption. Files can only be decrypted when the registered physical USB device is plugged in.",
    longDesc: "LockBytes provides zero-trust local data protection for Windows users. By combining AES-256-GCM authenticated encryption with a hardware-binding physical USB key registration system, files cannot be decrypted on arbitrary machines even if intercepted. It also includes secure vault storage, master password protection, and optional cloud backup and recovery through the user's personal Google Drive account.",
    highlights: [
      "Hardware-Bound Security: Decryption requires physical insertion of the user's registered USB key.",
      "AES-256-GCM Encryption: Authenticated cipher preventing tampering and data snooping.",
      "Google Drive Cloud Recovery: Safe, encrypted recovery path using OAuth2 personal Drive integration.",
      "Isolated Vault Architecture: Sensitive keys never leave local protected storage in plaintext.",
      "Modern Windows Native UI: Intuitive drag-and-drop encryption, progress tracking, and key pairing wizard."
    ],
    tags: ["Python", "AES-256-GCM", "Cryptography", "USB Hardware Key", "Desktop App", "Google Drive API"],
    images: [
      "img/lockbytes_img/1st.png",
      "img/lockbytes_img/2nd.png",
      "img/lockbytes_img/3rd.png",
      "img/lockbytes_img/4th.png",
      "img/lockbytes_img/5th.png",
      "img/lockbytes_img/6th.png",
      "img/lockbytes_img/7th.png"
    ],
    demoUrl: "https://github.com/CodageWithRahul/LockBytes/releases/tag/v1.0.0",
    demoLabel: "Download Release (v1.0.0)",
    githubUrl: "https://github.com/CodageWithRahul/LockBytes"
  },

  todo: {
    id: "todo",
    title: "Advance Task Management System",
    subtitle: "High-Productivity Workflow & Task Automation Engine",
    category: "backend",
    categoryLabel: "Django • Full-Stack Web App",
    badge: "Full-Stack Web App",
    summary: "An advanced task management system built with Python and Django designed to streamline task organization, deadline tracking, recurring tasks, and productivity workflows.",
    longDesc: "Built to overcome limitations of basic to-do lists, this system incorporates structured workflow stages, priority escalation, deadline tracking, automated recurring tasks, and detailed task history archives. Optimized backend queries ensure smooth responsiveness even with heavy task loads.",
    highlights: [
      "Task Lifecycle Management: Supports pending, upcoming, regular, and completed workflows.",
      "Recurring Task Engine: Automatically respawns periodic tasks based on scheduling rules.",
      "Deadlines & Priority Matrices: Clear visual categorization to prevent missed deadlines.",
      "Activity Audit History: Complete archive of modified, deleted, and finished tasks.",
      "User Authentication & Custom Profiles: Secure login, signup, and personal settings."
    ],
    tags: ["Python", "Django", "SQLite/PostgreSQL", "JavaScript", "Bootstrap", "Render"],
    images: [
      "img/todo_img/dashboard.png",
      "img/todo_img/dashboard2.png",
      "img/todo_img/add_task.png",
      "img/todo_img/upcoming_page.png",
      "img/todo_img/task_history.png",
      "img/todo_img/task_history2.png",
      "img/todo_img/account_info.png",
      "img/todo_img/login_page.png",
      "img/todo_img/regular_page.png",
      "img/todo_img/singup_page.png"
    ],
    demoUrl: "https://advance-todo-app-1rt6.onrender.com/",
    githubUrl: "https://github.com/CodageWithRahul/Advance-Todo-app.git",
    credentials: {
      user: "demouser@gmail.com",
      pass: "Demo1234",
      note: "Hosted on Render free tier (may take ~30 seconds to wake up)."
    }
  },

  sms: {
    id: "sms",
    title: "Student Management System",
    subtitle: "Academic Records, Courses & Enrollment Management System",
    category: "backend",
    categoryLabel: "Flask • SQLAlchemy • Full-Stack",
    badge: "Full-Stack Web App",
    summary: "A full-stack web application built using Flask, SQLAlchemy ORM, and SQLite to manage student records, course catalogs, and academic enrollment workflows with full CRUD operations.",
    longDesc: "The Student Management System simplifies academic institution administrative operations. It handles student profiles, enrollment tracking, course offerings, and dynamic filtering. Built with clean Flask route modularity, SQLAlchemy ORM data integrity, and intuitive UI components.",
    highlights: [
      "Full CRUD Operations: Seamless creation, editing, deletion, and retrieval of student & course records.",
      "Relational Database Model: Robust schemas linking students, courses, and active enrollments via SQLAlchemy.",
      "Advanced Filtering & Search: Instant search by student name, roll number, course, or admission date.",
      "Role-Based Authentication: Protected administrative actions and secured endpoints.",
      "Responsive Dashboard: Clean metrics showing total enrollments, active courses, and student counts."
    ],
    tags: ["Flask", "Python", "SQLAlchemy", "SQLite", "JavaScript", "HTML5/CSS3", "Render"],
    images: [
      "img/sms_img/dashboard.png",
      "img/sms_img/students.png",
      "img/sms_img/course.png",
      "img/sms_img/enrrolment.png",
      "img/sms_img/login page.png",
      "img/sms_img/signup.png"
    ],
    demoUrl: "https://rahul-sms.onrender.com",
    githubUrl: "https://github.com/CodageWithRahul/Student-Management-system.git",
    credentials: {
      user: "demo",
      pass: "1234",
      note: "Render free tier instance."
    }
  },

  captcha: {
    id: "captcha",
    title: "Dynamic CAPTCHA Service",
    subtitle: "Anti-Bot Verification & Dynamic Challenge Engine (TCS iON)",
    category: "security",
    categoryLabel: "Java Servlets • Backend Security",
    badge: "TCS iON Internship",
    summary: "Built a secure, reusable CAPTCHA service using Java Servlets to protect web applications from automated bot submissions, form spam, and brute force attacks.",
    longDesc: "During my software development internship at TCS iON, I designed and developed this reusable CAPTCHA authentication component. It dynamically renders randomized, noise-distorted challenge images on the server side and securely matches against hashed session tokens, providing lightweight yet robust bot protection.",
    highlights: [
      "Dynamic Noise & Distortion: Random character rotation, background grid interference, and obfuscation.",
      "Server-Side Session Validation: Secure token validation preventing replay attacks and bypass attempts.",
      "Modular Plug-and-Play Design: Easily integrates into registration, login, contact, and comment forms.",
      "High Concurrency Handling: Lightweight memory footprint optimized for low latency under peak traffic."
    ],
    tags: ["Java Servlets", "Web Security", "REST APIs", "Session Auth", "Git"],
    images: [
      "img/captcha_img/captcha_img.png"
    ],
    githubUrl: "https://github.com/CodageWithRahul/captcha-service-project.git"
  },

  billmaker: {
    id: "billmaker",
    title: "Bill Maker ISP Invoicing Suite",
    subtitle: "Automated Broadband & Cable ISP Invoicing & Customer Management",
    category: "desktop",
    categoryLabel: "Java Swing • Desktop Suite",
    badge: "Desktop Application",
    summary: "A desktop billing application developed in Java Swing using Object-Oriented principles, tailored for Internet Service Providers to handle monthly billing cycles, customer accounts, and invoice generation.",
    longDesc: "Tailored to address the challenges of regional Internet Service Providers and cable operators, Bill Maker provides a reliable, offline-first billing solution. It automates invoice calculations, generates print-ready documents with company watermarks, manages customer records, and provides Excel reconciliation exports.",
    highlights: [
      "Automated Invoicing Engine: Calculates monthly cycles, taxes, bandwidth tiers, and balance due.",
      "Watermarked Print Layouts: Produces professional, formatted invoices ready for direct thermal or laser printing.",
      "Excel Export & Backup: Seamlessly exports monthly financial summaries for spreadsheet accounting.",
      "Local Encrypted Storage: Protects client address books and payment records without requiring external cloud servers."
    ],
    tags: ["Java", "Swing GUI", "OOP", "Excel Export", "PDF Generation", "Desktop Application"],
    images: [
      "img/billmaker_img/bill dashboard.png",
      "img/billmaker_img/sample_bill.png"
    ],
    demoUrl: "https://github.com/CodageWithRahul/Bill-Maker/releases",
    demoLabel: "Download Releases",
    githubUrl: "https://github.com/CodageWithRahul/Bill-Maker"
  }
};

// State Variables
let currentModalProject = null;
let currentImageIndex = 0;

// Initialize on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initCategoryFilters();
  initModalCarousel();
  initCopyButtons();
  initContactForm();
  initAmbientFollower();
  checkUrlHashForProject();
});

/* ----------------------------------------------------
   Navbar & Mobile Menu
   ---------------------------------------------------- */
function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navMenu.classList.toggle("open");
      // Lock body scroll when mobile menu is open
      if (navMenu.classList.contains("open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // Header scroll shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll Spy for active nav link
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      }
    });
  });
}

/* ----------------------------------------------------
   Project Category Filtering
   ---------------------------------------------------- */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter || (filter === "security" && category === "security")) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

/* ----------------------------------------------------
   Project Modal & Screenshot Gallery
   ---------------------------------------------------- */
function initModalCarousel() {
  const modalBackdrop = document.getElementById("projectModalBackdrop");
  const closeBtn = document.getElementById("modalCloseBtn");
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");
  const carouselEl = document.querySelector(".modal-carousel");

  if (closeBtn && modalBackdrop) {
    closeBtn.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!modalBackdrop.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  });

  if (prevBtn) prevBtn.addEventListener("click", prevImage);
  if (nextBtn) nextBtn.addEventListener("click", nextImage);

  // Touch swipe support for mobile carousel
  if (carouselEl) {
    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 50;

    carouselEl.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselEl.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0) {
          nextImage(); // swipe left = next
        } else {
          prevImage(); // swipe right = prev
        }
      }
    }, { passive: true });
  }

  // Hook up all "Case Study & Details" buttons
  document.querySelectorAll("[data-project-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projId = btn.getAttribute("data-project-id");
      openProjectModal(projId);
    });
  });
}

function openProjectModal(projectId) {
  const project = PROJECTS_DATA[projectId];
  if (!project) return;

  currentModalProject = project;
  currentImageIndex = 0;

  // Populate data
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalSubtitle").textContent = project.subtitle;
  document.getElementById("modalCategoryBadge").textContent = project.categoryLabel;
  document.getElementById("modalLongDesc").textContent = project.longDesc;

  // Populate highlights
  const highlightsList = document.getElementById("modalHighlights");
  highlightsList.innerHTML = "";
  project.highlights.forEach(highlight => {
    const li = document.createElement("li");
    li.textContent = highlight;
    highlightsList.appendChild(li);
  });

  // Populate tags
  const tagsContainer = document.getElementById("modalTags");
  tagsContainer.innerHTML = "";
  project.tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag-badge";
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  // Credentials section
  const credsContainer = document.getElementById("modalCredentialsBox");
  if (project.credentials) {
    credsContainer.style.display = "block";
    document.getElementById("modalUserVal").textContent = project.credentials.user;
    document.getElementById("modalPassVal").textContent = project.credentials.pass;
    document.getElementById("modalCredsNote").textContent = project.credentials.note || "";
  } else {
    credsContainer.style.display = "none";
  }

  // Action links
  const demoLink = document.getElementById("modalDemoLink");
  const githubLink = document.getElementById("modalGithubLink");

  if (project.demoUrl) {
    demoLink.style.display = "inline-flex";
    demoLink.href = project.demoUrl;
    demoLink.textContent = project.demoLabel || "Launch Live Demo ↗";
  } else {
    demoLink.style.display = "none";
  }

  if (project.githubUrl) {
    githubLink.style.display = "inline-flex";
    githubLink.href = project.githubUrl;
  } else {
    githubLink.style.display = "none";
  }

  // Update carousel images
  updateCarouselView();

  // Show modal
  const modalBackdrop = document.getElementById("projectModalBackdrop");
  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";

  // Update URL hash without scrolling
  history.replaceState(null, null, `#project-${project.id}`);
}

function closeModal() {
  const modalBackdrop = document.getElementById("projectModalBackdrop");
  modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
  currentModalProject = null;

  // Reset hash if it was pointing to project
  if (window.location.hash.startsWith("#project-")) {
    history.replaceState(null, null, window.location.pathname);
  }
}

function updateCarouselView() {
  if (!currentModalProject || !currentModalProject.images.length) return;

  const carouselImg = document.getElementById("carouselImage");
  const counter = document.getElementById("carouselCounter");
  const dotsContainer = document.getElementById("carouselDots");
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");

  const images = currentModalProject.images;

  // Update image
  carouselImg.style.opacity = "0.2";
  setTimeout(() => {
    carouselImg.src = images[currentImageIndex];
    carouselImg.alt = `${currentModalProject.title} screenshot ${currentImageIndex + 1}`;
    carouselImg.style.opacity = "1";
  }, 120);

  // Counter
  counter.textContent = `${currentImageIndex + 1} / ${images.length}`;

  // Hide nav buttons if only 1 image
  if (images.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    dotsContainer.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
    dotsContainer.style.display = "flex";

    // Build dots
    dotsContainer.innerHTML = "";
    images.forEach((_, idx) => {
      const dot = document.createElement("span");
      dot.className = `carousel-dot ${idx === currentImageIndex ? "active" : ""}`;
      dot.addEventListener("click", () => {
        currentImageIndex = idx;
        updateCarouselView();
      });
      dotsContainer.appendChild(dot);
    });
  }
}

function prevImage() {
  if (!currentModalProject) return;
  const len = currentModalProject.images.length;
  currentImageIndex = (currentImageIndex - 1 + len) % len;
  updateCarouselView();
}

function nextImage() {
  if (!currentModalProject) return;
  const len = currentModalProject.images.length;
  currentImageIndex = (currentImageIndex + 1) % len;
  updateCarouselView();
}

function checkUrlHashForProject() {
  const hash = window.location.hash;
  if (hash && hash.startsWith("#project-")) {
    const projId = hash.replace("#project-", "");
    if (PROJECTS_DATA[projId]) {
      setTimeout(() => {
        openProjectModal(projId);
      }, 300);
    }
  }
}

/* ----------------------------------------------------
   Clipboard & Toast Utilities
   ---------------------------------------------------- */
function initCopyButtons() {
  // Global toast
  const toast = document.getElementById("toastNotice");

  // Copy Email button in contact
  const copyEmailBtns = document.querySelectorAll(".btn-copy-email");
  copyEmailBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      copyToClipboard("rahulguptaa650@gmail.com", "Email copied to clipboard!");
    });
  });

  // Modal demo creds copy
  const copyModalCredsBtn = document.getElementById("modalCopyCredsBtn");
  if (copyModalCredsBtn) {
    copyModalCredsBtn.addEventListener("click", () => {
      if (!currentModalProject || !currentModalProject.credentials) return;
      const text = `User: ${currentModalProject.credentials.user} | Password: ${currentModalProject.credentials.pass}`;
      copyToClipboard(text, "Credentials copied to clipboard!");
    });
  }

  // Card demo creds copy
  document.querySelectorAll(".btn-copy-card-creds").forEach(btn => {
    btn.addEventListener("click", () => {
      const user = btn.getAttribute("data-user");
      const pass = btn.getAttribute("data-pass");
      copyToClipboard(`User: ${user} | Password: ${pass}`, "Credentials copied!");
    });
  });
}

function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast(message);
  });
}

function showToast(message) {
  const toast = document.getElementById("toastNotice");
  if (!toast) return;
  toast.querySelector(".toast-text").textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* ----------------------------------------------------
   Contact Form Validation & Submission
   ---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all fields.");
      return;
    }

    // Direct mailto trigger
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:rahulguptaa650@gmail.com?subject=${subject}&body=${body}`;

    showToast("Opening email client... Thank you!");
    form.reset();
  });
}

/* ----------------------------------------------------
   Ambient Mouse Follower (Desktop Only)
   ---------------------------------------------------- */
function initAmbientFollower() {
  if (window.innerWidth <= 800) return;

  const follower = document.querySelector(".mouse-follower");
  if (!follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderFollower() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    follower.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(renderFollower);
  }

  requestAnimationFrame(renderFollower);
}
