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

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <Label>Evaluation</Label>

        <Select
          value={selectedEvaluation}
          onValueChange={(value) => {
            setSelectedEvaluation(value);
          }}
        >
          <SelectTrigger className="h-11">
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
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 items-baseline-last">
        <div className="space-y-2">
          <Label> Full Mark </Label>
          <Input
            placeholder="Enter full mark"
            value={fullMark}
            onChange={(e) => {
              setFullMark(Number(e.target.value));
            }}
          />
        </div>
        <div className="space-y-2 flex gap-4 items-center">
          <Label> Fill marks automatically </Label>
          <Checkbox
            checked={fillAutomatically}
            onCheckedChange={(checked) => {
              setFillAutomatically(checked);

              if (checked) {
                const newMarks = {};

                students.forEach((student) => {
                  newMarks[student.id] = fullMark;
                });

                setMarks(newMarks);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
