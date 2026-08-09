import { Suspense } from "react";
import AddMarks from "./AddMarksClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddMarks />
    </Suspense>
  );
}