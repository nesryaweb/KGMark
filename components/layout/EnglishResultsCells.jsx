"use client";

import { useEffect, useState } from "react";
import ResultCell from "./ResultCell";
import { getStorage } from "@/lib/storage";

export default function EnglishResultsCells({ studentId }) {
  const [semesterAverages, setSemesterAverages] = useState(null);

  useEffect(() => {
    const savedAverages = getStorage("englishMarksSemesterAverages", null);

    setSemesterAverages(savedAverages);
  }, []);

  const semester1 = semesterAverages?.semester1?.[studentId] ?? null;

  const semester2 = semesterAverages?.semester2?.[studentId] ?? null;

  const yearly = semesterAverages?.yearly?.[studentId] ?? null;

  return (
    <>
      {/* Stored English semester averages mapped to visible cells */}
      <ResultCell value={semester1} color="bg-gray-900" />
      <ResultCell value={semester2} color="bg-gray-900" />
      <ResultCell value={yearly} color="bg-gray-800" />
    </>
  );
}
