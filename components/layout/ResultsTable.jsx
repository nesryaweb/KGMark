import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

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
            <TableRow key={student.id} className="border-0">
              {/* Row: student name, CHIBT cells, English cells (in that order) */}
              <TableCell className="border-r-2 border-gray-900 min-w-50 font-medium">
                {student.name}
              </TableCell>

              <ChibtResultsCells
                studentId={student.id}
                assessments={chibtAssessments}
              />

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
