import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const calculateAverage = () => {
    const total = good + neutral + bad;
    if (total === 0) return 0;
    return (good * 1 + neutral * 0 + bad * -1) / total;
  };
  const calculatePositive = () => {
    const total = good + neutral + bad;
    if (total === 0) return "0%";
    return `${((good / total) * 100).toFixed(2)}%`;
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h2>Statistic</h2>
      <p>good:{good}</p>
      <p>neutral:{neutral}</p>
      <p>bad:{bad}</p>
      <p>all:{good + neutral + bad}</p>
      <p>average:{calculateAverage()}</p>
      <p>positive:{calculatePositive()}</p>
    </div>
  );
};

export default App;
