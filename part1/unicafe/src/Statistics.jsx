import StatisticLine from "./StatisticLine";

const Statistics = ({ scores }) => {
  const good = scores.good;
  const neutral = scores.neutral;
  const bad = scores.bad;

  if (good + bad + neutral === 0) {
    return (
      <div>
        <h1>statistics </h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good + bad + neutral} />
      <StatisticLine
        text="average"
        value={(good - bad) / (good + bad + neutral)}
      />
      <StatisticLine
        text="positive"
        value={(good / (good + bad + neutral)) * 100 + "%"}
      />
    </div>
  );
};

export default Statistics;
