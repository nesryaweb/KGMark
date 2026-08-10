// app/about/page.tsx

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="flex flex-col mx-auto max-w-5xl">
        {/* Header */}
        <section className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium text-slate-400">KG MARK</p>

          <h1 className="text-4xl font-bold tracking-tight">About KG Mark</h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Kindergarten Mark Recording and Grading System
          </p>
        </section>
        <Button
          variant="ghost"
          className="cursor-pointer text-slate-400  hover:text-slate-200 self-end"
        >
          <Link href="/">← Back to home</Link>
        </Button>
        {/* What is KG Mark? */}
        <section className="mb-8">
          <Card className="border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-2xl font-semibold">What is KG Mark?</h2>

            <div className="space-y-4 leading-7 text-slate-400">
              <p>
                <strong className="text-white">KG Mark</strong> is a digital
                mark recording and grading system designed to help kindergarten
                teachers and supervisors record, manage, and review student
                assessment results.
              </p>

              <p>
                The system is designed around the Ethiopia’s current
                kindergarten (pre-primary) curriculum assessment structure,
                making it easier to record student performance without relying
                on manual calculations.
              </p>
            </div>
          </Card>
        </section>

        {/* What can you do? */}
        <section className="mb-8">
          <Card className="border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-6 text-2xl font-semibold">
              What can you do with KG Mark?
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Feature
                title="Add Marks"
                description="Enter students’ assessment marks for each subject and evaluation."
              />

              <Feature
                title="Show Marks"
                description="View the marks that have already been recorded for students."
              />

              <Feature
                title="Show Report"
                description="View the grading results for each student."
              />

              <Feature
                title="Automatic Calculations"
                description="The system automatically calculates the required averages and grading results."
              />
            </div>
          </Card>
        </section>

        {/* Getting Started */}
        <section>
          <Card className="border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-2xl font-semibold">Getting Started</h2>

            <div className="space-y-4 leading-7 text-slate-400">
              <p>
                To explore the system, use the{" "}
                <strong className="text-white">“Populate Dummy Marks”</strong>{" "}
                button on the dashboard. This will add sample data that you can
                use to test the different features without entering real student
                information.
              </p>

              <p>
                Once you are familiar with the system, you can use the available
                pages to enter, review, and evaluate student marks.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}

function Feature({ title, description }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-5">
      <h3 className="mb-2 font-semibold text-white">{title}</h3>

      <p className="text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
