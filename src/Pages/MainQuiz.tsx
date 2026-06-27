import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sections } from "../Data/questions";
import QuestionCard from "../Components/questionCard";

export default function Quiz() {
  const navigate = useNavigate();
  const [sectionIndex, setSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const section = sections[sectionIndex];
  const totalQuestions = sections.reduce((sum, currentSection) => sum + currentSection.questions.length, 0);
  const answeredQuestions = Object.keys(answers).length;
  const progressPercent = Math.min((answeredQuestions / totalQuestions) * 100, 100);
  const currentSectionAnswered = section.questions.filter((question) => answers[question.id] !== undefined).length;
  const currentSectionComplete = section.questions.every((question) => answers[question.id] !== undefined);
  const canGoBack = sectionIndex > 0;
  const isLastSection = sectionIndex === sections.length - 1;

  const setAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [sectionIndex]);

  const goToNextSection = () => {
    if (!currentSectionComplete) return;

    if (isLastSection) {
      navigate("/compile", { state: { answers } });
      return;
    }

    setSectionIndex((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const goToPreviousSection = () => {
    if (!canGoBack) {
      navigate("/");
      return;
    }

    setSectionIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="grain min-h-screen max-w-3xl mx-auto px-5 py-10">
      <div className="quiz-sticky-header">
        <div className="flex items-center justify-between mb-4">
          <h2 className="display text-2xl">{section.title}</h2>
          <span className="eyebrow">
            Page {sectionIndex + 1} of {sections.length}
          </span>
        </div>

        <div className="progress-track mb-4">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="eyebrow">
          {answeredQuestions} of {totalQuestions} answered • {currentSectionAnswered} of {section.questions.length} in this section
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {section.questions.map((q, i) => (
          <QuestionCard
            key={q.id}
            text={q.text}
            value={answers[q.id] ?? null}
            onChange={(val) => setAnswer(q.id, val)}
            delay={i * 0.05}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-between gap-3">
        <button
          type="button"
          onClick={goToPreviousSection}
          className="border border-[var(--line)] px-6 py-3 rounded-lg hover:bg-[var(--paper-2)] transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          {canGoBack ? "Back" : "Back to Home"}
        </button>

        <button
          type="button"
          onClick={goToNextSection}
          disabled={!currentSectionComplete}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLastSection ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
