import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/MainQuiz";
import Compile from "./Pages/Compile";
import Results from "./Pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/compile" element={<Compile />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
