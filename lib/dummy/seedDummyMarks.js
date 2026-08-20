import { addChibtAverages, saveSemesterAverages } from "@/lib/calculations";

import { setStorage } from "@/lib/storage";

import { students } from "@/lib/student";

import { getSubject } from "@/lib/getSubject";

import { chibtDummyMarks } from "./chibtDummyMarks";

import { englishDummyMarks } from "./englishDummyMarks";

import { toast } from "react-toastify";

export function seedDummyMarks() {
  const chibt = getSubject("chibt");
  const english = getSubject("english");

  const chibtAssessments = chibtDummyMarks.map((assessment) =>
    addChibtAverages(assessment),
  );

  setStorage("chibtMarks", chibtAssessments);

  setStorage("englishMarks", englishDummyMarks);

  saveSemesterAverages(chibtAssessments, students, chibt);

  saveSemesterAverages(englishDummyMarks, students, english);

  toast.success("Dummy marks populated successfully");
}
