export type Answers = Record<string, number>; // questionId -> score (1-5)

export interface SectionResult {
  sectionId: string;
  title: string;
  score: number;
  grade: "Stable" | "Mild Tension" | "Active Struggle" | "Identity Distortion";
}

export function getGrade(score: number): SectionResult["grade"] {
  if (score >= 4 && score <= 8) return "Stable";
  if (score >= 9 && score <= 12) return "Mild Tension";
  if (score >= 13 && score <= 16) return "Active Struggle";
  return "Identity Distortion"; // 17-20
}

export function calculateResults(
  sections: { id: string; title: string; questions: { id: string }[] }[],
  answers: Answers
): SectionResult[] {
  return sections.map((section) => {
    const score = section.questions.reduce(
      (sum, q) => sum + (answers[q.id] || 0),
      0
    );
    return {
      sectionId: section.id,
      title: section.title,
      score,
      grade: getGrade(score),
    };
  });
}