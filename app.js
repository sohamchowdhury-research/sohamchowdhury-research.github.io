/* Renders every page from content/site.js and content/publications.js.
   You normally never need to edit this file. */
(function () {
  var S = window.SITE || {};
  var P = window.PUBLICATIONS || [];
  var page = document.body.getAttribute("data-page");

  /* ---------------- icons (inline SVG, use currentColor) ---------------- */
  var I = {
    email: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    scholar: '<path d="M12 4L2 9l10 5 10-5-10-5z"/><path d="M6 11.6V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.4"/><path d="M22 9v6"/>',
    orcid: '<circle cx="12" cy="12" r="9"/><path d="M8.6 8v8M8.6 6.6v.2M12 8v8M12 8h1.9a4 4 0 010 8H12" stroke-width="1.6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.6v.1M11.5 16v-5.5M11.5 13c0-1.7 1-2.6 2.4-2.6s2.1.9 2.1 2.5V16"/>',
    researchgate: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 16.5V8h2.6a2.2 2.2 0 010 4.4H8M10.2 12.4L12 16.5M14 11.3h1.2a1.5 1.5 0 011.3 1.4v1.2c0 .9-.6 1.6-1.4 1.6H14.6"/>',
    github: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.2a2.8 2.8 0 00-.8-2.2c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 00-1.2-3.1 4.2 4.2 0 00-.1-3.1s-1-.3-3.2 1.2a11 11 0 00-5.8 0C7 3.3 6 3.6 6 3.6a4.2 4.2 0 00-.1 3.1A4.5 4.5 0 004.7 9.8c0 4.5 2.7 5.5 5.3 5.8a2.8 2.8 0 00-.8 2.2V21"/>',
    cv: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    camera: '<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"/><circle cx="12" cy="13" r="3.5"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'
  };
  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[name] || I.link) + "</svg>";
  }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function ext(url) { return /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : ""; }

  /* ---------------- navigation ---------------- */
  var NAV = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "research", label: "Research", href: "research.html", children: [
      { id: "research", label: "Overview", href: "research.html" },
      { id: "instruments", label: "Instruments", href: "instruments.html" },
      { id: "publications", label: "Publications", href: "publications.html" }
    ] },
    { id: "exposure", label: "Exposure & Accolades", href: "exposure.html" },
    { id: "teaching", label: "Teaching", href: "teaching.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  function renderHeader() {
    var items = NAV.map(function (n) {
      if (n.children) {
        var active = n.children.some(function (c) { return c.id === page; });
        var kids = n.children.map(function (c) {
          return '<a href="' + c.href + '"' + (c.id === page ? ' class="active"' : "") + ">" + c.label + "</a>";
        }).join("");
        return '<div class="has-drop' + (active ? " active" : "") + '"><button class="drop-btn" aria-haspopup="true">' + n.label + '</button><div class="drop-menu">' + kids + "</div></div>";
      }
      return '<a href="' + n.href + '"' + (n.id === page ? ' class="active"' : "") + ">" + n.label + "</a>";
    }).join("");
    document.getElementById("header").innerHTML =
      '<a class="skip" href="#main">Skip to content</a>' +
      '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="index.html">' + esc(S.name) + "</a>" +
      '<button class="menu-toggle" aria-expanded="false" aria-controls="nav">Menu</button>' +
      '<nav class="nav" id="nav" aria-label="Main">' + items + "</nav></div></header>";

    var tgl = document.querySelector(".menu-toggle"), nav = document.getElementById("nav");
    tgl.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      tgl.setAttribute("aria-expanded", open);
    });
    document.querySelectorAll(".has-drop > button").forEach(function (b) {
      b.addEventListener("click", function () { b.parentNode.classList.toggle("open"); });
    });
  }

  function iconRow(list) {
    return '<div class="icon-row">' + list.map(function (c) {
      return '<a class="icon-link" href="' + esc(c.url) + '"' + ext(c.url) + ' aria-label="' + esc(c.label) + '" title="' + esc(c.label) + '">' + icon(c.type) + "</a>";
    }).join("") + "</div>";
  }

  function renderFooter() {
    document.getElementById("footer").innerHTML =
      '<footer class="site-footer"><div class="wrap"><div>© ' + new Date().getFullYear() + " " + esc(S.name) +
      " · " + esc(S.affiliation) + "<br>Last updated " + esc(S.updated) + "</div>" + iconRow(S.contacts || []) + "</div></footer>";
  }

  /* ---------------- helpers ---------------- */
  function pageHead(title, text) {
    return '<div class="page-head"><div class="wrap"><h1>' + title + "</h1>" + (text ? "<p>" + text + "</p>" : "") + "</div></div>";
  }
  function sectionTitle(t) { return '<div class="section-title"><h2>' + t + "</h2></div>"; }
  function timeline(list) {
    return '<ul class="timeline">' + list.map(function (e) {
      return '<li><div class="when">' + e.years + '</div><div class="what">' + e.title + '</div><div class="where">' + e.where + "</div>" +
        (e.note ? '<div class="note">' + e.note + "</div>" : "") + "</li>";
    }).join("") + "</ul>";
  }
  function entries(list) {
    return list.map(function (e) {
      return '<div class="entry"><div class="when">' + (e.when || "") + "</div><div><h3>" + e.title +
        (e.kind ? '<span class="badge">' + e.kind + "</span>" : "") + "</h3>" +
        (e.where ? '<div class="where">' + e.where + "</div>" : "") + (e.text ? "<p>" + e.text + "</p>" : "") + "</div></div>";
    }).join("");
  }
  function quoteHTML(q) {
    if (!q) return "";
    return '<section class="block"><div class="wrap"><figure class="quote"><blockquote>“' + q.text + "”</blockquote>" +
      "<figcaption>— " + q.by + (q.source ? ", " + q.source : "") + "</figcaption></figure></div></section>";
  }
  function fundingHTML(title) {
    var list = S.funding || [];
    if (!list.length) return "";
    return '<section class="block"><div class="wrap">' + sectionTitle(title) + '<div class="fund-grid">' + list.map(function (f) {
      var logo = f.logo
        ? '<img src="' + esc(f.logo) + '" alt="' + esc(f.name) + ' logo" loading="lazy">'
        : "<span>" + esc(f.abbr || f.name) + "</span>";
      var inner = '<div class="fund-logo">' + logo + '</div><div><h3>' + f.name + "</h3><p>" + f.text + "</p></div>";
      return f.url ? '<a class="fund" href="' + esc(f.url) + '" target="_blank" rel="noopener">' + inner + "</a>" : '<div class="fund">' + inner + "</div>";
    }).join("") + "</div></div></section>";
  }
  function doiLink(d) { return "https://doi.org/" + d; }
  function pubByDoi(d) { return P.filter(function (p) { return (p.doi || "").toLowerCase() === d.toLowerCase(); })[0]; }

  function pubHTML(p, idx, total) {
    var authors = p.authors.map(function (a) {
      return /^S\. Chowdhury\*?$/.test(a) ? "<b>" + esc(a) + "</b>" : esc(a);
    }).join(", ");
    var cite = "<i>" + esc(p.journal) + "</i> <b>" + p.year + "</b>";
    if (p.volume) cite += ", <i>" + esc(p.volume) + "</i>";
    if (p.issue) cite += " (" + esc(p.issue) + ")";
    if (p.pages) cite += ", " + esc(p.pages);
    var first = !!p.equalFirst || /^S\. Chowdhury/.test(p.authors[0] || "");
    var links = "";
    if (p.doi) links += '<a class="mini" href="' + doiLink(p.doi) + '" target="_blank" rel="noopener">DOI</a>';
    if (p.pdf) links += '<a class="mini" href="' + esc(p.pdf) + '" target="_blank" rel="noopener">PDF</a>';
    return '<div class="pub"><div class="n">' + (total - idx) + '.</div><div><div class="t">' + p.title +
      (first ? '<span class="badge">' + (p.equalFirst ? "Equal first author" : "First author") + "</span>" : "") + '</div><div class="a">' + authors + '</div><div class="j">' + cite +
      '</div><div class="links">' + links + "</div></div></div>";
  }

  /* ---------------- pages ---------------- */
  var R = {};

  R.home = function () {
    var contacts = (S.contacts || []).slice();
    var cv = S.cvUrl ? '<a class="btn ghost" href="' + esc(S.cvUrl) + '" target="_blank" rel="noopener">' + icon("cv") + " CV (PDF)</a>" : "";
    var otw = S.showOpenToWork ? '<div class="open-to-work">' + esc(S.openToWorkText) + "</div>" : "";
    var html =
      '<section class="hero"><div class="wrap"><div>' +
      '<div class="eyebrow">' + esc(S.tagline) + "</div><h1>" + esc(S.name) + "</h1>" +
      '<div class="affil">' + esc(S.affiliation) + ' · <a href="' + esc(S.groupUrl) + '" target="_blank" rel="noopener">' + esc(S.group) + "</a></div>" +
      (S.groupLogo ? '<a class="group-logo" href="' + esc(S.groupUrl) + '" target="_blank" rel="noopener"><img src="' + esc(S.groupLogo) + '" alt="' + esc(S.group) + ' logo"></a>' : "") +
      '<p class="lead">' + S.intro + "</p>" +
      '<div class="btn-row"><a class="btn primary" href="publications.html">Publications</a><a class="btn ghost" href="research.html">Research</a>' + cv + "</div>" +
      iconRow(contacts) + otw +
      '</div><div class="portrait"><img src="' + esc(S.photo) + '" alt="Portrait of ' + esc(S.name) + '"></div></div></section>';

    html += '<section class="block" style="padding-top:44px"><div class="wrap"><figure class="quote"><blockquote>“' + S.quotes.home.text +
      "”</blockquote><figcaption>— " + S.quotes.home.by + ", " + S.quotes.home.source + "</figcaption></figure></div></section>";
    html += '<section class="block"><div class="wrap">' + sectionTitle("About") + '<div class="bio">' +
      (S.bio || []).map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div></div></section>";

    html += '<section class="block"><div class="wrap">' + sectionTitle("Research interests") + '<div class="cards">' +
      (S.interests || []).map(function (c) { return '<div class="card accent-top"><h3>' + c.title + "</h3><p>" + c.text + "</p></div>"; }).join("") +
      "</div></div></section>";

    html += '<section class="block"><div class="wrap"><div class="two-col"><div>' + sectionTitle("Education") + timeline(S.education || []) +
      "</div><div>" + sectionTitle("Experience") + timeline(S.experience || []) + "</div></div></div></section>";

    html += fundingHTML("Funding &amp; support");

    if ((S.news || []).length) {
      html += '<section class="block"><div class="wrap">' + sectionTitle("News") + '<ul class="news">' +
        S.news.map(function (n) { return '<li><span class="date">' + n.date + "</span><span>" + n.text + "</span></li>"; }).join("") + "</ul></div></section>";
    }
    return html;
  };

  R.research = function () {
    var html = pageHead("Research", S.researchIntro);
    html += '<div class="wrap" style="padding-top:20px">' + (S.researchThemes || []).map(function (t, i) {
      var rel = (t.papers || []).map(function (d) {
        var p = pubByDoi(d);
        if (!p) return "";
        var plain = p.title.replace(/<[^>]+>/g, "");
        var short = plain.length > 58 ? plain.slice(0, 55).replace(/\s+\S*$/, "") + "…" : plain;
        return '<a href="' + doiLink(d) + '" target="_blank" rel="noopener" title="' + esc(plain) + '">' + esc(short) + " (" + p.year + ")</a>";
      }).join("<br>");
      return '<div class="theme"><div class="num">' + (i + 1) + "</div><div><h2>" + t.title + "</h2><p>" + t.text + "</p>" +
        (rel ? '<div class="related">Representative papers: ' + rel + "</div>" : "") + "</div></div>";
    }).join("") + "</div>" + fundingHTML("Funding &amp; support");
    return html;
  };

  R.instruments = function () {
    var html = pageHead("Instruments", S.instrumentsIntro);
    html += '<div class="wrap">';
    if ((S.labPhotos || []).length) {
      html += '<div class="photo-pair">' + S.labPhotos.map(function (p) {
        return '<figure><img src="' + esc(p.src) + '" alt="' + esc(p.caption) + '" loading="lazy"><figcaption>' + esc(p.caption) + "</figcaption></figure>";
      }).join("") + "</div>";
    }
    html += '<div style="height:34px"></div><div class="inst-grid">' + (S.instruments || []).map(function (x) {
      var media = x.img
        ? '<img class="shot" src="' + esc(x.img) + '" alt="' + esc(x.name.replace(/<[^>]+>/g, "")) + '" loading="lazy">'
        : '<div class="ph">' + icon("camera") + "<span>Photo coming soon</span></div>";
      return '<article class="inst">' + media + '<div class="body"><div class="tag">' + x.tag + "</div><h3>" + x.name + "</h3><p>" + x.text + "</p></div></article>";
    }).join("") + "</div></div>";
    return html;
  };

  R.publications = function () {
    var total = P.length;
    var firstAuthor = P.filter(function (p) { return !!p.equalFirst || /^S\. Chowdhury/.test(p.authors[0] || ""); }).length;
    var ice = P.filter(function (p) { return p.topic === "ice"; }).length;
    var nano = total - ice;
    var html = pageHead("Publications",
      'Peer-reviewed articles. Citation metrics and the full record are on <a href="https://scholar.google.com/citations?user=TfxnEn8AAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a> and <a href="https://orcid.org/0009-0000-8151-6065" target="_blank" rel="noopener">ORCID</a>.');
    html += '<div class="wrap"><div class="stats" style="margin-top:26px">' +
      '<div class="stat"><b>' + total + "</b><span>papers</span></div>" +
      '<div class="stat"><b>' + firstAuthor + "</b><span>first-author</span></div>" +
      '<div class="stat"><b>' + ice + "</b><span>ice &amp; clathrate hydrates</span></div>" +
      '<div class="stat"><b>' + nano + "</b><span>nanomaterials &amp; spectroscopy</span></div></div>" +
      '<div class="toolbar"><div class="filters" role="group" aria-label="Filter by topic">' +
      '<button class="chip on" data-f="all">All</button><button class="chip" data-f="ice">Ice &amp; clathrate hydrates</button>' +
      '<button class="chip" data-f="nano">Nanomaterials &amp; spectroscopy</button></div>' +
      '<input class="search" type="search" placeholder="Search title, author, journal…" aria-label="Search publications"></div>' +
      '<div id="publist"></div>' +
      '<p class="note-small"><b>S. Chowdhury</b> = Soham Chowdhury. * Equal contribution.</p></div>';
    setTimeout(function () { initPubs(total); }, 0);
    return html;
  };

  function initPubs(total) {
    var filter = "all", q = "";
    var list = document.getElementById("publist");
    function draw() {
      var out = "", lastYear = null, shown = 0;
      P.forEach(function (p, i) {
        var hay = (p.title + " " + p.authors.join(" ") + " " + p.journal + " " + p.year).toLowerCase().replace(/<[^>]+>/g, "");
        if (filter !== "all" && p.topic !== filter) return;
        if (q && hay.indexOf(q) < 0) return;
        if (p.year !== lastYear) { out += '<h2 class="year-head">' + p.year + "</h2>"; lastYear = p.year; }
        out += pubHTML(p, i, total); shown++;
      });
      list.innerHTML = out || '<p class="empty">No publications match.</p>';
    }
    document.querySelectorAll(".chip").forEach(function (c) {
      c.addEventListener("click", function () {
        document.querySelectorAll(".chip").forEach(function (x) { x.classList.remove("on"); });
        c.classList.add("on"); filter = c.getAttribute("data-f"); draw();
      });
    });
    document.querySelector(".search").addEventListener("input", function (e) { q = e.target.value.trim().toLowerCase(); draw(); });
    draw();
  }

  R.exposure = function () {
    var html = pageHead("Exposure & Accolades", "Research visits, conference presentations, and awards and honours.");
    html += '<div class="wrap" style="padding-top:34px">';
    var any = false;
    [["Research exposure", S.exposure], ["Conference presentations", S.talks], ["Awards & honours", S.awards]].forEach(function (s) {
      if ((s[1] || []).length) { any = true; html += sectionTitle(s[0]) + entries(s[1]) + '<div style="height:26px"></div>'; }
    });
    if (!any) html += '<p class="empty">Nothing listed yet.</p>';
    return html + "</div>";
  };

  R.teaching = function () {
    var html = pageHead("Teaching", S.teachingIntro);
    html += '<div class="wrap" style="padding-top:34px">' + sectionTitle("Teaching assistantships");
    if ((S.courses || []).length) {
      html += '<div class="table-wrap"><table class="courses"><thead><tr><th>Term</th><th>Course</th><th>Role</th><th>Course coordinator</th></tr></thead><tbody>' +
        S.courses.map(function (c) {
          var coord = c.coordinatorUrl ? '<a href="' + esc(c.coordinatorUrl) + '" target="_blank" rel="noopener">' + c.coordinator + "</a>" : (c.coordinator || "");
          return "<tr><td>" + (c.term || "") + "</td><td><b>" + (c.code || "") + "</b> · " + c.title +
            '<div class="sub">' + (c.programme || "") + "</div></td><td>Teaching assistant</td><td>" + coord + "</td></tr>";
        }).join("") + "</tbody></table></div>";
    } else {
      html += '<p class="empty">The list of courses will appear here soon.</p>';
    }
    if ((S.teachingExperience || []).length) html += '<div style="height:34px"></div>' + sectionTitle("Teaching & mentoring") + entries(S.teachingExperience);
    return html + "</div>";
  };

  R.contact = function () {
    var html = pageHead("Contact", "The best way to reach me is by email. I am happy to hear from fellow researchers about collaborations, questions about the papers, or measurements.");
    html += '<div class="wrap" style="padding-top:34px"><div class="contact-grid">' + (S.contacts || []).map(function (c) {
      return '<a class="contact-card" href="' + esc(c.url) + '"' + ext(c.url) + '><span class="ic">' + icon(c.type) + '</span><span><span class="lbl">' + esc(c.label) +
        '</span><br><span class="txt">' + esc(c.text) + "</span></span></a>";
    }).join("") + '</div><div style="height:38px"></div>' + sectionTitle("Address") +
      '<div style="display:grid;grid-template-columns:52px 1fr;gap:16px"><span class="contact-card" style="padding:0;border:0;box-shadow:none;display:block"><span class="ic">' + icon("pin") + "</span></span>" +
      "<address><b>" + esc(S.name) + "</b><br>" + (S.address || []).map(esc).join("<br>") + "</address></div>";
    if (S.mapQuery) {
      var q = encodeURIComponent(S.mapQuery);
      html += '<div style="height:38px"></div>' + sectionTitle("Location") +
        '<div class="map"><iframe title="Map of the Department of Chemistry, IIT Madras" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ' +
        'src="https://maps.google.com/maps?q=' + q + '&amp;z=16&amp;output=embed" allowfullscreen></iframe></div>' +
        '<p class="note-small"><a href="https://www.google.com/maps/search/?api=1&amp;query=' + q + '" target="_blank" rel="noopener">Open in Google Maps</a></p>';
    }
    return html + "</div>";
  };

  /* ---------------- boot ---------------- */
  var TITLES = { home: "", research: "Research", instruments: "Instruments", publications: "Publications", exposure: "Exposure & Accolades", teaching: "Teaching", contact: "Contact" };
  document.title = (TITLES[page] ? TITLES[page] + " · " : "") + S.name;
  renderHeader();
  document.getElementById("main").innerHTML = (R[page] || R.home)() + (page === "home" ? "" : quoteHTML((S.quotes || {})[page]));
  renderFooter();
})();
