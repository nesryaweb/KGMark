"use client";

import { Button } from "@/components/ui/button";
import { seedDummyMarks } from "@/lib/dummy/seedDummyMarks";

export default function PopulateDummyButton() {
  const handlePopulate = () => {
    seedDummyMarks();
  };

  return (
    <Button
      size="lg"
      variant="ghost"
      className="h-11 px-8 cursor-pointer font-bold rounded-full border-b-2 border-pink-300 text-pink-300 hover:text-slate-200"
      onClick={handlePopulate}
    >
      Populate Dummy Marks
    </Button>
  );
}
