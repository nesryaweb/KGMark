import ResultCell from "./ResultCell";

import {
  calculateSemesterAverage,
  calculateYearlyAverage,
} from "@/lib/calculations";

export default function ChibtResultsCells({
  studentId,
  assessments,
}) {
  const getAssessment = (evaluationNumber) => {
    return assessments.find(
      (assessment) =>
        assessment.evaluationNumber === evaluationNumber
    );
  };

  const theme1 = getAssessment("Theme 1");
  const theme2 = getAssessment("Theme 2");
  const theme3 = getAssessment("Theme 3");
  const theme4 = getAssessment("Theme 4");
  const theme5 = getAssessment("Theme 5");
  const theme6 = getAssessment("Theme 6");

  /*
   * Chibt:
   *
   * Theme 1, 2, 3 → Semester 1
   * Theme 4, 5, 6 → Semester 2
   */

  const semester1 = calculateSemesterAverage(
    assessments,
    studentId,
    1,
    3
  );

  const semester2 = calculateSemesterAverage(
    assessments,
    studentId,
    2,
    3
  );

  const yearly = calculateYearlyAverage(
    semester1,
    semester2
  );

  return (
    <>
      {/* Theme 1 */}
      <ResultCell
        value={theme1?.averages?.[studentId] ?? null}
      />

      {/* Theme 2 */}
      <ResultCell
        value={theme2?.averages?.[studentId] ?? null}
      />

      {/* Theme 3 */}
      <ResultCell
        value={theme3?.averages?.[studentId] ?? null}
      />

      {/* Semester 1 */}
      <ResultCell value={semester1} color="bg-gray-900" />

      {/* Theme 4 */}
      <ResultCell
        value={theme4?.averages?.[studentId] ?? null}
      />

      {/* Theme 5 */}
      <ResultCell
        value={theme5?.averages?.[studentId] ?? null}
      />

      {/* Theme 6 */}
      <ResultCell
        value={theme6?.averages?.[studentId] ?? null}
      />

      {/* Semester 2 */}
      <ResultCell value={semester2} color="bg-gray-900" />

      {/* Yearly */}
      <ResultCell value={yearly} color="bg-gray-800" />
    </>
  );
}