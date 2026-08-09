"use client";

import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import ResultsTable from "@/components/layout/ResultsTable";
import { getStorage } from "@/lib/storage";
import { students } from "@/lib/student";
import { subjects } from "@/lib/subject";
import Link from "next/link";

export default function ShowReport() {
  const [chibtAssessments, setChibtAssessments] = useState([]);
  const [englishAssessments, setEnglishAssessments] = useState([]);

  useEffect(() => {
    const savedChibt = getStorage(subjects.chibt.storageKey, []);

    const savedEnglish = getStorage(subjects.english.storageKey, []);

    setChibtAssessments(savedChibt);
    setEnglishAssessments(savedEnglish);
  }, []);
  console.log("assessments", chibtAssessments, englishAssessments);
  return (
    <main className="w-full">
      <Card className="w-full p-8">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Student Results</h1>

            <p className="text-sm text-muted-foreground mt-1">
              Annual student performance
            </p>
          </div>
          <Link href="/">← Back to home</Link>
        </div>
        <Separator className="my-6" />

        <ResultsTable
          students={students}
          chibtAssessments={chibtAssessments}
          englishAssessments={englishAssessments}
        />
      </Card>
    </main>
  );
}
