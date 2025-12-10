import { createAboutSection } from "./about.js";
import { createExperienceSection } from "./experience.js";
import { createProjectsSection } from "./projects.js";
import { createSkillsSection } from "./skills.js";
import { createContactSection } from "./contact.js";

const app = document.getElementById("app");

function renderPage() {
  if (!app) return;
  app.innerHTML = "";

  app.appendChild(createAboutSection());
  app.appendChild(createExperienceSection());
  app.appendChild(createProjectsSection());
  app.appendChild(createSkillsSection());
  app.appendChild(createContactSection());

  setupScrollReveal();
}

function setupScrollReveal() {
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  sections.forEach(sec => observer.observe(sec));
}

renderPage();

// footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}