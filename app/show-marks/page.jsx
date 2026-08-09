import { Suspense } from "react";
import ShowMarksClient from "./ShowMarksClient";
export default function ShowMarks() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShowMarksClient />
    </Suspense>
  );
}
