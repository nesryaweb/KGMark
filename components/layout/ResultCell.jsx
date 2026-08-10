import { TableCell } from "@/components/ui/table";
import { getGrade } from "@/lib/grading";

export default function ResultCell({ value, color }) {
  return (
    <TableCell
      className={`text-center border-r-2 border-gray-900 min-w-20 ${color || ""}`}
    >
      {value !== null && value !== undefined ? (
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium text-muted-foreground">
            {getGrade(value)}
          </span>
        </div>
      ) : (
        <span className="text-muted-foreground">—</span>
      )}
    </TableCell>
  );
}
