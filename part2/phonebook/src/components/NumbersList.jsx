import NumbersListElement from "./NumbersListElement";

const NumbersList = ({ people, searchName }) => {
  const peopleToShow = searchName
    ? people.filter((person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase()),
      )
    : people;

  return (
    <div>
      <h2>Numbers</h2>
      {peopleToShow.map((person) => (
        <NumbersListElement
          key={person.name}
          name={person.name}
          number={person.number}
        />
      ))}
    </div>
  );
};

export default NumbersList;
