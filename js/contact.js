export function createContactSection() {
  const section = document.createElement("section");
  section.className = "section";
  section.id = "contact";

  section.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">Contact</h2>
      <p class="section-subtitle">
        Best ways to reach me for internships, projects, or questions.
      </p>
    </div>

    <p style="font-size:0.93rem; color:#e5e7eb;">
      I'm currently looking for 2025 internships in software engineering, embedded systems,
      and product-adjacent roles. If something I'm doing matches what you're building, I'd love to talk.
    </p>

    <div class="contact-row">
      <a class="contact-pill" href="mailto:surimi@mail.uc.edu">surimi@mail.uc.edu</a>
      <a class="contact-pill" href="tel:+15139818030">+1 (513) 981-8030</a>
      <a
        class="contact-pill"
        href="https://www.linkedin.com/in/moulisuri/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        class="contact-pill"
        href="https://github.com/surimouli"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  `;

  return section;
}