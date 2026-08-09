# KG Mark

KG Mark is a lightweight student mark-recording and results management system designed for kindergarten teachers.

The application makes it easier to record student assessments, calculate semester and yearly results, and display student grades in a structured results table.

## Features

### Student Management

* Display a predefined list of students.
* Use student IDs to associate marks with individual students.
* Display student names throughout the mark-recording and results pages.

### Subject-Based Assessment

KG Mark currently supports two subjects:

* **Chibt**
* **English**

Each subject has its own assessment structure.

#### Chibt

Chibt has 6 evaluations:

```text
Theme 1
Theme 2
Theme 3
Theme 4
Theme 5
Theme 6
```

The evaluations are divided into two semesters:

```text
Semester 1 → Theme 1, 2, 3
Semester 2 → Theme 4, 5, 6
```

#### English

English has 32 evaluations:

```text
Evaluation 1 → Evaluation 32
```

They are divided into:

```text
Semester 1 → Evaluation 1–16
Semester 2 → Evaluation 17–32
```

The assessment configuration is centralized so that subject-specific logic does not need to be hardcoded throughout the application.

---

## Mark Recording

Teachers can select a subject and record marks for a specific evaluation.

Each assessment stores:

```js
{
  evaluationNumber: "Theme 1",
  outOf: 10,
  marks: {
    "1": 8,
    "2": 7,
    "3": 9
  }
}
```

For English, the same structure is used with evaluation numbers such as:

```js
{
  evaluationNumber: "Evaluation 1",
  outOf: 10,
  marks: {
    "1": 8,
    "2": 7
  }
}
```

The system supports:

* Selecting an evaluation.
* Setting the full mark.
* Entering student marks.
* Automatically filling marks when required.
* Editing marks.
* Saving assessments.
* Keeping previously recorded assessments.
* Resetting the form after saving.

---

## Local Storage

KG Mark currently uses `localStorage` for persistence.

Storage is centralized through:

```text
lib/storage.js
```

The storage utility provides:

```js
getStorage()
setStorage()
removeStorage()
```

This keeps storage logic separate from UI components and makes it easier to replace localStorage with a backend later.

### Subject Storage

Chibt assessments are stored under:

```text
chibtMarks
```

English assessments are stored under:

```text
englishMarks
```

Semester and yearly averages are stored separately:

```text
chibtMarksSemesterAverages
englishMarksSemesterAverages
```

Example:

```js
{
  semester1: {
    "1": 85.5,
    "2": 90
  },

  semester2: {
    "1": 88,
    "2": 92
  },

  yearly: {
    "1": 86.75,
    "2": 91
  }
}
```

---

## Calculations

Calculation logic is kept separate from the UI in:

```text
lib/calculations.js
```

### Percentage

Marks are converted into percentages using:

```text
mark ÷ outOf × 100
```

Percentages are rounded to two decimal places.

Example:

```text
8 / 10 = 80.00%
```

### Chibt Evaluation Average

Chibt evaluations can store an individual percentage for each student.

For example:

```js
{
  evaluationNumber: "Theme 1",
  outOf: 10,

  marks: {
    "1": 8,
    "2": 9
  },

  averages: {
    "1": 80,
    "2": 90
  }
}
```

### Semester Average

The semester average is only calculated when all required evaluations for that semester have been recorded.

For Chibt:

```text
Semester 1
Theme 1 + Theme 2 + Theme 3

Semester 2
Theme 4 + Theme 5 + Theme 6
```

For English:

```text
Semester 1
Evaluation 1–16

Semester 2
Evaluation 17–32
```

If the required evaluations or student marks are incomplete, the semester result remains:

```text
—
```

rather than showing an incomplete average.

### Yearly Average

The yearly average is only calculated when both semester averages exist.

```text
Semester 1
      +
Semester 2
      ↓
   ÷ 2
      ↓
Yearly Average
```

---

# Grading System

KG Mark converts percentages into grades.

| Percentage | Grade |
| ---------- | ----- |
| 90–100%    | A     |
| 70–89%     | B     |
| 50–69%     | C     |
| Below 50%  | D     |

Grades can be displayed for:

* Individual Chibt themes.
* Chibt semester results.
* Chibt yearly result.
* English semester results.
* English yearly result.

---

# Results Page

The results page provides a consolidated view of student performance.

The structure is approximately:

```text
Student
│
├── Chibt
│   ├── Theme 1
│   ├── Theme 2
│   ├── Theme 3
│   ├── Semester 1
│   ├── Theme 4
│   ├── Theme 5
│   ├── Theme 6
│   ├── Semester 2
│   └── Yearly
│
└── English
    ├── Semester 1
    ├── Semester 2
    └── Yearly
```

The results page displays the student's **grade**, rather than exposing the calculation logic directly to the user.

---

# Architecture

The application follows a component-based architecture.

A simplified data flow is:

```text
                 Subject Configuration
                         │
                         ↓
                    Add Marks
                         │
                         ↓
                Assessment Object
                         │
                         ↓
                   localStorage
                         │
             ┌───────────┴───────────┐
             ↓                       ↓
       Calculations              Results
             │                       │
             ↓                       ↓
   Semester / Yearly           Student Grades
       Averages
```

The goal is to keep:

* UI components responsible for presentation.
* Calculation functions responsible for calculations.
* Storage utilities responsible for persistence.
* Subject configuration responsible for subject-specific rules.

---

# Subject Configuration

Subject-specific settings are centralized.

Example:

```js
export const subjects = {
  chibt: {
    name: "Chibt",
    storageKey: "chibtMarks",

    evaluations: [
      "Theme 1",
      "Theme 2",
      "Theme 3",
      "Theme 4",
      "Theme 5",
      "Theme 6",
    ],

    evaluationsPerSemester: 3,

    calculateEvaluationAverage: true,
  },

  english: {
    name: "English",
    storageKey: "englishMarks",

    evaluations: Array.from(
      { length: 32 },
      (_, index) => `Evaluation ${index + 1}`
    ),

    evaluationsPerSemester: 16,

    calculateEvaluationAverage: false,
  },
};
```

This allows the same components to work with both subjects while applying different rules.

---

# Main Project Structure

A simplified structure:

```text
app/
├── page.jsx
├── add-marks/
│   └── page.jsx
├── show-marks/
│   └── page.jsx
└── results/
    └── page.jsx

components/
├── layout/
│   ├── MarksTable.jsx
│   ├── RecordedMarksTable.jsx
│   ├── MarksTableHeader.jsx
│   ├── ThemeCells.jsx
│   ├── ResultCell.jsx
│   ├── ChibtResultsCells.jsx
│   └── EnglishResultsCells.jsx
│
└── ui/
    └── shadcn components

lib/
├── calculations.js
├── storage.js
├── student.js
└── subjects.js
```

The exact folder structure can evolve as the application grows.

---

# Technologies

KG Mark is built with:

* **Next.js**
* **React**
* **JavaScript**
* **Tailwind CSS**
* **shadcn/ui**
* **localStorage**

The application uses the Next.js App Router.

---

# UI Components

The interface uses shadcn/ui components where appropriate, including:

* Card
* Button
* Input
* Select
* Checkbox
* Table
* Separator

This keeps the UI consistent while allowing custom styling through Tailwind CSS.

---

# Current Data Flow

When a teacher records a mark:

```text
Select Subject
      ↓
Select Evaluation
      ↓
Set Full Mark
      ↓
Enter Student Marks
      ↓
Save
      ↓
Update Subject Storage
      ↓
Calculate Available Results
      ↓
Save Semester/Yearly Results
```

When the results page is opened:

```text
localStorage
      ↓
Load Chibt Results
      ↓
Load English Results
      ↓
Calculate / Read Grades
      ↓
Display Student Results
```

---

# Future Features

Potential future improvements include:

* PDF report generation.
* Official school report format.
* Printable student reports.
* Student search.
* Student filtering.
* Academic year management.
* Editing and deleting assessments.
* Exporting results.
* Importing student lists.
* Backend database persistence.
* Authentication for teachers.
* Multiple classes.
* Multiple academic years.
* Backup and restore.
* Responsive mobile improvements.

---

# Development Philosophy

KG Mark is being developed around one important principle:

> **Keep subject-specific rules configurable instead of hardcoding them throughout the UI.**

For example, the application should not need separate copies of the entire mark-recording system just because Chibt has 6 themes and English has 32 evaluations.

Instead:

```text
Subject Configuration
        ↓
Shared Components
        ↓
Subject-Specific Logic
        ↓
Shared Results System
```

This makes the application easier to maintain and expand.

---

# Project Status

KG Mark currently supports:

* [x] Student list
* [x] Chibt assessments
* [x] English assessments
* [x] Subject-specific evaluation selection
* [x] Mark entry
* [x] Full-mark configuration
* [x] Persistent localStorage
* [x] Multiple saved assessments
* [x] Chibt evaluation percentages
* [x] Semester calculations
* [x] Yearly calculations
* [x] Grade calculation
* [x] Consolidated student results
* [ ] Official PDF report format
* [ ] Backend persistence
* [ ] Authentication
* [ ] Deployment

---

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Purpose

KG Mark is being developed to replace a manual mark-recording workflow with a simple digital system that allows teachers to record assessments once and automatically obtain semester, yearly, and graded student results.
