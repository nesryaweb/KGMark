"use client";
import RecordedMarksTable from "@/components/layout/RecordedMarksTable";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getSubject } from "@/lib/getSubject";
import { getStorage } from "@/lib/storage";
import { students } from "@/lib/student";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShowMarks() {
  const [assessments, setAssessments] = useState([]);
  const [semesterAverages, setSemesterAverages] = useState([]);
  const searchParams = useSearchParams();

  const subjectName = searchParams.get("subject");
  const subject = getSubject(subjectName);
  if (!subject) {
    return <div>Subject not found</div>;
  }

  useEffect(() => {
    const savedMarks = getStorage(`${subjectName}Marks`, []);
    const savedSemesterAverage = getStorage(
      `${subjectName}MarksSemesterAverages`,
      [],
    );

    setAssessments(savedMarks);
    setSemesterAverages(savedSemesterAverage);
  }, []);
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-slate-950">
      <main className="flex flex-col items-center justify-center gap-4 p-2 w-full md:w-3/4 bg-slate-900 rounded-lg h-screen  ">
       
          <Button
            variant="ghost"
            className="cursor-pointer text-slate-400 hover:text-slate-200 self-end"
          >
            <Link href="/">← Back to home</Link>
          </Button>
    
        <Card className="w-full p-4 overflow-auto">
          <h1 className="text-2xl font-bold text-white">
            {subjectName?.toUpperCase()} MARKS
          </h1>

          <Separator />
          <RecordedMarksTable
            assessments={assessments}
            savedSemesterAverage={semesterAverages}
            students={students}
            subject={subject}
          />
        </Card>
      </main>
    </div>
  );
}
