const projects = [
  {
    title: "MyLabScope",
    category: "healthtech",
    tag: "Healthtech · SaaS",
    desc: "A multi-tenant laboratory management system built for labs, hospitals, and organisations. Led discovery, defined RBAC specifications, wrote detailed PRDs, and managed sprint planning.Defined user flows for 5 role types (lab owner, hospital admin, org owner, staff, patient)Wrote acceptance criteria for sensitive result approval and audit trail features Led edge case analysis for multi-tenant data isolation and access permissions.",
    metrics: ["Multi-tenant", "RBAC System", "Real-time Notifications"],
    tools: ["Jira", "ClickUp", "Figma"],
    color: "#10b981",
    year: "2025",
    highlights: [
      "Defined user flows for 5 distinct role types (lab owner, hospital admin, org owner, staff, patient)",
      "Wrote acceptance criteria for sensitive result approval and audit trail features",
      "Led edge case analysis for multi-tenant data isolation and access permissions",
    ],
    url: "https://www.mylabscope.com/",
  },
  {
    title: "Candela Creative Studios",
    category: "creative",
    tag: "Creative Platform",
    desc: "A digital platform built for clients of Candela Creative Studios. Defined product requirements, mapped end-to-end user journeys, and collaborated on brand-aligned UI design for a polished, conversion-optimised experience.",
    metrics: ["Crisp Design", "Performance Optimised", "Responsiveness"],
    tools: ["Jira", "ClickUp", "Figma"],
    color: "#f59e0b",
    year: "2024",
    highlights: [
      "Mapped end-to-end user journeys from first visit to enquiry submission",
      "Defined content hierarchy and information architecture for the services section",
      "Collaborated with design on brand-aligned UI and responsive layout decisions",
    ],
    url: "https://candela-studios-website-f9o9.vercel.app/",
  },
  {
    title: "HopeRays",
    category: "healthtech",
    tag: "Healthtech",
    desc: "Owned the full product lifecycle for the HopeRays platform, supporting sensitive healthcare journeys in a regulated environment. Wrote PRDs, user stories, aligned cross-functional teams, and used metrics and feedback to continuously improve core workflows.",
    metrics: ["Responsiveness", "Accessibility", "User-centred"],
    tools: ["Jira", "ClickUp", "Figma"],
    color: "#ec4899",
    year: "2025",
    highlights: [
      "Owned the full product lifecycle for the HopeRays platform, supporting sensitive healthcare journeys in a regulated environment",
      "Wrote PRDs, user stories, aligned cross-functional teams, and used metrics and feedback to continuously improve core workflows.",
      // "Drove cross-functional alignment between design, operations, and engineering on product decisions",
    ],
    url: "https://www.hoperays.org/",
  },
];

export function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const render = (filter = "all") => {
    const filtered =
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter);
    grid.innerHTML = filtered
      .map(
        (p, i) => `
      <div class="project-card reveal rounded-sm p-7 flex flex-col" style="transition-delay:${i * 0.1}s" data-category="${p.category}">
        <div class="flex items-start justify-between mb-5">
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 rounded-full flex-shrink-0" style="background:${p.color}"></div>
            <span class="skill-tag">${p.tag}</span>
          </div>
          <span style="color:var(--slate-400);font-size:.8rem">${p.year}</span>
        </div>
        <h3 class="display-font font-bold text-xl mb-3" style="color:var(--white)">${p.title}</h3>
        <p class="leading-relaxed mb-5" style="color:var(--slate-400);font-size:.9rem">${p.desc}</p>
        <!-- Highlights -->
        <ul class="mb-6 space-y-2 flex-1">
          ${p.highlights
            .map(
              (h) => `
            <li class="flex items-start gap-2" style="font-size:.85rem;color:var(--slate-400)">
              <span style="color:var(--amber);margin-top:.1rem;flex-shrink:0">›</span>
              <span>${h}</span>
            </li>
          `,
            )
            .join("")}
        </ul>
        <!-- Metrics -->
        <div class="grid grid-cols-3 gap-3 mb-5 pt-5 border-t" style="border-color:rgba(212,168,83,0.08)">
          ${p.metrics
            .map(
              (m) => `
            <div>
              <p class="font-bold" style="color:var(--amber-light);font-size:.85rem;line-height:1.3">${m}</p>
            </div>
          `,
            )
            .join("")}
        </div>
        <!-- Tools -->
        <div class="flex flex-wrap gap-2">
          ${p.tools.map((t) => `<span class="skill-tag">${t}</span>`).join("")}
        </div>
          <div class="pt-4 border-t" style="border-color:rgba(212,168,83,0.08)">
      <a href="${p.url}" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="inline-flex items-center gap-2 text-sm font-medium transition-colors"
         style="color:var(--amber)"
      >
        View Project
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" 
             stroke="currentColor" stroke-width="2" stroke-linecap="round" 
             stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </div>
  </div>

      </div>
    `,
      )
      .join("");

    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (e) => e.isIntersecting && e.target.classList.add("visible"),
          );
        },
        { threshold: 0.1 },
      );
      grid.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 50);
  };

  render();

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.filter);
    });
  });

  const style = document.createElement("style");
  style.textContent = `.filter-btn.active { background: rgba(212,168,83,0.2) !important; border-color: var(--amber) !important; color: var(--amber) !important; }`;
  document.head.appendChild(style);
}
