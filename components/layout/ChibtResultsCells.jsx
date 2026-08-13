import ResultCell from "./ResultCell";

import {
  calculateSemesterAverage,
  calculateYearlyAverage,
} from "@/lib/calculations";

// Render CHIBT result cells in the fixed order expected by the table UI.
// Themes 1-3 map to semester 1, themes 4-6 map to semester 2.
export default function ChibtResultsCells({ studentId, assessments }) {
  const getAssessment = (evaluationNumber) =>
    assessments.find(
      (assessment) => assessment.evaluationNumber === evaluationNumber,
    );

  const theme1 = getAssessment("Theme 1");
  const theme2 = getAssessment("Theme 2");
  const theme3 = getAssessment("Theme 3");
  const theme4 = getAssessment("Theme 4");
  const theme5 = getAssessment("Theme 5");
  const theme6 = getAssessment("Theme 6");

  const semester1 = calculateSemesterAverage(assessments, studentId, 1, 3);
  const semester2 = calculateSemesterAverage(assessments, studentId, 2, 3);
  const yearly = calculateYearlyAverage(semester1, semester2);

  // The table expects cells in this exact order: Theme1, Theme2, Theme3,
  // Semester1, Theme4, Theme5, Theme6, Semester2, Yearly
  return (
    <>
      <ResultCell value={theme1?.averages?.[studentId] ?? null} />
      <ResultCell value={theme2?.averages?.[studentId] ?? null} />
      <ResultCell value={theme3?.averages?.[studentId] ?? null} />

      <ResultCell value={semester1} color="bg-gray-900" />

      <ResultCell value={theme4?.averages?.[studentId] ?? null} />
      <ResultCell value={theme5?.averages?.[studentId] ?? null} />
      <ResultCell value={theme6?.averages?.[studentId] ?? null} />

      <ResultCell value={semester2} color="bg-gray-900" />
      <ResultCell value={yearly} color="bg-gray-800" />
    </>
  );
}
