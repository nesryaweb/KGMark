import { setStorage } from "@/lib/storage";

/**
 * Utility helpers for marks/average calculations.
 * Functions return `null` when an average cannot be calculated
 * (e.g. missing marks) and `0` for safe percentage fallbacks.
 */

/**
 * Calculate a percentage from a `mark` and the `outOf` value.
 * Returns a number rounded to 2 decimals or `0` for invalid input.
 */
export function calculatePercentage(mark, outOf) {
  if (mark === undefined || !outOf || outOf === 0) {
    return 0;
  }

  return Number(((mark / outOf) * 100).toFixed(2));
}

/**
 * Calculate the average percentage for a semester.
 * - `assessments` is an array of assessment objects.
 * - `studentId` is used to lookup the student's mark on each assessment.
 * - `semester` is either `1` or `2`.
 * - `evaluationsPerSemester` is how many assessments make a semester.
 *
 * Returns the average percentage (0-100) or `null` if any mark is
 * missing or there are not enough assessments recorded yet.
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

  // Not enough assessments available yet for this semester
  if (semesterAssessments.length < evaluationsPerSemester) {
    return null;
  }

  const percentages = semesterAssessments.map((assessment) => {
    const mark = assessment.marks?.[studentId];

    if (mark === undefined || !assessment.outOf || assessment.outOf === 0) {
      return null; // missing or invalid mark for this student
    }

    return (mark / assessment.outOf) * 100;
  });

  // If any mark is missing, we cannot compute a reliable average
  if (percentages.some((percentage) => percentage === null)) {
    return null;
  }

  const total = percentages.reduce((sum, percentage) => sum + percentage, 0);

  return total / percentages.length;
}

/**
 * Persist calculated semester averages for all students for a subject.
 * Returns the computed `semesterAverages` object.
 */
export function saveSemesterAverages(assessments, students, subject) {
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

/**
 * Add pre-computed percentage averages to a CHIBT assessment object.
 * Returns a new assessment object with an `averages` map by student id.
 */
export function addChibtAverages(assessment) {
  const averages = {};

  Object.entries(assessment.marks).forEach(([studentId, mark]) => {
    averages[studentId] = calculatePercentage(mark, assessment.outOf);
  });

  return {
    ...assessment,
    averages,
  };
}

/**
 * Compute yearly average from two semester averages.
 * If either semester average is `null` the yearly average is `null`.
 */
export function calculateYearlyAverage(semester1Average, semester2Average) {
  if (semester1Average === null || semester2Average === null) {
    return null;
  }

  return (semester1Average + semester2Average) / 2;
}
