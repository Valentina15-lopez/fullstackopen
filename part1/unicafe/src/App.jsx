import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad;
  const calculateAverage = () => {
    if (total === 0) return 0;
    return (good * 1 + neutral * 0 + bad * -1) / total;
  };
  const calculatePositive = () => {
    if (total === 0) return "0%";
    return `${((good / total) * 100).toFixed(2)}%`;
  };
  return (
    <div>
      <h2>Statistic</h2>
      {total === 0 ? (
        <div>No feedback given </div>
      ) : (
        <table>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={total} />
          <StatisticLine text={"average"} value={calculateAverage()} />
          <StatisticLine text={"positive"} value={calculatePositive()} />
        </table>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
