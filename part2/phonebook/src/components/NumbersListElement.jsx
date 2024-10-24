import peopleService from "../services/people";

const NumbersListElement = ({ person, people, setPeople }) => {
  const handleDeletion = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      setPeople(people.filter((p) => p.id !== person.id));
      peopleService.remove(person.id);
    }
  };
  return (
    <div>
      {person.name} {person.number}{" "}
      <button onClick={handleDeletion}>delete</button>
    </div>
  );
};

export default NumbersListElement;
