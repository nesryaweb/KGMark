import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

import MarksTableHeader from "./MarksTableHeader";
import ThemeCells from "./ThemeCells";

import {
  calculateChibtThemeAverage,
  calculateChibtSemesterAverage,
  calculateSemesterAverage,
} from "@/lib/calculations";
import { Fragment } from "react";

export default function RecordedMarksTable({
  students,
  assessments = [],
  subject,
  savedSemesterAverage,
}) {
  const isChibt =
    subject?.name?.toLowerCase() === "chibt";

  // ==========================================
  // CHIBT
  // ==========================================

  const recordedThemes = isChibt
    ? subject.themes.filter((theme) =>
        assessments.some(
          (assessment) =>
            assessment.theme === theme,
        ),
      )
    : [];

  // ==========================================
  // SEMESTERS
  // ==========================================

  const hasSemester1 = students.some((student) => {
    if (isChibt) {
      return (
        calculateChibtSemesterAverage(
          assessments,
          student.id,
          1,
        ) !== null
      );
    }

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
    if (isChibt) {
      return (
        calculateChibtSemesterAverage(
          assessments,
          student.id,
          2,
        ) !== null
      );
    }

    return (
      calculateSemesterAverage(
        assessments,
        student.id,
        2,
        subject.evaluationsPerSemester,
      ) !== null
    );
  });

  const hasYearly =
    hasSemester1 && hasSemester2;

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <MarksTableHeader
          assessments={assessments}
          subject={subject}
        />

        <TableBody>
          {students.map((student) => {
            const semester1 =
              savedSemesterAverage?.semester1?.[
                student.id
              ] ?? null;

            const semester2 =
              savedSemesterAverage?.semester2?.[
                student.id
              ] ?? null;

            const yearlyAverage =
              savedSemesterAverage?.yearly?.[
                student.id
              ] ?? null;

            return (
              <TableRow
                key={student.id}
                className="border-0"
              >
                {/* STUDENT */}
                <TableCell className="w-50 min-w-50 truncate border-r-2 border-gray-900">
                  {student.name}
                </TableCell>

                {/* ==================================
                    CHIBT
                    ================================== */}

                {isChibt ? (
                  recordedThemes.map((theme) => {
                    const themeAssessments =
                      assessments
                        .filter(
                          (assessment) =>
                            assessment.theme ===
                            theme,
                        )
                        .sort((a, b) => {
                          const weekA =
                            Number(
                              String(
                                a.week,
                              ).replace(
                                /\D/g,
                                "",
                              ),
                            );

                          const weekB =
                            Number(
                              String(
                                b.week,
                              ).replace(
                                /\D/g,
                                "",
                              ),
                            );

                          return (
                            weekA - weekB
                          );
                        });

                    const isComplete =
                      themeAssessments.length === 5;

                    return (
                      <Fragment
                        key={theme}
                      >
                        {/* WEEK MARKS */}
                        {themeAssessments.map(
                          (assessment) => (
                            <ThemeCells
                              key={`${theme}-${assessment.week}`}
                              assessment={
                                assessment
                              }
                              studentId={
                                student.id
                              }
                              subject={subject}
                            />
                          ),
                        )}

                        {/* THEME AVERAGE */}
                        {isComplete && (
                          <TableCell className="text-right border-r-2 border-gray-900 w-20 min-w-20 bg-gray-900 text-white">
                            {(() => {
                              const average =
                                calculateChibtThemeAverage(
                                  assessments,
                                  student.id,
                                  theme,
                                );

                              return average !==
                                null
                                ? `${average.toFixed(
                                    1,
                                  )}%`
                                : "—";
                            })()}
                          </TableCell>
                        )}
                      </Fragment>
                    );
                  })
                ) : (
                  /* ==================================
                     OTHER SUBJECTS
                     ================================== */

                  assessments.map(
                    (assessment) => (
                      <ThemeCells
                        key={
                          assessment.evaluationNumber
                        }
                        assessment={assessment}
                        studentId={student.id}
                        subject={subject}
                      />
                    ),
                  )
                )}

                {/* FSA */}
                {hasSemester1 && (
                  <TableCell className="bg-gray-900 text-white text-right w-20 min-w-20">
                    {semester1 !== null
                      ? `${semester1.toFixed(1)}%`
                      : "—"}
                  </TableCell>
                )}

                {/* SSA */}
                {hasSemester2 && (
                  <TableCell className="bg-gray-900 text-white text-right w-20 min-w-20">
                    {semester2 !== null
                      ? `${semester2.toFixed(1)}%`
                      : "—"}
                  </TableCell>
                )}

                {/* YA */}
                {hasYearly && (
                  <TableCell className="bg-gray-800 text-white text-right w-20 min-w-20">
                    {yearlyAverage !== null
                      ? `${yearlyAverage.toFixed(
                          1,
                        )}%`
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