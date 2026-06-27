import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sections } from "../Data/questions";
import { getAdvice } from "../Utils/advice";
import { calculateResults, type Answers, type SectionResult } from "../Utils/scoring";

interface ResultsLocationState {
  answers?: Answers;
}

const gradeClassNames: Record<SectionResult["grade"], string> = {
  Stable: "grade-stable",
  "Mild Tension": "grade-mild",
  "Active Struggle": "grade-active",
  "Identity Distortion": "grade-distortion",
};

export default function Results() {
  const location = useLocation();
  const { answers = {} } = (location.state ?? {}) as ResultsLocationState;
  const results = calculateResults(sections, answers);
  const [advice, setAdvice] = useState("");
  const [selectedResult, setSelectedResult] = useState<SectionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleTakeAdvice = async (result: SectionResult) => {
    setOpen(true);
    setLoading(true);
    setSelectedResult(result);
    setAdvice("");

    try {
      const text = await getAdvice(results, result);
      setAdvice(text);
    } catch (error) {
      setAdvice(
        error instanceof Error
          ? error.message
          : "Could not get advice right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const closeAdvice = () => {
    setOpen(false);
    setAdvice("");
    setSelectedResult(null);
  };

  return (
    <div className="grain min-h-screen max-w-3xl mx-auto px-5 py-10">
      <div className="mb-8">
        <p className="eyebrow mb-3">Results</p>
        <h1 className="display text-4xl">Your self-assessment summary</h1>
      </div>

      <div className="flex flex-col gap-4">
        {results.map((result) => (
          <div key={result.sectionId} className="question-text">
            <div className="flex items-center justify-between gap-4">
              <h2 className="display text-xl">{result.title}</h2>
              <span className="result-score">{result.score}/20</span>
            </div>
            <div className="result-card-footer">
              <p className={`result-grade ${gradeClassNames[result.grade]}`}>
                {result.grade}
              </p>
              <button
                type="button"
                onClick={() => handleTakeAdvice(result)}
                className="advice-button"
              >
                Take Advice
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Home
        </Link>
      </div>

      {open && (
        <div className="advice-overlay" role="presentation" onClick={closeAdvice}>
          <div
            className="advice-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="advice-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-2">AI advice</p>
                <h2 id="advice-title" className="display text-2xl">
                  {selectedResult?.title}
                </h2>
              </div>
              <button type="button" className="advice-close" onClick={closeAdvice}>
                Close
              </button>
            </div>

            <div className="advice-body">
              {loading ? "Thinking through your result..." : advice}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
