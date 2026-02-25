import "./style.css";
import { initCursor } from "./components/cursor.js";
import { initNav } from "./components/nav.js";
import { initScrollReveal } from "./components/scrollReveal.js";
import { renderProjects } from "./components/projects.js";
import { renderSkills } from "./components/skills.js";
import { initCounters } from "./components/counters.js";
import { initContact } from "./components/contact.js";
import { initProgressBar } from "./components/progressBar.js";

document.querySelector("#app").innerHTML = `
  <div class="cursor" id="cursor"></div>
  <div class="cursor-follower" id="cursor-follower"></div>
  <div id="progress-bar" style="width:0%"></div>

  <!-- Navigation -->
  <nav id="navbar">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
      <a href="#hero" class="display-font text-xl font-bold gold-gradient tracking-wider">KE.</a>
      <div class="hidden md:flex items-center gap-10">
        <a href="#about" style="color:var(--slate-400);letter-spacing:.08em;font-size:.8rem;text-transform:uppercase;transition:color .2s" onmouseover="this.style.color='var(--amber)'" onmouseout="this.style.color='var(--slate-400)'">About</a>
        <a href="#work" style="color:var(--slate-400);letter-spacing:.08em;font-size:.8rem;text-transform:uppercase;transition:color .2s" onmouseover="this.style.color='var(--amber)'" onmouseout="this.style.color='var(--slate-400)'">Experience</a>
        <a href="#projects" style="color:var(--slate-400);letter-spacing:.08em;font-size:.8rem;text-transform:uppercase;transition:color .2s" onmouseover="this.style.color='var(--amber)'" onmouseout="this.style.color='var(--slate-400)'">Projects</a>
        <a href="#skills" style="color:var(--slate-400);letter-spacing:.08em;font-size:.8rem;text-transform:uppercase;transition:color .2s" onmouseover="this.style.color='var(--amber)'" onmouseout="this.style.color='var(--slate-400)'">Skills</a>
        <a href="#contact" class="btn-primary">Hire Me</a>
      </div>
      <button id="menu-btn" class="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
        <span class="block w-6 h-px" style="background:var(--amber)"></span>
        <span class="block w-4 h-px" style="background:var(--amber)"></span>
        <span class="block w-6 h-px" style="background:var(--amber)"></span>
      </button>
    </div>
    <div id="mobile-menu" class="hidden md:hidden absolute w-full top-full left-0 border-t py-8 px-6" style="border-color:rgba(212,168,83,0.1);background:rgba(13,15,20,0.98);backdrop-filter:blur(20px)">
      <div class="flex flex-col gap-6">
        <a href="#about" class="mobile-nav-link text-lg" style="color:var(--slate-200)">About</a>
        <a href="#work" class="mobile-nav-link text-lg" style="color:var(--slate-200)">Experience</a>
        <a href="#projects" class="mobile-nav-link text-lg" style="color:var(--slate-200)">Projects</a>
        <a href="#skills" class="mobile-nav-link text-lg" style="color:var(--slate-200)">Skills</a>
        <a href="#contact" class="btn-primary text-center mt-2">Hire Me</a>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden" style="background:var(--slate-900)">
    <div class="glow-amber absolute w-[800px] h-[800px] -top-40 -right-40 rounded-full opacity-60"></div>
    <div class="absolute w-[400px] h-[400px] bottom-20 -left-20 rounded-full" style="background:radial-gradient(circle,rgba(212,168,83,0.06) 0%,transparent 70%)"></div>
    <div class="absolute inset-0 opacity-5" style="background-image:linear-gradient(rgba(212,168,83,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(212,168,83,0.5) 1px,transparent 1px);background-size:60px 60px"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-6 animate-fade-up" style="animation-delay:.1s;opacity:0">
            <div class="w-8 h-px" style="background:var(--amber)"></div>
            <span style="color:var(--amber);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;font-weight:600">Associate Product Manager &middot; Lagos, Nigeria</span>
          </div>
          <h1 class="display-font font-bold leading-tight mb-6 animate-fade-up" style="animation-delay:.25s;opacity:0;font-size:clamp(2.8rem,6.5vw,5.2rem);color:var(--white)">
            Kafayat<br/><span class="gold-gradient">Egbaaji</span>
          </h1>
          <p class="text-lg leading-relaxed mb-10 max-w-lg animate-fade-up" style="animation-delay:.4s;opacity:0;color:var(--slate-400)">
          I turn user problems into clear product requirements - bridging healthtech, education, and creative platforms with structured thinking and empathetic execution.
          With a unique blend of analytical rigor from a BSc in Soil Science and hands-on leadership experience managing a 13-member sales team, I bring a customer-focused, data-comfortable approach to product management.
          </p>
          <div class="flex flex-wrap gap-4 animate-fade-up" style="animation-delay:.55s;opacity:0">
            <a href="#projects" class="btn-primary">View My Work</a>
            <a href="#contact" class="btn-outline">Let's Talk</a>
          </div>
        </div>

        <!-- Visual -->
        <div class="relative justify-center hidden lg:flex animate-fade-in" style="animation-delay:.5s;opacity:0">
          <div class="float-anim relative">
            <div class="relative w-80 h-96" style="border:1px solid rgba(212,168,83,0.2)">
              <div class="w-full h-full" style="background:linear-gradient(135deg,var(--slate-700) 0%,var(--slate-800) 100%);display:flex;align-items:center;justify-content:center;overflow:hidden">
                <div class="relative flex flex-col items-center">
                  <div class="rounded-full mb-4" style="width:100px;height:100px;background:linear-gradient(135deg,var(--amber),var(--amber-light));opacity:0.15"></div>
                  <div class="absolute top-0" style="width:100px;height:100px;border-radius:50%;overflow:hidden;background:var(--slate-600);display:flex;align-items:center;justify-content:center">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="22" r="12" fill="rgba(212,168,83,0.5)"/>
                      <ellipse cx="30" cy="50" rx="20" ry="12" fill="rgba(212,168,83,0.3)"/>
                    </svg>
                  </div>
                  <p class="display-font mt-16 text-3xl font-bold gold-gradient">KE</p>
                </div>
              </div>
              <div class="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2" style="border-color:var(--amber)"></div>
              <div class="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2" style="border-color:var(--amber)"></div>
              <div class="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2" style="border-color:var(--amber)"></div>
              <div class="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2" style="border-color:var(--amber)"></div>
            </div>
            <div class="absolute -right-12 top-8 px-4 py-3 rounded-sm" style="background:var(--slate-700);border:1px solid rgba(212,168,83,0.2)">
              <p class="display-font text-2xl font-bold gold-gradient">2+</p>
              <p style="font-size:.7rem;color:var(--slate-400);text-transform:uppercase;letter-spacing:.1em">Years Exp.</p>
            </div>
            <div class="absolute -left-12 bottom-12 px-4 py-3 rounded-sm" style="background:var(--slate-700);border:1px solid rgba(212,168,83,0.2)">
              <p class="display-font text-2xl font-bold gold-gradient">3</p>
              <p style="font-size:.7rem;color:var(--slate-400);text-transform:uppercase;letter-spacing:.1em">Products</p>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style="animation-delay:1s;opacity:0">
        <span style="font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;color:var(--slate-400)">Scroll</span>
        <div class="w-px h-12" style="background:linear-gradient(180deg,var(--amber),transparent)"></div>
      </div>
    </div>
  </section>

  <!-- About / Metrics -->
  <section id="about" class="py-28 relative" style="background:var(--slate-800)">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 reveal">
        <div class="metric-card">
          <p class="display-font font-bold gold-gradient mb-1" style="font-size:2.5rem" data-count="2">0</p>
          <p style="color:var(--slate-400);font-size:.85rem;text-transform:uppercase;letter-spacing:.1em">Years of Experience</p>
        </div>
        <div class="metric-card">
          <p class="display-font font-bold gold-gradient mb-1" style="font-size:2.5rem" data-count="3">0</p>
          <p style="color:var(--slate-400);font-size:.85rem;text-transform:uppercase;letter-spacing:.1em">Products Shipped</p>
        </div>
        <div class="metric-card">
          <p class="display-font font-bold gold-gradient mb-1" style="font-size:2.5rem" data-count="3">0</p>
          <p style="color:var(--slate-400);font-size:.85rem;text-transform:uppercase;letter-spacing:.1em">Certifications</p>
        </div>
        <div class="metric-card">
          <p class="display-font font-bold gold-gradient mb-1" style="font-size:2.5rem" data-count="13">0</p>
          <p style="color:var(--slate-400);font-size:.85rem;text-transform:uppercase;letter-spacing:.1em">Team Members Led</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-20 items-start">
        <div class="reveal-left">
          <div class="relative mb-8">
            <span class="section-num">01</span>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-6 h-px" style="background:var(--amber)"></div>
              <span style="color:var(--amber);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;font-weight:600">About Me</span>
            </div>
            <h2 class="display-font font-bold" style="font-size:clamp(2rem,4vw,3rem);color:var(--white);line-height:1.15">Clear Requirements.<br/><span class="gold-gradient">Real Impact.</span></h2>
          </div>
          <p class="leading-relaxed mb-5" style="color:var(--slate-400)">
           

I am an Associate Product Manager with 2+ years of experience building user-focused products across healthtech, education, and customer-facing platforms. I specialise in writing airtight PRDs, mapping complex user flows, and collaborating with engineering, design, and non-technical stakeholders.






          </p>
          <p class="leading-relaxed mb-5" style="color:var(--slate-400)">
            My background is unique: a BSc from Obafemi Awolowo University, 6 years leading a 13-member sales team at Oriflame, and focused product management training that sharpened my instincts for customer behaviour, retention, and metrics-driven iteration. I am currently enhancing my PM expertise through a structured Product Management course with Enoverlab, strengthening my skills in product discovery, delivery, and strategic decision-making.


          <p class="leading-relaxed mb-8" style="color:var(--slate-400)">
          Data-comfortable, customer-focused, and committed to building reliable digital products — especially in payments and financial technology
          </p>
          </p>
          <a href="mailto:omololaegbaajis@gmail.com" class="btn-outline">Get In Touch</a>
        </div>

        <!-- Timeline -->
        <div class="reveal-right">
          <div class="relative pl-8 border-l" style="border-color:rgba(212,168,83,0.15)">
            <div class="timeline-item relative mb-10 pl-2">
              <div class="timeline-line"></div>
              <span style="color:var(--amber);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase">Apr 2025 – Present</span>
              <h3 class="display-font font-semibold text-xl mt-1 mb-1" style="color:var(--white)">Product Manager</h3>
              <p style="color:var(--amber-light);font-size:.9rem;margin-bottom:.5rem">Apr 2025 – Present | Product Manager | HopeRays · Healthtech · Lagos
 </p>
              <p style="color:var(--slate-400);font-size:.9rem;line-height:1.7">Own full product lifecycle across the HopeRays platform and associated solutions.

Write PRDs, user stories, and acceptance criteria while navigating sensitive journeys in a regulated environment.

Align cross-functional teams across engineering, design, and operations to deliver impactful solutions.

Apply ongoing learnings from the Enoverlab Product Management course to enhance prioritisation, decision-making, and product discovery.

</p>
            </div>
            <div class="timeline-item relative mb-10 pl-2">
              <span style="color:var(--amber);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase">Jan 2018 – Dec 2023</span>
              <h3 class="display-font font-semibold text-xl mt-1 mb-1" style="color:var(--white)">Senior Manager</h3>
              <p style="color:var(--amber-light);font-size:.9rem;margin-bottom:.5rem">Jan 2018 – Dec 2023 | Senior Manager | Oriflame International · Lagos
</p>
              <p style="color:var(--slate-400);font-size:.9rem;line-height:1.7">Led a 13-member team managing #3M+ in sales.

Developed deep instincts for customer behaviour, retention, and growth metrics — informing product decisions today.


</p>
            </div>
            <div class="timeline-item relative mb-10 pl-2">
              <span style="color:var(--amber);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase">Oct 2022 – Dec 2022</span>
              <h3 class="display-font font-semibold text-xl mt-1 mb-1" style="color:var(--white)">Product Manager Intern</h3>
              <p style="color:var(--amber-light);font-size:.9rem;margin-bottom:.5rem">Oct 2022 – Dec 2022 | Product Manager Intern | Side Hustle · Remote
</p>
              <p style="color:var(--slate-400);font-size:.9rem;line-height:1.7">CConducted user research and wrote PRDs and user stories for MVP features.

Supported Agile sprint execution.

Completed CRM and PM certifications.

</p>
            </div>
            <div class="timeline-item relative pl-2">
              <span style="color:var(--amber);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase">Graduated 2024</span>
              <h3 class="display-font font-semibold text-xl mt-1 mb-1" style="color:var(--white)">B.Sc. Soil Science &amp; Land Resources</h3>
              <p style="color:var(--amber-light);font-size:.9rem;margin-bottom:.5rem">B.Sc. Soil Science & Land Resources | Obafemi Awolowo University · Ile-Ife | 2024</p>
              <p style="color:var(--slate-400);font-size:.9rem;line-height:1.7">

Built analytical rigor and systems thinking foundational to structured product discovery and data analysis.</p>
            </div>
        <div class="timeline-item relative pl-2">
              <span style="color:var(--amber);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase">Ongoing</span>
              <h3 class="display-font font-semibold text-xl mt-1 mb-1" style="color:var(--white)">Ongoing | Product Management Course | Enoverlab
</h3>
              <p style="color:var(--amber-light);font-size:.9rem;margin-bottom:.5rem">Deepening expertise in product discovery, delivery, prioritisation, and metrics-driven decision-making.
</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section id="work" class="py-28 relative" style="background:var(--slate-900)">
    <div class="glow-amber absolute w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 rounded-full"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div class="text-center mb-16 reveal">
        <div class="flex items-center justify-center gap-3 mb-3">
          <div class="w-6 h-px" style="background:var(--amber)"></div>
          <span style="color:var(--amber);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;font-weight:600">How I Work</span>
          <div class="w-6 h-px" style="background:var(--amber)"></div>
        </div>
        <h2 class="display-font font-bold" style="font-size:clamp(2rem,4vw,3rem);color:var(--white)">My Product <span class="gold-gradient">Process</span></h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        ${[
          {
            num: "01",
            title: "Discover",
            icon: "◎",
            desc: "User interviews, market analysis, and competitive research to uncover real problems.",
          },
          {
            num: "02",
            title: "Define",
            icon: "◈",
            desc: "Translate insights into crisp PRDs, clear user stories, and edge case analyses.",
          },
          {
            num: "03",
            title: "Develop",
            icon: "◉",
            desc: "Collaborate closely with engineering and design through Agile sprints, prioritising backlogs and unblocking the team.",
          },
          {
            num: "04",
            title: "Deliver",
            icon: "◆",
            desc: "Release with confidence, measure impact with data, and iterate for continuous improvement.",
          },
        ]
          .map(
            (step, i) => `
          <div class="reveal project-card p-8 rounded-sm" style="transition-delay:${i * 0.1}s">
            <div class="flex justify-between items-start mb-6">
              <span style="font-size:2rem;color:rgba(212,168,83,0.3)">${step.icon}</span>
              <span class="display-font font-bold" style="font-size:3rem;color:rgba(212,168,83,0.07);line-height:1">${step.num}</span>
            </div>
            <h3 class="display-font font-bold text-xl mb-3" style="color:var(--white)">${step.title}</h3>
            <p style="color:var(--slate-400);font-size:.9rem;line-height:1.7">${step.desc}</p>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="py-28 relative" style="background:var(--slate-800)">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div class="reveal-left relative">
          <span class="section-num">02</span>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-6 h-px" style="background:var(--amber)"></div>
            <span style="color:var(--amber);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;font-weight:600">Selected Work</span>
          </div>
          <h2 class="display-font font-bold" style="font-size:clamp(2rem,4vw,3rem);color:var(--white)">Projects That <span class="gold-gradient">Define Me</span></h2>
        </div>
        <div class="flex gap-3 reveal-right" id="filter-btns">
          <button class="filter-btn active skill-tag" data-filter="all">All</button>
          <button class="filter-btn skill-tag" data-filter="healthtech">Healthtech</button>
          <button class="filter-btn skill-tag" data-filter="creative">Creative</button>
          <button class="filter-btn skill-tag" data-filter="saas">SaaS</button>
        </div>
      </div>
      <div id="projects-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills" class="py-28 relative" style="background:var(--slate-900)">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-20 items-start">
        <div class="reveal-left">
          <div class="relative mb-8">
            <span class="section-num">03</span>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-6 h-px" style="background:var(--amber)"></div>
              <span style="color:var(--amber);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;font-weight:600">Expertise</span>
            </div>
            <h2 class="display-font font-bold" style="font-size:clamp(2rem,4vw,3rem);color:var(--white)">Skills &amp; <span class="gold-gradient">Tools</span></h2>
          </div>
          <p class="leading-relaxed mb-8" style="color:var(--slate-400)">
            A practical toolkit sharpened across healthtech, education, and direct sales — combining structured PM methodology with hands-on cross-functional delivery.
          </p>
          <div id="skills-tags" class="flex flex-wrap gap-3"></div>
        </div>
        <div id="skills-bars" class="reveal-right space-y-7"></div>
      </div>
    </div>
  </section>

  <!-- Certifications -->
  <section class="py-20 relative" style="background:var(--slate-800);border-top:1px solid rgba(212,168,83,0.08);border-bottom:1px solid rgba(212,168,83,0.08)">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="text-center mb-12 reveal">
        <div class="flex items-center justify-center gap-3 mb-3">
          <div class="w-6 h-px" style="background:var(--amber)"></div>
          <span style="color:var(--amber);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;font-weight:600">Credentials</span>
          <div class="w-6 h-px" style="background:var(--amber)"></div>
        </div>
        <h2 class="display-font font-bold" style="font-size:clamp(1.8rem,3vw,2.5rem);color:var(--white)">Education &amp; <span class="gold-gradient">Certifications</span></h2>
      </div>
      <div class="grid md:grid-cols-3 gap-6 mb-6">
        ${[
          {
            title: "Product Management",
            issuer: "BeTechified",
            year: "2024",
            icon: "🎓",
            detail: " PM methodology, roadmapping, and product strategy.",
          },
          {
            title: "Product Management",
            issuer: "Side Hustle",
            year: "2022",
            icon: "📦",
            detail: "Agile delivery, user research, PRD writing, MVP scoping.",
          },
          {
            title: "Customer Relationship Management",
            issuer: "Side Hustle",
            year: "2022",
            icon: "🤝",
            detail:
              "CRM best practices, customer lifecycle, retention strategies.",
          },
        ]
          .map(
            (c, i) => `
          <div class="reveal project-card p-7 rounded-sm" style="transition-delay:${i * 0.1}s">
            <div class="text-3xl mb-4">${c.icon}</div>
            <p style="color:var(--amber);font-size:.75rem;text-transform:uppercase;letter-spacing:.12em;font-weight:600;margin-bottom:.4rem">${c.issuer} &middot; ${c.year}</p>
            <h3 class="display-font font-bold text-lg mb-2" style="color:var(--white)">${c.title}</h3>
            <p style="color:var(--slate-400);font-size:.875rem;line-height:1.6">${c.detail}</p>
          </div>
        `,
          )
          .join("")}
      </div>
      <div class="p-6 reveal" style="background:var(--slate-700);border:1px solid rgba(212,168,83,0.1)">
        <div class="flex flex-col md:flex-row md:items-center gap-4">
          <div class="flex-1">
            <p style="color:var(--amber);font-size:.75rem;text-transform:uppercase;letter-spacing:.12em;font-weight:600;margin-bottom:.3rem">Obafemi Awolowo University &middot; 2024</p>
            <h3 class="display-font font-bold text-lg" style="color:var(--white)">B.Sc. Soil Science &amp; Land Resources Management</h3>
          </div>
          <p style="color:var(--slate-400);font-size:.875rem;max-width:380px;line-height:1.6">Analytical rigour, systems thinking, and research methodology — foundations that directly inform structured product discovery and data analysis.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-28 relative" style="background:var(--slate-900)">
    <div class="max-w-4xl mx-auto px-6 lg:px-12">
      <div class="text-center mb-16 reveal">
        <div class="flex items-center justify-center gap-3 mb-3">
          <div class="w-6 h-px" style="background:var(--amber)"></div>
          <span style="color:var(--amber);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;font-weight:600">Get In Touch</span>
          <div class="w-6 h-px" style="background:var(--amber)"></div>
        </div>
        <h2 class="display-font font-bold mb-4" style="font-size:clamp(2rem,4vw,3.5rem);color:var(--white)">Let's Build Something <span class="gold-gradient">Meaningful</span></h2>
        <p style="color:var(--slate-400);font-size:1rem;max-width:500px;margin:0 auto">
Open to PM roles, collaborations, or conversations about product. Based in Lagos — available remotely or on-site.</p>
      </div>

      <form id="contact-form" class="reveal space-y-5" style="background:var(--slate-800);border:1px solid rgba(212,168,83,0.08);padding:2.5rem">
        <div class="grid md:grid-cols-2 gap-5">
          <div>
            <label class="block mb-2" style="color:var(--slate-400);text-transform:uppercase;letter-spacing:.08em;font-size:.75rem">Name</label>
            <input type="text" placeholder="Your name" class="contact-input" required />
          </div>
          <div>
            <label class="block mb-2" style="color:var(--slate-400);text-transform:uppercase;letter-spacing:.08em;font-size:.75rem">Email</label>
            <input type="email" placeholder="your@email.com" class="contact-input" required />
          </div>
        </div>
        <div>
          <label class="block mb-2" style="color:var(--slate-400);text-transform:uppercase;letter-spacing:.08em;font-size:.75rem">Subject</label>
          <input type="text" placeholder="What's this about?" class="contact-input" />
        </div>
        <div>
          <label class="block mb-2" style="color:var(--slate-400);text-transform:uppercase;letter-spacing:.08em;font-size:.75rem">Message</label>
          <textarea rows="5" placeholder="Tell me about your product role or collaboration..." class="contact-input resize-none"></textarea>
        </div>
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <div class="flex flex-col gap-2">
            <a href="mailto:omololaegbaajis@gmail.com" style="color:var(--slate-400);font-size:.85rem;transition:color .2s" onmouseover="this.style.color='var(--amber)'" onmouseout="this.style.color='var(--slate-400)'">omololaegbaajis@gmail.com</a>
            <a href="tel:+2347014435473" style="color:var(--slate-400);font-size:.85rem;transition:color .2s" onmouseover="this.style.color='var(--amber)'" onmouseout="this.style.color='var(--slate-400)'">+234 701 443 5473</a>
          </div>
          <button type="submit" class="btn-primary" id="submit-btn">Send Message</button>
        </div>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer style="background:var(--slate-900);border-top:1px solid rgba(212,168,83,0.08)" class="py-10">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="display-font text-xl font-bold gold-gradient tracking-wider">Kafayat Egbaaji.</p>
      <p style="color:var(--slate-400);font-size:.85rem">&copy; 2025 Kafayat Egbaaji &middot; Associate Product Manager &middot; Lagos, Nigeria</p>
      <div class="flex gap-6">
        <a href="mailto:omololaegbaajis@gmail.com" style="color:var(--slate-400);font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;transition:color .2s" onmouseover="this.style.color='var(--amber)'" onmouseout="this.style.color='var(--slate-400)'">Email</a>
        <a href="tel:+2347014435473" style="color:var(--slate-400);font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;transition:color .2s" onmouseover="this.style.color='var(--amber)'" onmouseout="this.style.color='var(--slate-400)'">Phone</a>
        <a href="https://www.linkedin.com/in/kafayat-egbaaji-130a27224?" style="color:var(--slate-400);font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;transition:color .2s" onmouseover="this.style.color='var(--amber)'" onmouseout="this.style.color='var(--slate-400)'">LinkedIn</a>
      </div>
    </div>
  </footer>
`;

initCursor();
initNav();
initScrollReveal();
renderProjects();
renderSkills();
initCounters();
initContact();
initProgressBar();
