import type { SectionResult } from "./scoring";

const gradeAdvice: Record<SectionResult["grade"], string> = {
  Stable:
    "This area looks fairly grounded for you. Keep protecting the habits and boundaries that made it stable, because peace is also something people maintain on purpose.",
  "Mild Tension":
    "There is a small tug here, not a disaster. Notice when this pattern starts showing up, pause before reacting, and choose one honest action instead of letting autopilot carry you.",
  "Active Struggle":
    "This one is asking for attention. Do not shame yourself for it, but do not ignore it either. Pick one trigger, name it clearly, and practice a calmer response this week.",
  "Identity Distortion":
    "This area may be carrying too much weight in how you see yourself. Slow down and separate your worth from the pressure to prove, impress, compete, or perform.",
};

export const buildPrompt = (results: SectionResult[], selectedResult: SectionResult) => {
  const summary = results
    .map((result) => `- ${result.title}: ${result.score}/20 (${result.grade})`)
    .join("\n");

  return `You are a warm, honest, and direct personality counselor with a Nigerian cultural tone.

The user just completed a personality assessment. Here are their section results:

${summary}

They clicked "Take Advice" for this section:
- ${selectedResult.title}: ${selectedResult.score}/20 (${selectedResult.grade})

Write a short, personalized response (max 120 words) that:
1. Speaks directly about the selected section
2. Matches the severity of the grade, from Stable to Identity Distortion
3. Gives one practical, grounded piece of advice
4. Ends with an encouraging line

Tone: conversational, not clinical. Think wise older sibling, not therapist report.
Do not use bullet points. Write in flowing paragraphs.`;
};

function buildLocalAdvice(results: SectionResult[], selectedResult: SectionResult) {
  const strongest = results.reduce((best, result) =>
    result.score < best.score ? result : best
  );
  const mostChallenging = results.reduce((worst, result) =>
    result.score > worst.score ? result : worst
  );

  return `${selectedResult.title} is showing as ${selectedResult.grade.toLowerCase()} with ${selectedResult.score}/20. ${gradeAdvice[selectedResult.grade]} Your strongest area right now is ${strongest.title}, while ${mostChallenging.title} seems to need the most care. Start small: choose one moment this week where this pattern usually wins, then respond with a little more honesty and patience. You are not finished growing, and that is good news.`;
}

export async function getAdvice(results: SectionResult[], selectedResult: SectionResult) {
  const prompt = buildPrompt(results, selectedResult);
  const adviceEndpoint = (import.meta as ImportMeta & {
    env?: { VITE_ADVICE_ENDPOINT?: string };
  }).env?.VITE_ADVICE_ENDPOINT;

  if (!adviceEndpoint) {
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    return buildLocalAdvice(results, selectedResult);
  }

  const response = await fetch(adviceEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, results, selectedResult }),
  });

  if (!response.ok) {
    throw new Error("Could not get advice right now.");
  }

  const data = await response.json();
  return data.advice ?? data.content?.[0]?.text ?? buildLocalAdvice(results, selectedResult);
}
