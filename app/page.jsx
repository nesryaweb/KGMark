import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { seedDummyMarks } from "@/lib/dummy/seedDummyMarks";
import PopulateDummyButton from "@/components/layout/PopulateDummyData";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-slate-950">
      <main className="flex flex-col items-center justify-center gap-4 p-8 max-w-300 w-screen bg-slate-900 rounded-lg h-screen">
        <h1 className="text-4xl font-bold text-white">KG MARK</h1>
        <h2 className="text-muted-foreground">
          Kindergarten Mark Recording System
        </h2>
        <div className="flex sm:flex-row flex-col justify-between items-baseline gap-4 w-full">
          <Button
            variant="outline"
            className="h-11 px-8 cursor-pointer font-bold rounded-full border-b-2 border-pink-300 text-pink-300 hover:text-slate-200"
          >
            <Link href="/show-report">Show Report</Link>
          </Button>
          <PopulateDummyButton />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Card>
            <div className="flex flex-col gap-4 w-full p-8 sm:flex-row">
              <div className="flex flex-col gap-4 w-full text-center sm:text-left">
                <h3 className="text-xl font-bold text-white">Chibt</h3>
                <p className="text-muted-foreground">Bole Kg A</p>
                <p className="text-muted-foreground">2025-2026</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  className="h-11 px-8 text-slate-900 cursor-pointer font-bold rounded-full"
                >
                  <Link href="/add-marks?subject=chibt">Add Marks</Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 px-8 cursor-pointer font-bold rounded-full"
                >
                  <Link href="/show-marks?subject=chibt">Show Marks</Link>
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col gap-4 w-full p-8 sm:flex-row">
              <div className="flex flex-col gap-4 w-full text-center sm:text-left">
                <h3 className="text-xl font-bold text-white">English</h3>
                <p className="text-muted-foreground">Bole Kg A</p>
                <p className="text-muted-foreground">2025-2026</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  className="h-11 px-8 text-slate-900 cursor-pointer font-bold rounded-full"
                >
                  <Link href="/add-marks?subject=english">Add Marks</Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 px-8 cursor-pointer font-bold rounded-full"
                >
                  <Link href="/show-marks?subject=english">Show Marks</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
