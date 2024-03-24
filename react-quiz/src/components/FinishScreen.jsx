function FinishScreen({ points, maxPoints, highScore,dispatch }) {
  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of <strong>{maxPoints}</strong>{" "}
        <strong>({Math.ceil(percentage)}%)</strong>
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
      <button className="btn btn-ui" onClick={()=>dispatch({type:"restart"})}>Reset</button>
    </>
  );
}

export default FinishScreen;
