export function createAboutSection() {
  const section = document.createElement("section");
  section.className = "section";
  section.id = "about";

  section.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">About</h2>
      <p class="section-subtitle">
        Computer Engineering @ UC · software, embedded systems, and human-friendly tools.
      </p>
    </div>

    <div class="about-layout">
      <div class="about-left">
        <h1 class="hero-title">
          Hi, I'm <span>Mouli Suri</span>.
        </h1>
        <p class="hero-sub">
          Computer Engineering student at the University of Cincinnati, building things that are reliable,
          a little bit clever, and actually useful.
        </p>

        <div class="about-pill-row">
          <span class="about-pill">IT Service Desk · UC</span>
          <span class="about-pill">Full-stack & backend</span>
          <span class="about-pill">Embedded & robotics</span>
          <span class="about-pill">Global experience (India · Taiwan)</span>
        </div>

        <div class="about-actions">
          <a class="btn btn-primary" href="#contact">Contact me</a>
          <a
            class="btn btn-ghost"
            href="https://www.linkedin.com/in/moulisuri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn
          </a>
        </div>

        <div class="about-body">
          <p>
            I’ve worked across IT support, server infrastructure, backend tools, and hands-on hardware:
            from re-imaging 100+ systems at the Lindner IT Service Desk to building C++ automation tools
            and Arduino-based robots in international workshops.
          </p>
          <p>
            I like taking vague or messy technical problems and turning them into clear systems with good
            documentation, clean interfaces, and real impact for the people using them.
          </p>
        </div>
      </div>

      <aside class="about-right">
        <div class="avatar-shell">
          <div class="avatar-inner">
            <img
              src="img/headshot.jpg"
              alt="Photo of Mouli Suri"
              class="avatar-img"
            />
          </div>
        </div>

        <div class="about-meta-card">
          <div class="about-meta-title">Quick snapshot</div>
          <div class="about-meta-list">
            <span>🎓 B.S. Computer Engineering · UC · Class of 2026</span>
            <span>💻 IT Service Desk · server & endpoint support</span>
            <span>🤖 Embedded systems & robotics labs (PIC, Arduino)</span>
            <span>🌏 International PBL workshop · Taipei Tech</span>
          </div>
        </div>
      </aside>
    </div>
  `;

  return section;
}