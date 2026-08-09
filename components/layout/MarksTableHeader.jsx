import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Fragment } from "react";

export default function MarksTableHeader({ assessments, subject }) {
  return (
    <TableHeader>
      <TableRow className="border-0">
        <TableHead
          rowSpan={2}
          className="text-center w-20 min-w-20    truncate border-r border-gray-800"
        >
          Students
        </TableHead>
        {assessments?.map((assessment) => {
          return subject.calculateEvaluationAverage ? (
            <TableHead
              key={assessment.evaluationNumber}
              colSpan={2}
              className="text-center border-r border-gray-800"
            >
              <div className="flex flex-col items-center gap-1">
                <span>{assessment.evaluationNumber}</span>

                <span className="text-xs font-normal text-muted-foreground">
                  out of {assessment.outOf}
                </span>
              </div>
            </TableHead>
          ) : (
            <TableHead
              key={assessment.evaluationNumber}
              colSpan={1}
              className="text-center border-r w-20 min-w-20  border-gray-800"
            >
              <div className="flex flex-col items-center gap-1">
                <span>{assessment.evaluationNumber}</span>

                <span className="text-xs font-normal text-muted-foreground">
                  out of {assessment.outOf}
                </span>
              </div>
            </TableHead>
          );
        })}

        <>
          <TableHead
            rowSpan={2}
            className="text-center border-r w-20 min-w-20  border-gray-800 bg-gray-900"
          >
            FSA
          </TableHead>

          <TableHead
            rowSpan={2}
            className="text-center border-r w-20 min-w-20  border-gray-800 bg-gray-900"
          >
            SSA
          </TableHead>

          <TableHead
            rowSpan={2}
            className="text-center border-r w-20 min-w-20  border-gray-800 bg-gray-800"
          >
            YA
          </TableHead>
        </>
      </TableRow>
      {/* Row 3 - Mark / % */}
      <TableRow className="border-0">
        {assessments?.map((assessment) =>
          subject.calculateEvaluationAverage ? (
            <Fragment key={assessment.evaluationNumber}>
              <TableHead
                key={`${assessment.evaluationNumber}-mark`}
                className="text-right w-20 min-w-20 "
              >
                Mark
              </TableHead>

              <TableHead
                key={`${assessment.evaluationNumber}-percentage`}
                className="border-r w-20 min-w-20  border-gray-800 text-right"
              >
                %
              </TableHead>
            </Fragment>
          ) : (
            <TableHead
              key={`${assessment.evaluationNumber}-mark`}
              className="border-r w-20 min-w-20    border-gray-800 text-right"
            >
              Mark
            </TableHead>
          ),
        )}
      </TableRow>
    </TableHeader>
  );
}
