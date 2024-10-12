import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const scores = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics scores={scores} />
    </div>
  );
}

export default App;
