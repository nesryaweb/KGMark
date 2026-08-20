"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EvaluationSettings({
  selectedEvaluation,
  setSelectedEvaluation,
  selectedTheme,
  setSelectedTheme,
  selectedWeek,
  setSelectedWeek,
  fullMark,
  setFullMark,
  fillAutomatically,
  setFillAutomatically,
  students,
  setMarks,
  subject,
}) {
  const handleAutoFill = (checked) => {
    setFillAutomatically(checked);

    if (checked) {
      const newMarks = {};

      students.forEach((student) => {
        newMarks[student.id] = fullMark;
      });

      setMarks(newMarks);
    }
  };

  const isChibt = subject.name.toLowerCase() === "chibt";

  return (
    <div className="flex flex-col gap-8">
      {isChibt ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Theme */}
          <div className="space-y-2">
            <Label>Theme</Label>

            <Select value={selectedTheme} onValueChange={setSelectedTheme}>
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>

              <SelectContent>
                {subject.themes.map((theme) => (
                  <SelectItem key={theme} value={theme}>
                    {theme}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Week */}
          <div className="space-y-2">
            <Label>Week</Label>

            <Select value={selectedWeek} onValueChange={setSelectedWeek}>
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select week" />
              </SelectTrigger>

              <SelectContent>
                {subject.weeks.map((week) => (
                  <SelectItem key={week} value={week}>
                    {week}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <Label>Evaluation</Label>

          <Select
            value={selectedEvaluation}
            onValueChange={setSelectedEvaluation}
          >
            <SelectTrigger className="cursor-pointer">
              <SelectValue placeholder="Select evaluation" />
            </SelectTrigger>

            <SelectContent>
              {subject.evaluations.map((evaluation) => (
                <SelectItem key={evaluation} value={evaluation}>
                  {evaluation}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 items-baseline-last">
        <div className="space-y-2">
          <Label>Full Mark</Label>

          <Input
            placeholder="Enter full mark"
            value={fullMark}
            onChange={(e) => {
              setFullMark(Number(e.target.value));
            }}
          />
        </div>

        <div className="space-y-2 flex gap-4 items-center">
          <Checkbox
            id="fill-marks"
            checked={fillAutomatically}
            onCheckedChange={handleAutoFill}
          />

          <Label htmlFor="fill-marks">Fill marks automatically</Label>
        </div>
      </div>
    </div>
  );
}
