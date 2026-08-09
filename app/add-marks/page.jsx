"use client";
import EvaluationSettings from "@/components/layout/EvaluationSettings";
import MarksTable from "@/components/layout/MarksTable";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { addChibtAverages, saveSemesterAverages } from "@/lib/calculations";
import { getSubject } from "@/lib/getSubject";

import { getStorage, setStorage } from "@/lib/storage";
import { students } from "@/lib/student";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddMarks() {
  const [marks, setMarks] = useState({});
  const [selectedEvaluation, setSelectedEvaluation] = useState("");
  const [fullMark, setFullMark] = useState(0);
  const [fillAutomatically, setFillAutomatically] = useState(false);
  const searchParams = useSearchParams();

  const subjectName = searchParams.get("subject");
  const subject = getSubject(subjectName);
  if (!subject) {
    return <div>Subject not found</div>;
  }

  const handleSave = () => {
    let assessment = {
      Subject: subjectName,
      evaluationNumber: selectedEvaluation,
      outOf: fullMark,
      marks: marks,
    };
    if (subject.calculateEvaluationAverage) {
      assessment = addChibtAverages(assessment);
    }
    const existingData = getStorage(subjectName + "Marks", []);

    const existingAssessments = Array.isArray(existingData)
      ? existingData
      : existingData
        ? [existingData]
        : [];

    const updatedAssessments = [...existingAssessments, assessment];

    setStorage(subjectName + "Marks", updatedAssessments);
    saveSemesterAverages(updatedAssessments, students, subject);
    toast.success(`${students.length} total marks recorded`);

    setMarks({});
    setSelectedEvaluation("");
    setFullMark(0);
    setFillAutomatically(false);

    console.log(assessment);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-slate-950">
      <main className="flex flex-col items-center justify-center gap-4 p-8w-full md:w-3/4 bg-slate-900 rounded-lg h-screen  ">
        <Button
          variant="ghost"
          className="cursor-pointer text-slate-400 hover:text-slate-200"
        >
          <Link href="/">← Back</Link>
        </Button>
        <h2 className="text-muted-foreground">
          Record {subject.name} Evaluation Marks
        </h2>
        <Card className="w-full p-8 overflow-y-auto">
          <h1 className="text-2xl font-bold text-white">{subject.name} Mark</h1>
          <EvaluationSettings
            subject={subject}
            selectedEvaluation={selectedEvaluation}
            setSelectedEvaluation={setSelectedEvaluation}
            fullMark={fullMark}
            setFullMark={setFullMark}
            fillAutomatically={fillAutomatically}
            setFillAutomatically={setFillAutomatically}
            students={students}
            setMarks={setMarks}
          />
          <Separator />

          <MarksTable
            students={students}
            marks={marks}
            setMarks={setMarks}
            fullMark={fullMark}
          />

          <Separator />

          <Button
            size="lg"
            className="h-11 px-8 text-slate-900 cursor-pointer font-bold rounded-full"
            onClick={handleSave}
          >
            Save Marks
          </Button>
        </Card>
      </main>
    </div>
  );
}
