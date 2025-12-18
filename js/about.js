export function createAboutSection() {
  const section = document.createElement("section");
  section.className = "section";
  section.id = "about";

  section.innerHTML = `
    <div style="display:flex; justify-content:center; margin-bottom:14px;">
      <div class="badge">
        <span class="badge-dot"></span>
        Available for 2025 internships & opportunities ✦
      </div>
    </div>

    <div class="hero-wrap">
      <div>
        <div class="kicker">Computer Engineer · Builder · Creative Technologist</div>

        <h1 class="hero-title">
          Hi, I’m <span class="name">Mouli</span> ♡
        </h1>

        <p class="hero-sub">
          I build <span class="hl">real systems</span> — from embedded microcontroller projects and OS-level concurrency work
          to polished web apps — with <span class="hl2">design taste</span> and serious attention to detail.
        </p>

        <div class="stat-row">
          <div class="stat">
            <b>100+</b>
            <span>Systems re-imaged / supported</span>
          </div>
          <div class="stat">
            <b>3+</b>
            <span>Industries (IT, infra, robotics)</span>
          </div>
          <div class="stat">
            <b>Global</b>
            <span>Built & learned in India + Taiwan</span>
          </div>
        </div>

        <div class="actions">
          <a class="btn btn-primary" href="#projects">View My Work</a>
          <a class="btn btn-ghost" href="#contact">Let’s Connect ♡</a>
        </div>
      </div>

      <aside class="card-aside">
        <div class="avatar-shell">
          <div class="avatar-inner">
            <img class="avatar-img" src="img/headshot.jpg" alt="Mouli Suri headshot" />
          </div>
        </div>

        <div class="aside-tags">
          <div class="tag"><i></i> Embedded systems (PIC/Arduino) + interrupts</div>
          <div class="tag"><i></i> Systems & concurrency (mutexes, semaphores)</div>
          <div class="tag"><i></i> Full-stack apps (Next.js + FastAPI)</div>
          <div class="tag"><i></i> Teaching/mentoring + clear communication</div>
        </div>
      </aside>
    </div>
  `;

  return section;
}