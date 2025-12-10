export function createSkillsSection() {
  const section = document.createElement("section");
  section.className = "section";
  section.id = "skills";

  section.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">Skills</h2>
      <p class="section-subtitle">Technical skills that show up in my coursework, jobs, and projects.</p>
    </div>

    <div class="skills-grid">
      <div class="skill-block">
        <div class="skill-block-title">Programming</div>
        <div class="skill-block-body">
          Python, C, C++, JavaScript, TypeScript, SQL, Bash, PIC Assembly
        </div>
      </div>
      <div class="skill-block">
        <div class="skill-block-title">Web & Backend</div>
        <div class="skill-block-body">
          Next.js, React, Tailwind CSS, FastAPI, Prisma ORM, Clerk Authentication, REST APIs
        </div>
      </div>
      <div class="skill-block">
        <div class="skill-block-title">Tools & Platforms</div>
        <div class="skill-block-body">
          Git, GitHub, Vercel, Render, MPLAB X IDE, Arduino, Linux, ServiceNow, Bomgar
        </div>
      </div>
      <div class="skill-block">
        <div class="skill-block-title">Data & ML</div>
        <div class="skill-block-body">
          Pandas, NumPy, machine learning fundamentals, statistical analysis
        </div>
      </div>
      <div class="skill-block">
        <div class="skill-block-title">Systems & Embedded</div>
        <div class="skill-block-body">
          Linux kernel compilation, device drivers, multithreading, mutexes & semaphores,
          reader–writer locks, timer/interrupt programming, digital I/O, A/D converters, circuit analysis
        </div>
      </div>
      <div class="skill-block">
        <div class="skill-block-title">Soft Skills</div>
        <div class="skill-block-body">
          Technical communication, public speaking, mentoring, customer support, cross-functional collaboration
        </div>
      </div>
    </div>
  `;

  return section;
}