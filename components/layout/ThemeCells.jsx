import { TableCell } from "@/components/ui/table";

export default function ThemeCells({
  assessment,
  studentId,
  subject,
}) {
  const mark =
    assessment?.marks?.[studentId] ?? 0;

  const percentage =
    assessment?.averages?.[studentId] ?? 0;

  const isChibt =
    subject?.name?.toLowerCase() === "chibt";

  // CHIBT:
  // Week columns show only the mark.
  if (isChibt) {
    return (
      <TableCell className="text-right w-20 min-w-20">
        {mark}
      </TableCell>
    );
  }

  // OTHER SUBJECTS
  return (
    <>
      <TableCell className="text-right w-20 min-w-20">
        {mark}
      </TableCell>

      {subject.calculateEvaluationAverage && (
        <TableCell className="text-right border-r-2 border-gray-900 w-20 min-w-20">
          {percentage.toFixed(1)}%
        </TableCell>
      )}
    </>
  );
}