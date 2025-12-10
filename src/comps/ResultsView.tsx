function ResultsView({ resultsProps }) {
	const [score, quizData, setScreen, setIndex, setScore, setSelected] =
		resultsProps;

	return (
		<div className="app">
			<h1>Quiz Finished!</h1>
			<h2>
				Your Score: {score} / {quizData.length}
			</h2>
			<p>
				{score === quizData.length
					? "Perfect score!"
					: `You answered: ${score} correct out of ${quizData.length}`}
			</p>
			<button
				onClick={() => {
					setScreen("start");
					setIndex(0);
					setScore(0);
					setSelected(null);
				}}
			>
				Restart Quiz?
			</button>
		</div>
	);
}

export default ResultsView;
