export const projectData = [
  {
    id: "shweb",
    source: require("../../../assets/screenshots/screenshot1.png"),
    color: "rgb(255,10,85,0.85)",
    title: "Shuttler Website",
    fontColor: "#E2E2E2",
    technologies: ["React", "CSS", "HTML5", "Vue"],
  },
  {
    id: "chweb",
    source: require("../../../assets/screenshots/screenshot2.png"),
    title: "Coding Hub Website",
    fontColor: "#E2E2E2",
    color: "rgb(255,94,111,0.85)",
    technologies: ["React", "CSS", "HTML5", "Javascript", "Firebase"],
  },
  {
    id: "emweb",
    source: require("../../../assets/screenshots/screenshot3.png"),
    title: "eGlu Main Website",
    fontColor: "#F4EBD9",
    color: "rgb(0,159,183,0.85)",
    technologies: ["JS", "CSS", "HTML5", "Express JS"],
  },
  {
    id: "eaweb",
    source: require("../../../assets/screenshots/screenshot4.png"),
    title: "eGlu App Website",
    fontColor: "#F93943",
    color: "rgb(232,232,232,0.85)",
    technologies: ["Express JS", "CSS", "HTML5", "JS"],
  },
  {
    id: "anand",
    source: require("../../../assets/screenshots/screenshot5.png"),
    title: "Ananda Timer",
    fontColor: "#F1FAEE",
    color: "rgb(203,69,27,0.85)",
    technologies: ["Flutter", "Adobe XD", "Android", "iOS"],
  },
  {
    id: "eland",
    source: require("../../../assets/screenshots/screenshot6.png"),
    title: "eGlu Lock Layout",
    fontColor: "#F0F3BD",
    color: "rgb(38,49,109,0.85)",
    technologies: ["Android", "Proto.io", "Kotlin"],
  },
  {
    id: "diand",
    source: require("../../../assets/screenshots/screenshot7.png"),
    title: "Deliver It",
    fontColor: "#EDF7F6",
    color: "rgb(0,139,139,0.85)",
    technologies: ["Android", "Java", "Proto.io", "PHP", "SQL"],
  },
  {
    id: "elweb",
    source: require("../../../assets/screenshots/screenshot8.png"),
    title: "eGlu Logger",
    fontColor: "#413C58",
    color: "rgb(248,248,248,0.85)",
    technologies: ["Node", "JS", "HTML5"],
  },
];

export const projectButtons = [
  { name: "SHOW ALL", id: "showall" },
  { name: "ANDROID", id: "android" },
  { name: "HTML5", id: "html5" },
  { name: "REACT", id: "react" },
  { name: "KOTLIN", id: "kotlin" },
  { name: "NODE JS", id: "nodejs" },
  { name: "JAVA", id: "java" },
  { name: "EXPRESS JS", id: "expressjs" },
  { name: "PHP", id: "php" },
  { name: "SQL", id: "sql" },
  { name: "NO SQL", id: "nosql" },
  { name: "FLUTTER", id: "flutter" },
];

export const projectTechnologies = [
  {
    id: "showall",
    value: [
      "shweb",
      "chweb",
      "emweb",
      "eaweb",
      "anand",
      "eland",
      "diand",
      "elweb",
    ],
  },
  {
    id: "android",
    value: ["anand", "eland", "diand"],
  },
  {
    id: "html5",
    value: ["shweb", "chweb", "emweb", "eaweb", "elweb"],
  },
  {
    id: "react",
    value: ["shweb", "chweb"],
  },
  {
    id: "kotlin",
    value: ["eland"],
  },
  {
    id: "nodejs",
    value: ["emweb", "eaweb", "elweb"],
  },
  {
    id: "java",
    value: ["diand"],
  },
  {
    id: "expressjs",
    value: ["emweb", "eaweb"],
  },
  {
    id: "php",
    value: ["diand"],
  },
  {
    id: "sql",
    value: ["diand"],
  },
  {
    id: "nosql",
    value: ["chweb", "shweb"],
  },
  {
    id: "flutter",
    value: ["anand"],
  },
];
