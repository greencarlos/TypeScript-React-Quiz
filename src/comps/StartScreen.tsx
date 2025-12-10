function StartScreen({setScreen}) {
  return (
    <div className="app">
      <h1>React Quiz App</h1>
      <p>Test your basic React knowledge</p>
      <button onClick={() => setScreen("question")}>Start Quiz</button>
    </div>
  );
}

export default StartScreen;
