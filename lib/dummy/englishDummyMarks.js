const studentBaseMarks = {
  "1": 8,
  "2": 9,
  "3": 7,
  "4": 10,
  "5": 6,
  "6": 8,
  "7": 9,
  "8": 7,
  "9": 10,
  "10": 8,
};

export const englishDummyMarks = Array.from(
  { length: 32 },
  (_, index) => {
    const evaluationNumber = index + 1;

    return {
      Subject: "english",
      evaluationNumber: `Evaluation ${evaluationNumber}`,
      outOf: 10,

      marks: Object.fromEntries(
        Object.entries(studentBaseMarks).map(
          ([studentId, baseMark]) => {
            const variation =
              (index + Number(studentId)) % 3 - 1;

            const mark = Math.max(
              0,
              Math.min(10, baseMark + variation)
            );

            return [studentId, mark];
          }
        )
      ),
    };
  }
);