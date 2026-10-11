const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", open);
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
  });
});

function showMessage(event) {
  event.preventDefault();
  alert("Add your deployed project URL in index.html.");
}

function profileMessage(event) {
  event.preventDefault();
  alert("Add your GitHub, LinkedIn or LeetCode URL in index.html.");
}

// Reveal sections as they enter the viewport.
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Highlight the section currently being viewed.
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navItems.forEach((item) => {
          item.classList.toggle(
            "active",
            item.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
