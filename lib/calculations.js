import { setStorage } from "@/lib/storage";

export function calculatePercentage(mark, outOf) {
  if (mark === undefined || !outOf || outOf === 0) {
    return 0;
  }

  return Number(((mark / outOf) * 100).toFixed(2));
}
export function calculateSemesterAverage(
  assessments,
  studentId,
  semester,
  evaluationsPerSemester,
) {
  const startIndex = (semester - 1) * evaluationsPerSemester;

  const endIndex = startIndex + evaluationsPerSemester;

  const semesterAssessments = assessments.slice(startIndex, endIndex);

  // Not enough evaluations recorded yet
  if (semesterAssessments.length < evaluationsPerSemester) {
    return null;
  }

  const percentages = semesterAssessments.map((assessment) => {
    const mark = assessment.marks?.[studentId];

    if (mark === undefined || !assessment.outOf || assessment.outOf === 0) {
      return null;
    }

    return (mark / assessment.outOf) * 100;
  });

  // One or more student marks are missing
  if (percentages.some((percentage) => percentage === null)) {
    return null;
  }

  const total = percentages.reduce((sum, percentage) => sum + percentage, 0);

  return total / percentages.length;
}
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

export function calculateYearlyAverage(semester1Average, semester2Average) {
  if (semester1Average === null || semester2Average === null) {
    return null;
  }

  return (semester1Average + semester2Average) / 2;
}
