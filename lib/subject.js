export const subjects = {
  chibt: {
    name: "Chibt",
    storageKey: "chibtMarks",
    evaluationsPerSemester: 3,
    calculateEvaluationAverage: true,
    evaluations: [
      "Theme 1",
      "Theme 2",
      "Theme 3",
      "Theme 4",
      "Theme 5",
      "Theme 6",
    ],
  },

  english: {
    name: "English",
    storageKey: "englishMarks",
    evaluationsPerSemester: 3,
    calculateEvaluationAverage: false,
    evaluations: Array.from(
      { length: 6 },
      (_, index) => `Evaluation ${index + 1}`,
    ),
  },
};
