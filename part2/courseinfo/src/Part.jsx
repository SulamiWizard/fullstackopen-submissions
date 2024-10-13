const Part = ({ part, exercise }) => {
  return (
    <>
      <p key={part.id}>
        {part} {exercise}
      </p>
    </>
  );
};

export default Part;
