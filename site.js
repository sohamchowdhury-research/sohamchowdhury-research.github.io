// =====================================================================
//  SITE CONTENT — edit this file to change almost everything on the site.
//  Text can contain simple HTML (<b>, <i>, <sub>, <a href="...">).
//  Keep the quotes and commas exactly as they are. Leave a list as []
//  to hide that section. Publications live in content/publications.js.
// =====================================================================
window.SITE = {

  name: "Soham Chowdhury",
  tagline: "Ph.D. Researcher · Experimental Astrochemistry",
  affiliation: "Department of Chemistry, Indian Institute of Technology Madras",
  group: "Pradeep Research Group",
  groupUrl: "https://pradeepresearch.org",
  updated: "November 2026",

  // Link to your CV on Google Drive (Share → Anyone with the link). Leave "" to hide the button.
  cvUrl: "",

  // Set to true to show an "open to postdoctoral opportunities" line on the Home page.
  showOpenToWork: false,
  openToWorkText: "Seeking postdoctoral opportunities in experimental astrochemistry and cryogenic surface science from mid-2027.",

  photo: "soham.jpg",

  // ---------------------------------------------------------------- HOME
  intro:
    "I recreate the cold, dark, near-vacuum conditions of interstellar space in the laboratory to understand how ices, " +
    "water cages and the molecules trapped inside them form, transform and react.",

  bio: [
    "I am a Ph.D. researcher in Chemistry at the Indian Institute of Technology Madras, Chennai, working with " +
    "<a href='https://pradeepresearch.org' target='_blank' rel='noopener'>Prof. Thalappil Pradeep</a>. " +
    "My research is in experimental astrochemistry: using ultrahigh-vacuum, cryogenic experiments to study the chemistry of ice " +
    "analogues of the interstellar medium.",

    "I am particularly interested in <b>clathrate hydrates</b> — crystalline water cages that can trap small guest molecules — " +
    "and in how they form, transform and react inside interstellar ice mimics. I follow these processes with a combination of " +
    "surface-science techniques, including reflection-absorption infrared spectroscopy (RAIRS), temperature-programmed " +
    "desorption mass spectrometry (TPD-MS), secondary ion mass spectrometry (SIMS), low-energy ion scattering (LEIS) and " +
    "X-ray photoelectron spectroscopy (XPS).",

    "In 2026 I was a RESOLV visiting research fellow in the group of André K. Eckhardt at Ruhr-Universität Bochum, Germany. " +
    "In the Pradeep group I also look after the ESCAprobe TPD facility."
  ],

  interests: [
    { title: "Clathrate hydrates in interstellar ices",
      text: "How guest-containing water cages nucleate, grow and dissociate in amorphous ice mixtures under ultrahigh vacuum." },
    { title: "Cryogenic surface chemistry",
      text: "Reactions on and within ice surfaces at very low temperature, such as the spontaneous hydrolysis of ethers on water ice." },
    { title: "Photochemistry of ices and cages",
      text: "Vacuum-ultraviolet photolysis of condensed molecules and clathrate hydrates, and how the cage controls reactivity." },
    { title: "Surface and materials spectroscopy",
      text: "Collaborative XPS and mass-spectrometric studies of atomically precise nanoclusters and microdroplet chemistry." }
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
    "up icy mantles, which are thought to be the birthplace of many of the complex organic molecules later seen in star- and planet-forming regions. " +
    "My work reproduces these environments in ultrahigh-vacuum chambers cooled by liquid helium and follows the chemistry of the ices in real time.",

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
    { title: "Nanomaterials and surface spectroscopy",
      text: "Alongside the ice work I contribute XPS and mass-spectrometric measurements to collaborative studies of atomically precise nanoclusters, " +
            "nanoparticles and chemistry in charged water microdroplets.",
      papers: ["10.1021/acs.nanolett.5c05462", "10.1039/d6nr00658b"] }
  ],

  // --------------------------------------------------------- INSTRUMENTS
  instrumentsIntro:
    "The experiments are carried out in ultrahigh-vacuum chambers fitted with liquid-helium cryostats, so that thin ice films can be " +
    "prepared and studied at very low temperature without contamination. Several complementary probes are used on the same sample.",

  // Photos shown at the top of the Instruments page. Upload your own photos next to index.html.
  labPhotos: [
    { src: "lab-1.jpg", caption: "Working on the UHV instrument at the Pradeep Research Group." },
    { src: "lab-2.jpg", caption: "Operating the cryogenic surface-science setup." }
  ],

  // For each instrument: upload the photo next to index.html and write its file name in "img",
  // e.g. img: "escaprobe.jpg". Leave "" to show a placeholder.
  instruments: [
    { name: "ESCAprobe TPD facility",
      tag: "Multi-technique UHV system",
      text: "The group's ultrahigh-vacuum surface-science system for temperature-programmed desorption and X-ray photoelectron spectroscopy of cryogenic films. I maintain this facility.",
      img: "" },
    { name: "UHV chamber with liquid-helium cryostat",
      tag: "Sample environment",
      text: "Cryogenically cooled substrates inside ultrahigh vacuum allow ices to be grown, annealed and probed under conditions that mimic dense interstellar clouds.",
      img: "" },
    { name: "Reflection-absorption infrared spectroscopy (RAIRS)",
      tag: "Vibrational spectroscopy",
      text: "Infrared spectroscopy of thin films on a metal surface. It tracks the structure of ice, the formation of clathrate hydrates and the appearance of reaction products.",
      img: "" },
    { name: "Temperature-programmed desorption mass spectrometry (TPD-MS)",
      tag: "Thermal desorption",
      text: "Warming the sample at a controlled rate and detecting what leaves the surface reveals binding, trapping in cages and desorption of reaction products.",
      img: "" },
    { name: "Secondary ion mass spectrometry (SIMS) with Cs<sup>+</sup> gun",
      tag: "Surface composition",
      text: "Sputtering with a cesium ion beam and mass-analysing the secondary ions gives molecular information on the surface of the film.",
      img: "" },
    { name: "Low-energy ion scattering mass spectrometry (LEIS-MS)",
      tag: "Outermost layer",
      text: "A technique that is sensitive to the outermost layer of a surface, used to probe how molecules are arranged at the ice surface.",
      img: "" },
    { name: "X-ray photoelectron spectroscopy (XPS)",
      tag: "Elemental and chemical state",
      text: "Measures the elements present and their chemical states, for ice films and for nanomaterials in collaborative projects.",
      img: "" },
    { name: "Vacuum-ultraviolet deuterium continuum lamp",
      tag: "Photolysis source",
      text: "A VUV light source used to irradiate ices and clathrate hydrates, simulating the ultraviolet radiation field of the interstellar medium.",
      img: "" },
    { name: "Cryo-electron microscope",
      tag: "Electron microscopy",
      text: "Cryogenic electron microscopy for structural characterization of samples at low temperature.",
      img: "" }
  ],

  // ---------------------------------------------------- EXPOSURE & ACCOLADES
  // Each list can be left as [] to hide it. Copy a block to add another entry.
  exposure: [
    { when: "Jan – Mar 2026", title: "RESOLV Visiting Research Fellow",
      where: "Ruhr-Universität Bochum, Germany",
      text: "Research visit hosted by André K. Eckhardt, an Emmy Noether research group leader." }
  ],

  awards: [
    // { when: "2025", title: "Award or fellowship name", where: "Awarding body", text: "One line of detail." }
  ],

  talks: [
    // { when: "2025", title: "Title of talk or poster", where: "Conference, city", text: "Oral / poster" }
  ],

  // -------------------------------------------------------------- TEACHING
  teachingIntro: "Courses I have taken during my M.Sc. and Ph.D. coursework.",

  // Add courses like this (copy a line, edit it):
  // { term: "Jul – Nov 2021", code: "CY5010", title: "Course title", institution: "IIT Madras", grade: "" }
  courses: [],

  // Optional: teaching assistantships or mentoring. Leave [] to hide.
  teachingExperience: [
    // { when: "2023", title: "Teaching assistant, General Chemistry", where: "IIT Madras", text: "" }
  ],

  // --------------------------------------------------------------- CONTACT
  address: ["Department of Chemistry", "Indian Institute of Technology Madras", "Chennai, Tamil Nadu 600036, India"],

  // type picks the icon: email | scholar | orcid | linkedin | researchgate | github | cv | link
  // "text" is the typed link shown on the page. To add one, copy a line and fill it in.
  contacts: [
    { type: "email",   label: "Email",          text: "98soham06@gmail.com", url: "mailto:98soham06@gmail.com" },
    { type: "scholar", label: "Google Scholar", text: "scholar.google.com/citations?user=TfxnEn8AAAAJ", url: "https://scholar.google.com/citations?user=TfxnEn8AAAAJ&hl=en" },
    { type: "orcid",   label: "ORCID",          text: "orcid.org/0009-0000-8151-6065", url: "https://orcid.org/0009-0000-8151-6065" }
    // { type: "linkedin",     label: "LinkedIn",     text: "linkedin.com/in/your-name", url: "https://www.linkedin.com/in/your-name" },
    // { type: "researchgate", label: "ResearchGate", text: "researchgate.net/profile/your-name", url: "https://www.researchgate.net/profile/your-name" },
  ]
};
