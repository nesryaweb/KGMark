import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

import ResultsTableHeader from "./ResultsTableHeader";
import ChibtResultsCells from "./ChibtResultsCells";
import EnglishResultsCells from "./EnglishResultsCells";

export default function ResultsTable({
  students,
  chibtAssessments,
  englishAssessments,
}) {
  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-max">

        <ResultsTableHeader />

        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              className="border-0"
            >

              {/* Student */}
              <TableCell className="border-r border-gray-800 min-w-50 font-medium">
                {student.name}
              </TableCell>

              {/* Chibt */}
              <ChibtResultsCells
                studentId={student.id}
                assessments={chibtAssessments}
              />

              {/* English */}
              <EnglishResultsCells
                studentId={student.id}
                assessments={englishAssessments}
              />

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  );
}