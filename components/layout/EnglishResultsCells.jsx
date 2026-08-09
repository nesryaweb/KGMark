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
      {/* English Semester 1 */}
      <ResultCell value={semester1} color="bg-gray-900" />

      {/* English Semester 2 */}
      <ResultCell value={semester2} color="bg-gray-900" />

      {/* English Yearly */}
      <ResultCell value={yearly} color="bg-gray-800" />
    </>
  );
}
