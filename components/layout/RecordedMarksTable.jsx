import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import MarksTableHeader from "./MarksTableHeader";
import ThemeCells from "./ThemeCells";
import {
  calculateSemesterAverage,
  calculateYearlyAverage,
} from "@/lib/calculations";

export default function RecordedMarksTable({
  students,
  assessments,
  subject,
  savedSemesterAverage,
}) {
  const hasSemester1 = students.some((student) => {
    return (
      calculateSemesterAverage(
        assessments,
        student.id,
        1,
        subject.evaluationsPerSemester,
      ) !== null
    );
  });

  const hasSemester2 = students.some((student) => {
    return (
      calculateSemesterAverage(
        assessments,
        student.id,
        2,
        subject.evaluationsPerSemester,
      ) !== null
    );
  });

  const hasYearly = hasSemester1 && hasSemester2;

  return (
    <div className="w-full overflow-x-auto">
      <Table className=" overflow-x-auto">
        <MarksTableHeader assessments={assessments} subject={subject} />

        <TableBody>
          {students.map((student) => {
            const semester1 =
              savedSemesterAverage?.semester1?.[student.id] ?? null;

            const semester2 =
              savedSemesterAverage?.semester2?.[student.id] ?? null;

            const yearlyAverage =
              savedSemesterAverage?.yearly?.[student.id] ?? null;
            return (
              <TableRow key={student.id} className="border-0">
                <TableCell className="w-50 min-w-50 truncate border-r border-gray-800">
                  {student.name}
                </TableCell>

                {assessments.map((assessment) => (
                  <ThemeCells
                    key={assessment.evaluationNumber}
                    assessment={assessment}
                    studentId={student.id}
                    subject={subject}
                  />
                ))}

                {hasSemester1 && (
                  <TableCell className="bg-gray-900">
                    {semester1 !== null ? `${semester1.toFixed(1)}%` : "—"}
                  </TableCell>
                )}

                {hasSemester2 && (
                  <TableCell className="bg-gray-900">
                    {semester2 !== null ? `${semester2.toFixed(1)}%` : "—"}
                  </TableCell>
                )}

                {hasYearly && (
                  <TableCell className="bg-gray-800">
                    {yearlyAverage !== null
                      ? `${yearlyAverage.toFixed(1)}%`
                      : "—"}
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
