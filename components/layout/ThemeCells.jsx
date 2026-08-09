import { TableCell } from "@/components/ui/table";
import { getGrade } from "@/lib/grading";
export default function ThemeCells({ assessment, studentId, subject }) {
  const mark = assessment?.marks?.[studentId] ?? 0;

  const percentage = assessment?.averages?.[studentId] ?? 0;


  const grade = getGrade(percentage);
  return (
    <>
      <TableCell className="text-right w-20 min-w-20">{mark}</TableCell>
      {subject.calculateEvaluationAverage && (
        <TableCell className="text-right border-r border-gray-800 w-20 min-w-20">
          {percentage}%
        </TableCell>
      )}
    </>
  );
}
