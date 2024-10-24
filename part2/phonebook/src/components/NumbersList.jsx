import NumbersListElement from "./NumbersListElement";

const NumbersList = ({ people, searchName, setPersons }) => {
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
          key={person.id}
          person={person}
          people={people}
          setPeople={setPersons}
        />
      ))}
    </div>
  );
};

export default NumbersList;
