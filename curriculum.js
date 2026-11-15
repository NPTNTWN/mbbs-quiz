
function getSemesterCourses(courses, year, semester) {
  return courses.filter((course) => course.year === year && course.semester === semester);
}

function getCreditSummary(courses, year, semester) {
  let semesterCredits = 0;
  let yearCredits = 0;
  let cumulativeCredits = 0;

  for (const course of courses) {
    if (course.year === year) {
      yearCredits += course.credits;
      if (course.semester === semester) {
        semesterCredits += course.credits;
      }
    }

    if (course.year < year || (course.year === year && course.semester <= semester)) {
      cumulativeCredits += course.credits;
    }
  }

  return { semesterCredits, yearCredits, cumulativeCredits };
}

function formatCredits(credits) {
  return String(credits);
}

function getCurriculumViewModel(courses, year, semester) {
  const semesterCourses = getSemesterCourses(courses, year, semester);
  return {
    year,
    semester,
    summary: getCreditSummary(courses, year, semester),
    courses: semesterCourses,
    courseCount: semesterCourses.length,
  };
}

const COURSE_ICONS = [
  [/introduction to china/, '🏯'], [/speaking/, '🗣️'], [/listening/, '🎧'],
  [/reading|writing/, '✍️'], [/hsk/, '📝'], [/traditional chinese/, '🌿'],
  [/medical chinese/, '📖'], [/english/, '🔤'], [/anatomy/, '🦴'],
  [/biochem/, '⚗️'], [/chemistry/, '🧪'], [/cell biology|histology/, '🔬'],
  [/computer/, '💻'], [/molecular/, '🧬'], [/immunology/, '🛡️'],
  [/microbiology|infectious/, '🦠'], [/parasitology/, '🐛'],
  [/pathophysiology/, '🌡️'], [/physiology/, '💓'], [/pathology/, '🧫'],
  [/pharmacology/, '💊'], [/preventive/, '💉'], [/epidemiology/, '📈'],
  [/biostatistics/, '📊'], [/diagnostics/, '🔍'], [/surgery/, '🏥'],
  [/radiology/, '📷'], [/internal medicine/, '🩺'], [/obstetrics/, '👶'],
  [/forensic/, '🔎'], [/pediatrics/, '🧒'], [/neurology/, '🧠'],
  [/emergency/, '🚑'], [/dermatology/, '🧴'], [/otorhinolaryngology/, '👂'],
  [/ophthalmology/, '👁️'], [/stomatology/, '🦷'], [/psychiatry/, '💭'],
];

function getCourseIcon(englishName) {
  const name = englishName.toLowerCase();
  const match = COURSE_ICONS.find(([pattern]) => pattern.test(name));
  return match ? match[1] : '📘';
}

function renderCurriculum(container, courses) {
  const doc = container.ownerDocument;

  function element(tag, className, text) {
    const node = doc.createElement(tag);
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function labelledValue(label, value, className) {
    const pair = element('div', className);
    pair.append(
      element('dt', className + '-label', label),
      element('dd', className + '-value', value),
    );
    return pair;
  }

  let expandedCourseId = null;

  function courseCard(course) {
    const isExpanded = expandedCourseId === course.id;
    const detailsId = 'curriculum-course-' + course.id + '-details';
    const card = element('article', 'curriculum-course');
    const toggle = element('button', 'curriculum-course-toggle');
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', String(isExpanded));
    toggle.setAttribute('aria-controls', detailsId);
    toggle.addEventListener('click', () => {
      expandedCourseId = isExpanded ? null : course.id;
      updateCourses();
    });
    const head = element('span', 'curriculum-course-head');
    const names = element('span', 'curriculum-course-names');
    const chineseName = element('p', 'curriculum-course-chinese', course.chineseName);
    chineseName.lang = 'zh-Hans';
    names.append(
      element('span', 'curriculum-course-title', course.englishName),
      chineseName,
    );
    head.append(
      element('span', 'curriculum-course-icon', getCourseIcon(course.englishName)),
      names,
      element('span', 'curriculum-course-credits', formatCredits(course.credits) + ' credits'),
      element('span', 'curriculum-course-chevron'),
    );
    toggle.append(head);
    const details = element('dl', 'curriculum-course-details');
    details.id = detailsId;
    details.hidden = !isExpanded;
    details.append(
      labelledValue('Pinyin', course.pinyin, 'curriculum-course-detail'),
      labelledValue('Course code', course.courseCode, 'curriculum-course-detail'),
      labelledValue('Total hours', course.totalHours, 'curriculum-course-detail'),
      labelledValue('Theory hours', course.theoryHours, 'curriculum-course-detail'),
      labelledValue('Lab hours', course.labHours, 'curriculum-course-detail'),
    );
    card.append(toggle, details);
    return card;
  }

  let year = 1;
  let semester = 1;
  const selectorButtons = [];

  function selector(label, field, options) {
    const group = element('div', 'curriculum-selector curriculum-selector-' + field);
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', label);
    for (const option of options) {
      const button = element('button', 'curriculum-selector-button', label + ' ' + option);
      button.type = 'button';
      button.addEventListener('click', () => {
        if (field === 'year') year = option;
        else semester = option;
        expandedCourseId = null;
        updateSelection();
      });
      selectorButtons.push({ button, field, option });
      group.append(button);
    }
    return group;
  }

  const controls = element('div', 'curriculum-controls');
  controls.append(
    selector('Year', 'year', [1, 2, 3, 4, 5]),
    selector('Semester', 'semester', [1, 2]),
  );
  const summary = element('div', 'curriculum-summary');
  summary.setAttribute('aria-live', 'polite');
  const courseList = element('div', 'curriculum-course-list');
  const rotation = element('p', 'curriculum-rotation', 'Year 6: clinical rotations, no standard course list.');

  function updateSelection() {
    const model = getCurriculumViewModel(courses, year, semester);
    for (const { button, field, option } of selectorButtons) {
      button.setAttribute('aria-pressed', String(model[field] === option));
    }
    const s = model.summary;
    summary.replaceChildren(
      element('span', 'curriculum-stat', model.courseCount + ' courses'),
      element('span', 'curriculum-stat', 'This semester: ' + formatCredits(s.semesterCredits) + ' credits'),
      element('span', 'curriculum-stat', 'This year: ' + formatCredits(s.yearCredits) + ' credits'),
      element('span', 'curriculum-stat', 'Total so far: ' + formatCredits(s.cumulativeCredits) + ' credits'),
    );
    updateCourses(model);
  }

  function updateCourses(model) {
    const currentModel = model || getCurriculumViewModel(courses, year, semester);
    courseList.replaceChildren(...currentModel.courses.map(courseCard));
  }

  updateSelection();
  container.replaceChildren(controls, summary, courseList, rotation);
}

function initCurriculum() {
  const container = document.getElementById('curriculum');
  if (container) renderCurriculum(container, curriculumCourses);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getSemesterCourses,
    getCreditSummary,
    formatCredits,
    getCurriculumViewModel,
    getCourseIcon,
    renderCurriculum,
    initCurriculum,
  };
}
