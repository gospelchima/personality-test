import { useMemo, useState, useEffect } from "react";

const loadingQuotes = [
  {
    quote: "Ghen ghen! Today go hot.",
    attribution: "Nigerian Internet Oracle",
  },
  {
    quote: "It may not be your village people. It might just be you.",
    attribution: "Nigerian Internet Oracle",
  },
  {
    quote: "A fool at forty is a fool forever.",
    attribution: "Pete Edochie",
  },
  {
    quote: "Until the lion learns to write, every story will glorify the hunter.",
    attribution: "Chinua Achebe",
  },
  {
    quote: "A man who does not know where the rain began to beat him cannot say where he dried his body.",
    attribution: "Chinua Achebe, Arrow of God",
  },
  {
    quote: "The impatient man eats the unripe fruit.",
    attribution: "Chinua Achebe, Things Fall Apart",
  },
];

function shuffleQuotes() {
  return [...loadingQuotes].sort(() => Math.random() - 0.5);
}

export default function ResultFootnotes() {
  const quotes = useMemo(() => shuffleQuotes(), []);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const currentQuote = quotes[quoteIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setQuoteIndex((current) => Math.min(current + 1, quotes.length - 1));
    }, 2000);

    return () => window.clearInterval(interval);
  }, [quotes.length]);

  return (
    <figure className="result-footnote">
      <blockquote>"{currentQuote.quote}"</blockquote>
      <figcaption>{currentQuote.attribution}</figcaption>
    </figure>
  );
}
