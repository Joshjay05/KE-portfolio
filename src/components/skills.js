const skills = {
  tags: [
    "PRDs & User Stories",
    "Acceptance Criteria",
    "User Flows ",
    " Edge Case Analysis",
    "Backlog Prioritisation",
    "Sprint Planning",
    "User Research",
    "Market Research",
    "Agile / Scrum",
    "Cross-functional Communication",
    "Stakeholder Management",
    "Jira",
    "ClickUp",
    "Trello",
    "Figma",
    "Notion",
    "Google Analytics",
  ],
  bars: [
    { name: "Product Requirements (PRDs, User Stories)", level: 80 },
    { name: "User Flows & Edge Case Analysis", level: 77 },
    { name: "Backlog Prioritisation & Sprint Planning", level: 85 },
    { name: "Cross-functional Communication", level: 88 },
    // { name: "Funnel & Metrics Analysis", level: 68 },
    { name: "User & Market Research", level: 72 },
  ],
};

export function renderSkills() {
  const tagsEl = document.getElementById("skills-tags");
  const barsEl = document.getElementById("skills-bars");

  if (tagsEl) {
    tagsEl.innerHTML = skills.tags
      .map((s) => `<span class="skill-tag">${s}</span>`)
      .join("");
  }

  if (barsEl) {
    barsEl.innerHTML = skills.bars
      .map(
        (s) => `
      <div class="skill-bar-item">
        <div class="flex justify-between mb-2">
          <span style="color:var(--slate-200);font-size:.9rem">${s.name}</span>
          <span style="color:var(--amber);font-size:.85rem;font-weight:600">${s.level}%</span>
        </div>
        <div style="height:4px;background:rgba(212,168,83,0.1);border-radius:2px;overflow:hidden">
          <div class="skill-fill" data-width="${s.level}" style="height:100%;width:0%;background:linear-gradient(90deg,var(--amber),var(--amber-light));border-radius:2px;transition:width 1s ease"></div>
        </div>
      </div>
    `,
      )
      .join("");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            barsEl.querySelectorAll(".skill-fill").forEach((bar) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.width + "%";
              }, 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(barsEl);
  }
}
