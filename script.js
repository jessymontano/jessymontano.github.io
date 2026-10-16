const en = {
  "meta.title": "Jessica Montaño Lares | Full Stack Developer",
  "meta.description":
    "Jessica Montaño Lares' portfolio, Full Stack C#/.NET, React and Angular developer",
  "sidebar.role": "Full Stack Developer",
  "sidebar.email": "Email",
  "sidebar.cv": "Download resume",
  "tab.profile": "Profile",
  "tab.experience": "Experience",
  "tab.projects": "Projects",
  "profile.title": "Profile",
  "profile.desc": `Information Systems Engineer (degree pending) with experience as a development lead and full stack developer. I've developed modular multi-tenant architectures and built REST APIs with C#/.NET, as well as responsive interfaces with React, Angular and TypeScript, guided by UI/UX prototypes in Figma. I have experience with CI/CD and deployment with Docker on Linux servers.`,
  "profile.skill.title": "Skills",
  "profile.skill.languages": "Languages",
  "profile.skill.tools": "Tools",
  "experience.title": "Experience",
  "experience.hook.title": "Development Lead and Full Stack Developer",
  "experience.hook.company": "Hook Technologies Solutions · Internship",
  "experience.hook.start": "July 2026",
  "experience.hook.end": "October 2026",
  "experience.hook1": `Led a team of 5 interns in the development of a multi-tenant SaaS administration, point of sale, inventory and repair ticket management platform.`,
  "experience.hook2": `Gathered the client's requirements, designed the architecture (modular monolith with Clean Architecture) and planned the project in Jira.`,
  "experience.hook3": `Designed UI/UX prototypes in Figma and developed the frontend using Angular, TypeScript and Tailwind CSS (responsive views and API integration).`,
  "experience.hook4": `Developed the backend with C#, .NET, Entity Framework Core and PostgreSQL: REST API with JWT authentication with refresh tokens, custom roles with granular permissions and catalog and inventory modules (purchase orders, GRNs, RMAs).`,
  "experience.siscomat.title": "Full Stack Developer",
  "experience.siscomat.company":
    "Department of Mathematics, University of Sonora · Social service",
  "experience.siscomat.start": "September 2025",
  "experience.siscomat.end": "May 2026",
  "experience.siscomat1": `Developed SISCOMAT with 2 teammates, a web application that automatically generates certificates for the National Week of Research and Teaching in Mathematics.`,
  "experience.siscomat2": `Designed the solution architecture and user interface prototypes in Figma.`,
  "experience.siscomat3": `Developed the frontend with React, TypeScript and Tailwind CSS, and the backend with C# .NET and PostgreSQL.`,
  "experience.siscomat4": `Implemented CI/CD with GitHub Actions and deployed the production environment using Docker containers on a Linux server.`,
  "projects.title": "Projects",
  "inv.gallery": "Inventory system screenshots",
  "inv.img1": "Inventory system login screen",
  "inv.img2": "Main screen",
  "inv.img3": "Warehouse management screen",
  "inv.img4": "Product management screen",
  "inv.title": "Inventory management system",
  "inv.desc":
    "Reengineering and maintenance project for an inventory management system. Developed for the IT Project Management II class.",
  "inv.link": "Inventory project repository",
  repository: "Repository",
  "tic.gallery": "TicTacToe app screenshots",
  "tic.img1": "TicTacToe app start",
  "tic.img2": "Login modal",
  "tic.img3": "Match lobby waiting for the second player",
  "tic.img4": "TicTacToe match",
  "tic.img5": "Victory screen after finishing a match",
  "tic.img6": "Match history",
  "tic.img7": "Top 10 player leaderboard",
  "tic.desc":
    "App developed with Flutter that allows users to play Tic Tac Toe online in real time with up to three game modes. Developed for the System Development Practice III class.",
  "tic.link": "TicTacToe app repository",
  "trivia.gallery": "Trivia app screenshots",
  "trivia.img1": "Start screen",
  "trivia.img2": "Question before answering",
  "trivia.img3": "Question after selecting an answer",
  " trivia.img4": "Results",
  "trivia.title": "Trivia app",
  "trivia.desc":
    "Mobile app developed using Flutter that allows users to answer trivia questions with a time limit, obtaining points when answering correctly. The app includes dynamic visual effects, interactive timer and a results screen after finishing a trivia.",
  "trivia.link": "Trivia app repository",
  "invic.gallery": "Invictus screenshot",
  "invic.img1": "Invictus main screen",
  "invic.desc":
    "Chemical reagents inventory management system developed for the Department of Scientific and Technologic Investigations of the University of Sonora. I was responsible for the API and database development.",
  "sipre.desc":
    "Property deed format inventory management system. Developed for the System Development Practice I class.",
  "sipre.link1.aria": "SIPRE frontend repository",
  "sipre.link1": "Frontend repository",
  "sipre.link2.aria": "SIPRE backend repository",
  "sipre.link2": "Backend repository",
  "spot.gallery": "Spotipagina screenshots",
  "spot.img1": "Playlist list",
  "spot.img2": "Selected playlist and option to sort by date",
  "spot.img3": "First song of a playlist with options to keep or delete it",
  "spot.desc":
    "Web application that allows users to sign in with their Spotify account to sort playlists by date and go through a playlist's songs with options to keep or delete each song.",
  "spot.link": "Spotipagina repository",
  "pikmin.gallery": "Wili's Pikmins screenshots",
  "pikmin.img1": "Three pikmin types in-game",
  "pikmin.img2": "Red buried pikmin",
  "pikmin.img3": "Nectar eggs",
  "pikmin.img4": "Red pikmin onion",
  "pikmin.desc":
    "Minecraft mod developed for NeoForge version 1.21.1 that adds entities and game mechanics inspired by Pikmin.",
  "pikmin.link": "Wili's Pikmins repository",
  "tree.gallery": "Wiwi's Mega Trees screenshots",
  "tree.img1": "Mega version of oak, birch, acacia, cherry and mangrove trees",
  "tree.desc":
    "Multiloader and multiversion Minecraft mod that adds 'mega' variants for tree types that don't already have one. It allows players to grow mega trees planting their saplings in a 2x2 formation.",
  "tree.link": "Wiwi's mega trees repository",
};

const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
const root = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
});

function activate(tab) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.classList.toggle("active", on);
    t.setAttribute("aria-selected", on);
    t.tabIndex = on ? 0 : -1;
  });
  panels.forEach(
    (p) => (p.hidden = p.id !== tab.getAttribute("aria-controls")),
  );
}

tabs.forEach((t) => t.addEventListener("click", () => activate(t)));
activate(tabs[0]);

function setLang(lang) {
  document.documentElement.lang = lang;
  document.title =
    lang === "en"
      ? en["meta.title"]
      : "Jessica Montaño Lares | Desarrolladora Full Stack";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.dataset.es ??= el.textContent.trim();
    el.textContent =
      lang === "en" ? (en[el.dataset.i18n] ?? el.dataset.es) : el.dataset.es;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const saved = `data-es-${attr}`;

      if (!el.hasAttribute(saved)) {
        el.setAttribute(saved, el.getAttribute(attr));
      }

      const spanish = el.getAttribute(saved);
      el.setAttribute(attr, lang === "en" ? (en[key] ?? spanish) : spanish);
    });
  });

  document.getElementById("cv-link").href =
    lang === "en" ? "cv-en.pdf" : "cv.pdf";
  langBtn.textContent = lang === "en" ? "ES" : "EN";
  try {
    localStorage.setItem("lang", lang);
  } catch {}

  updateButtons(lang);
}

const langBtn = document.getElementById("lang-toggle");
langBtn.addEventListener("click", () =>
  setLang(document.documentElement.lang === "en" ? "es" : "en"),
);

let initial = "es";
try {
  initial =
    localStorage.getItem("lang") ??
    (navigator.language.startsWith("en") ? "en" : "es");
} catch {}
setLang(initial);

function updateButtons(lang) {
  langBtn.textContent = lang === "en" ? "ES" : "EN";
  langBtn.lang = lang === "en" ? "es" : "en";
  langBtn.setAttribute(
    "aria-label",
    lang === "en" ? "Cambiar a español" : "Switch to English",
  );
  const dark = root.dataset.theme === "dark";
  themeBtn.setAttribute(
    "aria-label",
    lang === "en"
      ? dark
        ? "Switch to light mode"
        : "Switch to dark mode"
      : dark
        ? "Cambiar a modo claro"
        : "Cambiar a modo oscuro",
  );
}
