import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import MarksTableHeader from "./MarksTableHeader";
import ThemeCells from "./ThemeCells";
import {
  calculateSemesterAverage,
  calculateYearlyAverage,
} from "@/lib/calculations";
import { subjects } from "@/lib/subject";

export default function RecordedMarksTable({ students, assessments, subject }) {
  return (
    <div className="w-full overflow-x-auto">
      <Table className=" overflow-x-auto">
        <MarksTableHeader assessments={assessments} subject={subject} />

        <TableBody>
          {students.map((student) => {
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
            return (
              <TableRow key={student.id} className="border-0">
                {/* Student name */}
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

                <TableCell>
                  {semester1 !== null ? `${semester1.toFixed(1)}%` : "—"}
                </TableCell>

                <TableCell>
                  {semester2 !== null ? `${semester2.toFixed(1)}%` : "—"}
                </TableCell>

                <TableCell>
                  {yearly !== null ? `${yearly.toFixed(1)}%` : "—"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
