export function createProjectsSection() {
  const section = document.createElement("section");
  section.className = "section";
  section.id = "projects";

  section.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">Projects</h2>
      <p class="section-subtitle">A few things I've built for class, work, and fun.</p>
    </div>

    <div class="project-item">
      <div class="project-title">MoneyTracker · Personal Finance Web App</div>
      <div class="project-tag">Full-stack · In progress</div>
      <ul class="project-bullets">
        <li>Building a personal budgeting dashboard using Next.js, Tailwind CSS, FastAPI, and PostgreSQL.</li>
        <li>Implements authentication with Clerk and Prisma ORM for secure, multi-user data storage.</li>
      </ul>
    </div>

    <div class="project-item">
      <div class="project-title">International PBL Robot · Taipei Tech</div>
      <div class="project-tag">Robotics · 2024</div>
      <ul class="project-bullets">
        <li>Designed and programmed a robot using Arduino to autonomously detect and pick up red and green boxes.</li>
        <li>Used 3D printing to create custom claws and mechanical components for robust gripping.</li>
      </ul>
    </div>

    <div class="project-item">
      <div class="project-title">Embedded Systems Labs · PIC16F886</div>
      <div class="project-tag">Embedded</div>
      <ul class="project-bullets">
        <li>Implemented interrupt-driven programs in PIC assembly using Timer0, A/D converters, and external inputs.</li>
        <li>Built a 3-bit calculator on a demo board using LEDs and push buttons for I/O.</li>
      </ul>
    </div>
  `;

  return section;
}