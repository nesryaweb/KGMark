import { subjects } from "./subject";

export function getSubject(subjectName) {
  return subjects[subjectName] || null;
}
