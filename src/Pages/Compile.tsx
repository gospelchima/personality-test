import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResultFootnotes from "../Components/ResultFootnotes";
import type { Answers } from "../Utils/scoring";

const compileDuration = 12000;

interface CompileLocationState {
  answers?: Answers;
}

export default function Compile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { answers } = (location.state ?? {}) as CompileLocationState;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate("/results", { replace: true, state: { answers: answers ?? {} } });
    }, compileDuration);

    return () => window.clearTimeout(timer);
  }, [answers, navigate]);

  return (
    <div className="grain min-h-screen flex items-center justify-center px-5 py-10">
      <div className="max-w-xl text-center">
        <p className="eyebrow mb-4">Compiling result</p>
        <h1 className="display text-[clamp(36px,8vw,72px)] mb-6">
          Reading your pattern
        </h1>
        <div className="progress-track mx-auto max-w-sm">
          <div className="progress-fill compile-progress" />
        </div>
        <ResultFootnotes />
      </div>
    </div>
  );
}
