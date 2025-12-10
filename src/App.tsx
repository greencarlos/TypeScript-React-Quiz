import { useState } from "react";
import quizData from "./quizData";
import StartScreen from "./comps/StartScreen";
import QuestionView from "./comps/QuestionView";
import ResultsView from "./comps/ResultsView";
import "./App.css";

function App() {
  const [screen, setScreen] = useState<string>("start");
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selected, setSelected] = useState<null>(null);

  if (screen === "start") {
    return <StartScreen setScreen={setScreen} />;
  }

  if (screen === "question") {
    return (
      <QuestionView
        questionProps={[
          quizData[index],
          quizData,
          index,
          setIndex,
          score,
          setScore,
          selected,
          setSelected,
          setScreen,
        ]}
      />
    );
  }

  if (screen === "end") {
    return (
      <ResultsView
        resultsProps={[
          score,
          quizData,
          setScreen,
          setIndex,
          setScore,
          setSelected,
        ]}
      />
    );
  }
}

export default App;
