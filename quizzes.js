
// SUBJECTS: one line per subject. The menu sorts them by credit (highest first).
// "name" must match "subject" in the quiz list below EXACTLY.
// hideCard: true = counted in the total credits, but no card is shown (no past paper).
const subjects = [
  { name: "Internal Medicine II",           credit: 8.0, icon: "🩺" },
  { name: "Surgery II",                     credit: 5.5, icon: "🏥" },
  { name: "Obstetrics & Gynecology",        credit: 5.5, icon: "👶" },
  { name: "Forensic Medicine",              credit: 3.0, icon: "🔎" },
  { name: "Comprehensive Medical Chinese",  credit: 4.0, icon: "📖", hideCard: true },  // <-- put the real credit here
];

// VERSION and AUTHOR: change the version to the date whenever you update the project
const appInfo = { author: "Tawan22", version: "2026.11.12" };
function footerText() {
  return "Made by " + appInfo.author + " · Version " + appInfo.version;
}
// This is the only place you will edit when you add a new quiz

const quizList = [
  { subject: "Internal Medicine II", year: 2016, title: "Int Med II 2016", id: "intmed2016", file: "intmedmcq2016_tester.js" },
  { subject: "Surgery II",           year: 2016, title: "Surgery II 2016", id: "surg2016",   file: "surgmcq2016.js" },
  { subject: "Surgery II",           year: 2017, title: "Surgery II 2017", id: "surg2017",   file: "surgmcq2017.js" },
  { subject: "Surgery II",           year: 2018, title: "Surgery II 2018", id: "surg2018",   file: "surgmcq2018.js" },
];
