import Part from "./Part";

const Content = ({ course }) => {
  const parts = [...course.parts];
  const total = parts.reduce(
    (acc, currentObj) => acc + currentObj.exercises,
    0,
  );
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercise={part.exercises} />
      ))}
      <h4>Total of {total} exercises</h4>
    </div>
  );
};

export default Content;
