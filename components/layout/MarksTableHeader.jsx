import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Fragment } from "react";

export default function MarksTableHeader({
  assessments = [],
  subject,
}) {
  const isChibt =
    subject?.name?.toLowerCase() === "chibt";

  // ================================
  // CHIBT
  // ================================
  if (isChibt) {
    const recordedThemes = subject.themes.filter((theme) =>
      assessments.some(
        (assessment) => assessment.theme === theme,
      ),
    );

    return (
      <TableHeader>
        {/* FIRST ROW */}
        <TableRow className="border-0">
          <TableHead
            rowSpan={2}
            className="text-center w-50 min-w-50 truncate border-r-2 border-gray-900"
          >
            Students
          </TableHead>

          {recordedThemes.map((theme) => {
            const themeAssessments = assessments
              .filter(
                (assessment) =>
                  assessment.theme === theme,
              )
              .sort((a, b) => {
                const weekA = Number(
                  String(a.week).replace(/\D/g, ""),
                );

                const weekB = Number(
                  String(b.week).replace(/\D/g, ""),
                );

                return weekA - weekB;
              });

            const isComplete =
              themeAssessments.length === 5;

            return (
              <TableHead
                key={theme}
                colSpan={
                  themeAssessments.length +
                  (isComplete ? 1 : 0)
                }
                className="text-center border-r-2 border-gray-900"
              >
                {theme}
              </TableHead>
            );
          })}

          <TableHead
            rowSpan={2}
            className="text-center border-r w-20 min-w-20 border-gray-900 bg-gray-900 text-white"
          >
            FSA
          </TableHead>

          <TableHead
            rowSpan={2}
            className="text-center border-r w-20 min-w-20 border-gray-900 bg-gray-900 text-white"
          >
            SSA
          </TableHead>

          <TableHead
            rowSpan={2}
            className="text-center border-r w-20 min-w-20 border-gray-900 bg-gray-800 text-white"
          >
            YA
          </TableHead>
        </TableRow>

        {/* SECOND ROW */}
        <TableRow className="border-0">
          {recordedThemes.map((theme) => {
            const themeAssessments = assessments
              .filter(
                (assessment) =>
                  assessment.theme === theme,
              )
              .sort((a, b) => {
                const weekA = Number(
                  String(a.week).replace(/\D/g, ""),
                );

                const weekB = Number(
                  String(b.week).replace(/\D/g, ""),
                );

                return weekA - weekB;
              });

            const isComplete =
              themeAssessments.length === 5;

            return (
              <Fragment key={theme}>
                {themeAssessments.map((assessment) => (
                  <TableHead
                    key={`${theme}-${assessment.week}`}
                    className="text-center w-20 min-w-20"
                  >
                    {assessment.week}
                  </TableHead>
                ))}

                {isComplete && (
                  <TableHead className="text-center border-r-2 border-gray-900 w-20 min-w-20 bg-gray-900 text-white">
                    %
                  </TableHead>
                )}
              </Fragment>
            );
          })}
        </TableRow>
      </TableHeader>
    );
  }

  // ================================
  // ENGLISH / NORMAL SUBJECT
  // ================================

  return (
    <TableHeader>
      <TableRow className="border-0">
        <TableHead
          rowSpan={2}
          className="text-center w-50 min-w-50 truncate border-r-2 border-gray-900"
        >
          Students
        </TableHead>

        {assessments.map((assessment) => (
          <TableHead
            key={assessment.evaluationNumber}
            colSpan={
              subject.calculateEvaluationAverage
                ? 2
                : 1
            }
            className="text-center border-r-2 border-gray-900"
          >
            <div className="flex flex-col items-center gap-1">
              <span>
                {assessment.evaluationNumber}
              </span>

              <span className="text-xs font-normal text-muted-foreground">
                out of {assessment.outOf}
              </span>
            </div>
          </TableHead>
        ))}

        <TableHead
          rowSpan={2}
          className="text-center border-r w-20 min-w-20 border-gray-900 bg-gray-900 text-white"
        >
          FSA
        </TableHead>

        <TableHead
          rowSpan={2}
          className="text-center border-r w-20 min-w-20 border-gray-900 bg-gray-900 text-white"
        >
          SSA
        </TableHead>

        <TableHead
          rowSpan={2}
          className="text-center border-r w-20 min-w-20 border-gray-900 bg-gray-800 text-white"
        >
          YA
        </TableHead>
      </TableRow>

      <TableRow className="border-0">
        {assessments.map((assessment) =>
          subject.calculateEvaluationAverage ? (
            <Fragment
              key={assessment.evaluationNumber}
            >
              <TableHead className="text-right w-20 min-w-20">
                Mark
              </TableHead>

              <TableHead className="border-r w-20 min-w-20 border-gray-900 text-right">
                %
              </TableHead>
            </Fragment>
          ) : (
            <TableHead
              key={`${assessment.evaluationNumber}-mark`}
              className="border-r w-20 min-w-20 border-gray-900 text-right"
            >
              Mark
            </TableHead>
          ),
        )}
      </TableRow>
    </TableHeader>
  );
}