export function createExperienceSection() {
  const section = document.createElement("section");
  section.className = "section";
  section.id = "experience";

  section.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">Experience</h2>
      <p class="section-subtitle">Where I've learned by building, fixing, and shipping.</p>
    </div>

    <div class="experience-item">
      <div class="exp-header">
        <div>
          <div class="exp-main">Lindner IT Service Desk · University of Cincinnati</div>
          <div class="exp-role">IT Support Specialist</div>
        </div>
        <div class="exp-meta">May 2024 – Present · Cincinnati, OH</div>
      </div>
      <ul class="exp-bullets">
        <li>Respond to 20+ help desk tickets weekly through ServiceNow, maintaining a 95% resolution rate.</li>
        <li>Use Bomgar for remote troubleshooting, resolving software, OS, and account issues for students and staff.</li>
        <li>Re-image and configure 100+ systems to keep lab and faculty devices secure, updated, and ready for use.</li>
      </ul>
    </div>

    <div class="experience-item">
      <div class="exp-header">
        <div>
          <div class="exp-main">Technology Tailor Made</div>
          <div class="exp-role">Server & Backend Intern</div>
        </div>
        <div class="exp-meta">Jan 2024 – Apr 2024 · Cincinnati, OH</div>
      </div>
      <ul class="exp-bullets">
        <li>Maintained server infrastructure for 50+ clients, helping ensure 99% uptime across on-prem and cloud systems.</li>
        <li>Developed two server-side tools in C++ that automated repetitive administrative tasks, reducing manual work by ~15%.</li>
      </ul>
    </div>

    <div class="experience-item">
      <div class="exp-header">
        <div>
          <div class="exp-main">HCL Tech</div>
          <div class="exp-role">Engineering Intern (Remote)</div>
        </div>
        <div class="exp-meta">Jun 2023 – Aug 2023 · Remote</div>
      </div>
      <ul class="exp-bullets">
        <li>Improved system efficiency by ~20% by analyzing and resolving issues in data storage and automation flows.</li>
        <li>Worked with Google Cloud Platform to support scalable infrastructure and internal tooling.</li>
      </ul>
    </div>

    <div class="experience-item">
      <div class="exp-header">
        <div>
          <div class="exp-main">Predulive Innovative Labs</div>
          <div class="exp-role">STEM Instructor & Drone Engineer</div>
        </div>
        <div class="exp-meta">May 2022 – Sep 2022 · Delhi, India</div>
      </div>
      <ul class="exp-bullets">
        <li>Taught 3rd–8th grade students how to design, assemble, and safely operate custom drones.</li>
        <li>Designed and built 15 drones for agricultural monitoring, improving crop tracking for government projects.</li>
      </ul>
    </div>
  `;

  return section;
}