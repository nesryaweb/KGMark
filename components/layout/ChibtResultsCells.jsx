import ResultCell from "./ResultCell";

import {
  calculateChibtThemeAverage,
  calculateChibtSemesterAverage,
  calculateYearlyAverage,
} from "@/lib/calculations";

export default function ChibtResultsCells({
  studentId,
  assessments,
}) {
  // Calculate each complete theme average.
  const theme1 = calculateChibtThemeAverage(
    assessments,
    studentId,
    "Theme 1",
  );

  const theme2 = calculateChibtThemeAverage(
    assessments,
    studentId,
    "Theme 2",
  );

  const theme3 = calculateChibtThemeAverage(
    assessments,
    studentId,
    "Theme 3",
  );

  const theme4 = calculateChibtThemeAverage(
    assessments,
    studentId,
    "Theme 4",
  );

  const theme5 = calculateChibtThemeAverage(
    assessments,
    studentId,
    "Theme 5",
  );

  const theme6 = calculateChibtThemeAverage(
    assessments,
    studentId,
    "Theme 6",
  );

  // Semester 1 = Theme 1 + Theme 2 + Theme 3
  const semester1 = calculateChibtSemesterAverage(
    assessments,
    studentId,
    1,
  );

  // Semester 2 = Theme 4 + Theme 5 + Theme 6
  const semester2 = calculateChibtSemesterAverage(
    assessments,
    studentId,
    2,
  );

  // Year = average of semester 1 and semester 2
  const yearly = calculateYearlyAverage(
    semester1,
    semester2,
  );

  return (
    <>
      {/* Semester 1 themes */}
      <ResultCell value={theme1} />
      <ResultCell value={theme2} />
      <ResultCell value={theme3} />

      {/* Semester 1 */}
      <ResultCell
        value={semester1}
        color="bg-gray-900"
      />

      {/* Semester 2 themes */}
      <ResultCell value={theme4} />
      <ResultCell value={theme5} />
      <ResultCell value={theme6} />

      {/* Semester 2 */}
      <ResultCell
        value={semester2}
        color="bg-gray-900"
      />

      {/* Yearly average */}
      <ResultCell
        value={yearly}
        color="bg-gray-800"
      />
    </>
  );
}