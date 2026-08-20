import { setStorage } from "@/lib/storage";

/**
 * Calculate percentage from mark and full mark.
 */
export function calculatePercentage(mark, outOf) {
  if (mark === undefined || mark === null || !outOf || outOf === 0) {
    return 0;
  }

  return Number(((mark / outOf) * 100).toFixed(2));
}

/**
 * Calculate the average percentage of ONE theme.
 *
 * A theme must have all 5 weeks before its percentage
 * can be calculated.
 */
export function calculateChibtThemeAverage(assessments, studentId, theme) {
  const themeAssessments = assessments
    .filter((assessment) => assessment.theme === theme)
    .sort((a, b) => {
      const weekA = Number(String(a.week).replace(/\D/g, ""));

      const weekB = Number(String(b.week).replace(/\D/g, ""));

      return weekA - weekB;
    });

  // A theme is not complete until all 5 weeks exist.
  if (themeAssessments.length < 5) {
    return null;
  }

  const fiveWeeks = themeAssessments.slice(0, 5);

  let totalPercentage = 0;

  for (const assessment of fiveWeeks) {
    const mark = assessment.marks?.[studentId];

    if (
      mark === undefined ||
      mark === null ||
      !assessment.outOf ||
      assessment.outOf === 0
    ) {
      return null;
    }

    totalPercentage += (mark / assessment.outOf) * 100;
  }

  return Number((totalPercentage / 5).toFixed(2));
}

/**
 * Calculate the average of completed Chibt themes
 * for a semester.
 *
 * Semester 1 = Theme 1, 2, 3
 * Semester 2 = Theme 4, 5, 6
 */
export function calculateChibtSemesterAverage(
  assessments,
  studentId,
  semester,
) {
  const themes =
    semester === 1
      ? ["Theme 1", "Theme 2", "Theme 3"]
      : ["Theme 4", "Theme 5", "Theme 6"];

  const themeAverages = themes.map((theme) =>
    calculateChibtThemeAverage(assessments, studentId, theme),
  );

  // Semester cannot be calculated until
  // all 3 themes are complete.
  if (themeAverages.some((average) => average === null)) {
    return null;
  }

  const total = themeAverages.reduce((sum, average) => sum + average, 0);

  return Number((total / themeAverages.length).toFixed(2));
}

/**
 * Calculate yearly average from two semesters.
 */
export function calculateYearlyAverage(semester1Average, semester2Average) {
  if (semester1Average === null || semester2Average === null) {
    return null;
  }

  return Number(((semester1Average + semester2Average) / 2).toFixed(2));
}

/**
 * Save Chibt semester/yearly averages.
 */
export function saveChibtSemesterAverages(assessments, students) {
  const semesterAverages = {
    semester1: {},
    semester2: {},
    yearly: {},
  };

  students.forEach((student) => {
    const semester1 = calculateChibtSemesterAverage(assessments, student.id, 1);

    const semester2 = calculateChibtSemesterAverage(assessments, student.id, 2);

    const yearly = calculateYearlyAverage(semester1, semester2);

    semesterAverages.semester1[student.id] = semester1;

    semesterAverages.semester2[student.id] = semester2;

    semesterAverages.yearly[student.id] = yearly;
  });

  setStorage("chibtMarksSemesterAverages", semesterAverages);

  return semesterAverages;
}

/**
 * Add percentage information to a Chibt assessment.
 *
 * This is kept for compatibility with your existing
 * dummy-data seeding code.
 *
 * The percentage is NOT displayed for weekly Chibt marks.
 */
export function addChibtAverages(assessment) {
  const averages = {};

  Object.entries(assessment.marks || {}).forEach(([studentId, mark]) => {
    averages[studentId] = calculatePercentage(mark, assessment.outOf);
  });

  return {
    ...assessment,
    averages,
  };
}

/**
 * Existing generic semester calculation.
 * Used by English.
 */
export function calculateSemesterAverage(
  assessments,
  studentId,
  semester,
  evaluationsPerSemester,
) {
  const startIndex = (semester - 1) * evaluationsPerSemester;

  const endIndex = startIndex + evaluationsPerSemester;

  const semesterAssessments = assessments.slice(startIndex, endIndex);

  if (semesterAssessments.length < evaluationsPerSemester) {
    return null;
  }

  const percentages = semesterAssessments.map((assessment) => {
    const mark = assessment.marks?.[studentId];

    if (
      mark === undefined ||
      mark === null ||
      !assessment.outOf ||
      assessment.outOf === 0
    ) {
      return null;
    }

    return (mark / assessment.outOf) * 100;
  });

  if (percentages.some((percentage) => percentage === null)) {
    return null;
  }

  const total = percentages.reduce((sum, percentage) => sum + percentage, 0);

  return Number((total / percentages.length).toFixed(2));
}

/**
 * Save semester averages for subjects that use
 * the normal assessment system.
 *
 * Chibt uses saveChibtSemesterAverages instead.
 */
export function saveSemesterAverages(assessments, students, subject) {
  if (subject.name.toLowerCase() === "chibt") {
    return saveChibtSemesterAverages(assessments, students);
  }

  const semesterAverages = {
    semester1: {},
    semester2: {},
    yearly: {},
  };

  students.forEach((student) => {
    const semester1 = calculateSemesterAverage(
      assessments,
      student.id,
      1,
      subject.evaluationsPerSemester,
    );

    const semester2 = calculateSemesterAverage(
      assessments,
      student.id,
      2,
      subject.evaluationsPerSemester,
    );

    const yearly = calculateYearlyAverage(semester1, semester2);

    semesterAverages.semester1[student.id] = semester1;

    semesterAverages.semester2[student.id] = semester2;

    semesterAverages.yearly[student.id] = yearly;
  });

  setStorage(`${subject.storageKey}SemesterAverages`, semesterAverages);

  return semesterAverages;
}
