interface QuestionCardProps {
  text: string;
  value: number | null;
  onChange: (value: number) => void;
  delay?: number;
}

const scaleLabels = ["Never true", "Rarely true", "Sometimes", "Often true", "Very true"];

export default function QuestionCard({ text, value, onChange, delay = 0 }: QuestionCardProps) {
  return (
    <div
      className="question-text fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="body">{text}</div>
      <div className="circle-row">
        <div className="circle-track" role="radiogroup" aria-label="Response">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              type="button"
              role="radio"
              aria-checked={value === num}
              aria-label={`${num}: ${scaleLabels[num - 1]}`}
              title={`${num}: ${scaleLabels[num - 1]}`}
              onClick={() => onChange(num)}
              className={`circle ${value === num ? "filled" : ""}`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      <div className="scale-legend" aria-hidden="true">
        {scaleLabels.map((label, index) => (
          <span key={label}>
            {index + 1} {label.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
