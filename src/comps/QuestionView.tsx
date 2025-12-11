function QuestionView({ questionProps }) {
  const [
    current,
    quizData,
    index,
    setIndex,
    score,
    setScore,
    selected,
    setSelected,
    setScreen,
  ] = questionProps;

  return (
    <div className="app">
      <h1>React Quiz</h1>
      <h2>
        Question {index + 1} of {quizData.length}
      </h2>
      <p>What they call you, where you from Cuz?</p>
      <h3>{current.question}</h3>
      <div className="options">
        {" "}
        {current.options.map((answer: string, i: number) => (
          <p
            key={i}
            className={selected === i ? "selected" : ""}
            onClick={() => setSelected(i)}
          >
            <button>{answer}</button>
          </p>
        ))}
      </div>
      <button
        disabled={selected === null}
        onClick={() => {
          if (selected === current.answer) {
            setScore(score + 1);
          }
          setSelected(null);

          if (index + 1 < quizData.length) {
            setIndex(index + 1);
          } else {
            setScreen("end");
          }
        }}
      >
        Next Question
      </button>
    </div>
  );
}

export default QuestionView;
