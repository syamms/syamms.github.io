/* =====================================================================
   SHARED LAYOUT — top menu, left sidebar and footer for every page.
   Edit your details HERE ONCE and every page updates automatically.
   ===================================================================== */

const SITE = {
  name: "Dr. Syam M. S.",
  photo: "photo.jpg",
  bio: "Assistant Professor, Division of Electrical and Electronics Engineering, Karunya Institute of Technology and Sciences",

  // Top menu: [label, file]
  menu: [
    ["Publications", "publications.html"],
    ["Honors", "honors.html"],
    ["Services", "services.html"],
    ["Useful Links", "resources.html"]
  ],

  // Sidebar "Follow" list: [icon class, text, link]  (link "" = plain text)
  // To add a profile, copy a line and remove the // in front of it.
  follow: [
    ["fa-solid fa-location-dot", "Coimbatore, India", ""],
    ["fa-solid fa-building-columns", "Karunya Institute of Technology and Sciences", "https://www.karunya.edu/"],
    ["fa-solid fa-envelope", "syam@karunya.edu", "mailto:syam@karunya.edu"],
    ["fa-solid fa-envelope", "syamms@outlook.com", "mailto:syamms@outlook.com"],
    // ["ai ai-google-scholar", "Google Scholar", "https://scholar.google.com/citations?user=YOUR_ID"],
    // ["ai ai-orcid", "ORCID", "https://orcid.org/0000-0000-0000-0000"],
    // ["ai ai-clarivate", "Web of Science", "https://www.webofscience.com/wos/author/record/YOUR_RID"],
    // ["ai ai-scopus", "Scopus", "https://www.scopus.com/authid/detail.uri?authorId=YOUR_ID"],
    // ["ai ai-ieee", "IEEE Xplore", "https://ieeexplore.ieee.org/author/YOUR_ID"],
    // ["fa-brands fa-linkedin", "LinkedIn", "https://www.linkedin.com/in/YOUR_PROFILE"],
  ],

  updated: "2026-11-25"
};

/* ---------- builds the page (no need to edit below) ---------- */
(function () {
  const here = location.pathname.split("/").pop() || "index.html";

  const menu = SITE.menu.map(([label, file]) =>
    `<a href="${file}"${file === here ? ' class="active"' : ""}>${label}</a>`).join("");

  const follow = SITE.follow.map(([icon, text, link]) => {
    const inner = `<i class="${icon}"></i><span>${text}</span>`;
    return `<li>${link ? `<a href="${link}" target="${link.startsWith("mailto") ? "_self" : "_blank"}">${inner}</a>` : inner}</li>`;
  }).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <div class="masthead">
      <div class="masthead-inner">
        <a class="site-title" href="index.html">${SITE.name}</a>
        <button class="menu-toggle" aria-label="Menu" onclick="document.querySelector('.masthead nav').classList.toggle('open')">☰</button>
        <nav>${menu}</nav>
      </div>
    </div>`);

  const content = document.getElementById("content");
  content.insertAdjacentHTML("beforebegin", `
    <aside class="sidebar">
      <img class="avatar" src="${SITE.photo}" alt="${SITE.name}">
      <h3 class="author-name">${SITE.name}</h3>
      <p class="author-bio">${SITE.bio}</p>
      <button class="follow-btn" onclick="this.nextElementSibling.classList.toggle('open')">Follow</button>
      <ul class="author-links">${follow}</ul>
    </aside>`);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="page-footer">
      <div>© ${new Date().getFullYear()} ${SITE.name}. Site last updated ${SITE.updated}.</div>
    </footer>`);
})();
