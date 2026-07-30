const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".mode-picker button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".mode-picker button")
      .forEach((item) => item.classList.remove("active"));

    button.classList.add("active");
  });
});

const form = document.getElementById("waitlist-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = new FormData(form).get("email");
  formMessage.textContent =
    `Thanks! ${email} has been added to this demo waitlist.`;
  formMessage.style.color = "#61e1bd";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
