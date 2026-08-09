export function getGrade(percentage) {
  if (percentage === null || percentage === undefined) {
    return "";
  }

  if (percentage >= 90) {
    return "A";
  }

  if (percentage >= 70) {
    return "B";
  }

  if (percentage >= 50) {
    return "C";
  }

  return "D";
} 