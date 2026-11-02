// =====================================================================
//  SITE CONTENT — edit this file to change almost everything on the site.
//  Text can contain simple HTML (<b>, <i>, <sub>, <a href="...">).
//  Keep the quotes and commas exactly as they are. Leave a list as []
//  to hide that section. Publications live in publications.js.
// =====================================================================
window.SITE = {

  name: "Soham Chowdhury",
  tagline: "Ph.D. Researcher · Experimental Astrochemistry",
  affiliation: "Department of Chemistry, Indian Institute of Technology Madras",
  group: "Pradeep Research Group",
  groupUrl: "https://pradeepresearch.org",
  // File name of the Pradeep Research Group logo uploaded next to index.html (e.g. "logo-pradeep.png"). "" hides it.
  groupLogo: "logo-pradeep.jpg",
  updated: "November 2026",

  // Link to your CV on Google Drive (Share → Anyone with the link). Leave "" to hide the button.
  cvUrl: "",

  // Set to true to show an "open to postdoctoral opportunities" line on the Home page.
  showOpenToWork: false,
  openToWorkText: "Seeking postdoctoral opportunities in experimental astrochemistry and cryogenic surface science from mid-2027.",

  photo: "soham.jpg",

  // ------------------------------------------------------------- QUOTES
  // Shown on the page named in the key. Leave a key out to show no quote on that page.
  quotes: {
    home:         { text: "All my life through, the new sights of Nature made me rejoice like a child.",
                    by: "Marie Skłodowska-Curie", source: "Autobiographical Notes, in <i>Pierre Curie</i> (1923)" },
    research:     { text: "The same stream of life that runs through my veins night and day runs through the world and dances in rhythmic measures.",
                    by: "Rabindranath Tagore", source: "<i>Gitanjali</i>, poem 69" },
    publications: { text: "Say not, ‘I have found the truth,’ but rather, ‘I have found a truth.’",
                    by: "Kahlil Gibran", source: "<i>The Prophet</i> (1923), “On Self-Knowledge”" },
    exposure:     { text: "To strive, to seek, to find, and not to yield.",
                    by: "Alfred, Lord Tennyson", source: "<i>Ulysses</i> (1842)" },
    teaching:     { text: "If I have seen further it is by standing on the shoulders of Giants.",
                    by: "Isaac Newton", source: "Letter to Robert Hooke, 5 February 1675/76" },
    contact:      { text: "Live the questions now.",
                    by: "Rainer Maria Rilke", source: "<i>Letters to a Young Poet</i>, Letter Four (1903)" }
  },

  // ---------------------------------------------------------------- HOME
  intro:
    "I recreate the cold, dark, near-vacuum conditions of interstellar space in the laboratory to understand how ices, " +
    "water cages and the molecules trapped inside them form, transform and react.",

  bio: [
    "I am a Ph.D. researcher in Chemistry at the Indian Institute of Technology Madras, working with " +
    "<a href='https://pradeepresearch.org' target='_blank' rel='noopener'>Prof. Thalappil Pradeep</a>, and I aspire to be a <b>surface chemist</b>. " +
    "My present research seeks to explore how a bit of tinkering with bonding and interactions in molecular solids can initiate " +
    "transformations at the molecular level, even at cryogenic temperatures.",

    "I am developing the capability to design and build new instruments that solve a particular problem, inspired by nature. " +
    "In the Pradeep group I also maintain one of the group's surface-science facilities and carry out the analysis on it.",

    "I hail from Hindmotor, West Bengal, India, a town known for one of the country's earliest automobile industries. " +
    "In 2026 I was a RESOLV visiting research fellow in the group of André K. Eckhardt at Ruhr-Universität Bochum, Germany."
  ],

  interests: [
    { title: "Clathrate hydrates in interstellar ices",
      text: "How guest-containing water cages nucleate, grow and dissociate in amorphous ice mixtures under ultrahigh vacuum." },
    { title: "Cryogenic surface chemistry",
      text: "Reactions on and within ice surfaces at very low temperature, such as the spontaneous hydrolysis of ethers on water ice." },
    { title: "Photochemistry of ices and cages",
      text: "Vacuum-ultraviolet photolysis of condensed molecules and clathrate hydrates, and how the cage controls reactivity." },
    { title: "Surface spectroscopy of nanomaterials",
      text: "Collaborative XPS studies of atomically precise nanoclusters and microdroplet chemistry." }
  ],

  education: [
    { years: "2021 – present", title: "Ph.D., Chemistry", where: "Indian Institute of Technology Madras, Chennai", note: "Advisor: Prof. Thalappil Pradeep" },
    { years: "2019 – 2021",    title: "M.Sc., Chemistry", where: "Indian Institute of Technology Madras, Chennai", note: "" },
    { years: "2016 – 2019",    title: "B.Sc. (Hons.), Chemistry", where: "Maulana Azad College, University of Calcutta, Kolkata", note: "" }
  ],

  experience: [
    { years: "Aug 2021 – present", title: "Senior Research Scholar", where: "Pradeep Research Group, IIT Madras", note: "" },
    { years: "Jan – Mar 2026", title: "RESOLV Visiting Research Fellow", where: "Ruhr-Universität Bochum, Germany", note: "Host: André K. Eckhardt" }
  ],

  // Short news items on the Home page (newest first). Leave [] to hide.
  news: [
    { date: "Oct 2026", text: "<i>Spontaneous Ether Hydrolysis on Cryogenic Water Ice Surfaces</i> published in <i>J. Phys. Chem. Lett.</i>" },
    { date: "Jul 2026", text: "<i>Formation of Methanol Clathrate Hydrate in Simulated Interstellar Ices</i> published in <i>J. Phys. Chem. Lett.</i>" },
    { date: "Jan 2026", text: "Started a RESOLV visiting research fellowship at Ruhr-Universität Bochum." }
  ],

  // ------------------------------------------------------------ RESEARCH
  researchIntro:
    "Most of the chemistry of the universe happens in the cold. In dense interstellar clouds, molecules freeze onto dust grains and build " +
    "up icy mantles, which are both the birthplace and the graveyard of molecules: the places where complex organic molecules are made, " +
    "the same kind of molecules that connect the chemistry of space to the origin of life, and where they are broken down again. " +
    "My research ponders over the potential of water ices in facilitating the physical evolution and chemical reactions with " +
    "interacting molecules of interstellar relevance.",

  researchThemes: [
    { title: "Clathrate hydrates in interstellar ice analogues",
      text: "Clathrate hydrates are ice-like structures in which water forms cages around small guest molecules. I study how they form from " +
            "amorphous ice mixtures, how their structure depends on composition, and how they dissociate on warming — for guests including " +
            "ethane, CO<sub>2</sub>, N<sub>2</sub>O, acetaldehyde, dimethyl ether, trimethylene oxide and methanol.",
      papers: ["10.1021/acs.jpclett.6c01720", "10.1021/acs.jpcc.5c01603", "10.1021/acs.jpclett.5c02778"] },
    { title: "Reactions on cryogenic ice surfaces",
      text: "Ice surfaces are not passive. I investigate chemical reactions that occur spontaneously on water-ice surfaces at cryogenic temperatures, " +
            "such as the hydrolysis of ethers, and what they imply for the molecular inventory of cold astrophysical environments.",
      papers: ["10.1021/acs.jpclett.6c02695"] },
    { title: "Photochemistry in ices and water cages",
      text: "Starlight and cosmic radiation drive chemistry in ices. Using vacuum-ultraviolet light, we examine the photolysis of condensed molecules and of guests " +
            "trapped inside clathrate hydrate cages, showing how confinement in the cage steers the products.",
      papers: ["10.1021/acs.jpclett.6c00029", "10.1021/acs.jpclett.6c00885", "10.1039/d5cp00620a"] },
    { title: "Surface spectroscopy of nanomaterials",
      text: "Alongside the ice work I contribute XPS measurements to collaborative studies of atomically precise nanoclusters, " +
            "nanoparticles and chemistry in charged water microdroplets.",
      papers: ["10.1021/acs.nanolett.5c05462", "10.1039/d6nr00658b"] }
  ],

  // --------------------------------------------------------- INSTRUMENTS
  instrumentsIntro:
    "The experiments are carried out in ultrahigh vacuum chambers fitted with liquid helium cryostats, so that nanometer-thick molecular " +
    "solid films (i.e. ice) can be prepared and studied under simulated interstellar environments. Several complementary probes are used " +
    "on the same sample, grown on a ruthenium(0001) single-crystal substrate by physical vapor deposition.",

  // Photos shown at the top of the Instruments page. Upload your own photos next to index.html.
  labPhotos: [
    { src: "lab-1.jpg", caption: "Working on the UHV instrument at the Pradeep Research Group." },
    { src: "lab-2.jpg", caption: "Operating the cryogenic surface-science setup." }
  ],

  // For each instrument: upload the photo next to index.html and write its file name in "img",
  // e.g. img: "escaprobe.jpg". Leave "" to show a placeholder.
  instruments: [
    { name: "UHV chamber with liquid-helium cryostat",
      tag: "Sample environment",
      text: "Ultrahigh vacuum chamber with a base pressure below 5 × 10<sup>−10</sup> mbar. The sample temperature ranges from 7 to 400 K, and a four-axis manipulator positions the sample for each measurement.",
      img: "" },
    { name: "Reflection-absorption infrared spectroscopy (RAIRS)",
      tag: "Vibrational spectroscopy",
      text: "Infrared spectroscopy of thin films on a metal surface, recorded with Bruker Vertex 70 and Invenio-R spectrometers. It tracks the structure of ice, the formation of clathrate hydrates and the appearance of reaction products.",
      img: "" },
    { name: "Temperature-programmed desorption mass spectrometry (TPD-MS)",
      tag: "Thermal desorption",
      text: "Warming the sample at a controlled rate and detecting what leaves the surface with an Extrel CMS quadrupole mass spectrometer reveals binding, trapping in cages and desorption of reaction products.",
      img: "" },
    { name: "Secondary ion mass spectrometry (SIMS) with Cs<sup>+</sup> gun",
      tag: "Surface composition",
      text: "A surface-sensitive technique performed on the ice surface using an ion gun (model ILG-6A) and power supply units procured from Kimball Physics Inc. The scattered ions are analyzed using a quadrupole (Extrel CMS) and detected by a conversion dynode and channel electron multiplier.",
      img: "" },
    { name: "Low-energy ion scattering mass spectrometry (LEIS-MS)",
      tag: "Outermost layer",
      text: "Ion scattering performed on the ice surface at 1–10 eV, to investigate ion–molecule interactions.",
      img: "" },
    { name: "X-ray photoelectron spectroscopy (XPS)",
      tag: "Elemental and chemical state",
      text: "The group's ultrahigh vacuum surface-science system used for XPS and TPD to detect the chemical state of the elements present at the surface of molecular materials. I maintain this facility and perform the analysis.",
      img: "" },
    { name: "Vacuum ultraviolet deuterium continuum lamp",
      tag: "Photolysis source",
      text: "This VUV light source (McPherson) shines photons in the range of 125–400 nm, simulating the ultraviolet radiation field of the interstellar medium.",
      img: "" }
  ],

  // ---------------------------------------------------- EXPOSURE & ACCOLADES
  // Each list can be left as [] to hide it. Copy a block to add another entry.
  exposure: [
    { when: "Jan – Mar 2026", title: "RESOLV Visiting Research Fellow",
      where: "Ruhr-Universität Bochum, Germany",
      text: "Research internship hosted by Dr. André K. Eckhardt, an Emmy Noether research group leader. I was selected for this visit through the students' challenge “Your Step into Solvation Science” (2025) of the Cluster of Excellence RESOLV. " +
            "During the visit I performed cryogenic EPR and transmission IR spectroscopy of photolysed clathrate hydrates to investigate the role of radical intermediates." }
  ],

  awards: [
    // { when: "2025", title: "Award or fellowship name", where: "Awarding body", text: "One line of detail." }
  ],

  // kind: "Invited talk" or "Poster". Newest first.
  talks: [
    { when: "11–13 Mar 2026", kind: "Poster",
      title: "Confinement of Radicals in Clathrate Hydrates under Interstellar Conditions",
      where: "RESOLV Klausurtagung 2026 · Hotel-Residence Klosterpforte, Ruhr-Universität Bochum, Germany" },
    { when: "21–25 Sep 2025", kind: "Poster",
      title: "Formation of Methanol Clathrate Hydrate in Simulated Interstellar Ices",
      where: "9th Asian and Oceanian Spectroscopy Conference (AOSC 2025) · Bogmallo Beach Resort, Goa, India" },
    { when: "8 Sep 2025", kind: "Poster",
      title: "Formation of Methanol Clathrate Hydrate in Interstellar Ice Analogs",
      where: "Chemistry in-House Symposium (CiHS 2025) · IIT Madras, Chennai, India" },
    { when: "10–13 Apr 2025", kind: "Poster",
      title: "Formation and Dissociation of Clathrate Hydrates in Simulated Interstellar Ice",
      where: "Recent Advances in Physical Chemistry Research (SRAPCR-2025) · IACS, Kolkata, India" },
    { when: "6–11 Jul 2024", kind: "Invited talk",
      title: "Composition-Dependent Clathrate Hydrate Formation of Trimethylene Oxide and Consequences of Dissociation",
      where: "Chemistry and Physics at Low Temperatures (CPLT 2024) · Niseko, Hokkaido, Japan" },
    { when: "31 Jan – 4 Feb 2024", kind: "Poster",
      title: "Clathrate hydrates in simulated interstellar medium",
      where: "Astronomical Society of India (ASI 2024) · IISc Bangalore, India" },
    { when: "16–18 Dec 2023", kind: "Poster",
      title: "Formation of composition-dependent clathrate hydrates of trimethylene oxide in ultrahigh vacuum and their varying consequences in dissociation-induced crystallization of ice",
      where: "ICMM 2023 · IIT Madras, India" }
  ],

  // -------------------------------------------------------------- TEACHING
  teachingIntro: "I have served as a teaching assistant (TA) for undergraduate chemistry courses at IIT Madras.",

  // One line per course offering, newest first. Copy a line to add another:
  // { term: "Jul – Nov 2026", code: "CY1001", title: "Course title", programme: "B.Tech, IIT Madras",
  //   coordinator: "Prof. Name", coordinatorUrl: "https://..." },
  courses: [
    { term: "Jan – May 2025", code: "CY1002", title: "Chemistry Laboratory Course", programme: "B.Tech, IIT Madras",
      coordinator: "Prof. Muraleedharan K. M.", coordinatorUrl: "https://chem.iitm.ac.in/faculty-inner.php?id=23" },
    { term: "Jul – Nov 2023", code: "CY1001", title: "Chemistry: Principles, Structure, Reactivity and Applications", programme: "B.Tech, IIT Madras",
      coordinator: "Prof. M. V. Sankaranarayanan", coordinatorUrl: "https://chem.iitm.ac.in/retired-faculty.php" },
    { term: "Jan – May 2023", code: "CY1002", title: "Chemistry Laboratory Course", programme: "B.Tech, IIT Madras",
      coordinator: "Prof. Chaitanya Sharma Yamijala", coordinatorUrl: "https://chem.iitm.ac.in/faculty-inner.php?id=10" },
    { term: "Jul – Nov 2022", code: "CY1001", title: "Chemistry: Principles, Structure, Reactivity and Applications", programme: "B.Tech, IIT Madras",
      coordinator: "Prof. Edamana Prasad", coordinatorUrl: "https://chem.iitm.ac.in/faculty-inner.php?id=15" }
  ],

  // Optional: teaching assistantships or mentoring. Leave [] to hide.
  teachingExperience: [
    // { when: "2023", title: "Teaching assistant, General Chemistry", where: "IIT Madras", text: "" }
  ],

  // --------------------------------------------------------------- CONTACT
  address: ["HSB 148, Unit of Nanoscience", "Department of Chemistry", "Indian Institute of Technology Madras", "Chennai – 600036", "India"],

  // Search text used for the Google Map on the Contact page.
  mapQuery: "Department of Chemistry, Indian Institute of Technology Madras, Chennai 600036, India",

  // type picks the icon: email | scholar | orcid | linkedin | researchgate | github | cv | link
  // "text" is the typed link shown on the page. To add one, copy a line and fill it in.
  contacts: [
    { type: "email",   label: "Email",          text: "98soham06@gmail.com", url: "mailto:98soham06@gmail.com" },
    { type: "scholar", label: "Google Scholar", text: "scholar.google.com/citations?user=TfxnEn8AAAAJ", url: "https://scholar.google.com/citations?user=TfxnEn8AAAAJ&hl=en" },
    { type: "orcid",   label: "ORCID",          text: "orcid.org/0009-0000-8151-6065", url: "https://orcid.org/0009-0000-8151-6065" },
    { type: "linkedin",     label: "LinkedIn",     text: "linkedin.com/in/soham-chowdhury-8ab7351b2", url: "https://www.linkedin.com/in/soham-chowdhury-8ab7351b2" },
    { type: "researchgate", label: "ResearchGate", text: "researchgate.net/profile/Soham-Chowdhury-4", url: "https://www.researchgate.net/profile/Soham-Chowdhury-4" }
  ],

  // ------------------------------------------------------ FUNDING & SUPPORT
  // logo: file name of the logo image uploaded next to index.html (e.g. "logo-anrf.png"). "" shows the abbreviation instead.
  funding: [
    { name: "IIT Madras HTRA Fellowship", abbr: "IITM", logo: "logo-iitm.png", url: "https://www.iitm.ac.in",
      text: "Half-Time Research Assistantship from IIT Madras, supporting my Ph.D. research." },
    { name: "ANRF Advanced Research Grant (ARG)", abbr: "ANRF", logo: "logo-anrf.png", url: "https://anrfonline.in",
      text: "Anusandhan National Research Foundation grant supporting clathrate hydrate research and new cryogenic instrumentation." },
    { name: "ISRO–IITM funding", abbr: "ISRO", logo: "logo-isro.png", url: "https://www.isro.gov.in",
      text: "Support from the Indian Space Research Organisation through IIT Madras for astrochemistry research." },
    { name: "RESOLV, Ruhr-Universität Bochum", abbr: "RESOLV", logo: "logo-resolv.png", url: "https://www.solvation.de",
      text: "The RESOLV Cluster of Excellence funded my 2026 research visit to Bochum, Germany." }
  ]
};
