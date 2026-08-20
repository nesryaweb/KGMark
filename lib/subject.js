export const subjects = {
  chibt: {
    name: "Chibt",
    storageKey: "chibtMarks",
    evaluationsPerSemester: 3,
    calculateEvaluationAverage: true,

    themes: [
      "Theme 1",
      "Theme 2",
      "Theme 3",
      "Theme 4",
      "Theme 5",
      "Theme 6",
    ],

    weeks: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
    ],
  },

  english: {
    name: "English",
    storageKey: "englishMarks",
    evaluationsPerSemester: 16,
    calculateEvaluationAverage: false,

    evaluations: Array.from(
      { length: 32 },
      (_, index) => `Evaluation ${index + 1}`,
    ),
  },
};