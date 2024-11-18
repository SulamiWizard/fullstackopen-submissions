import peopleService from "../services/people";

const NumbersListElement = ({
  person,
  people,
  setPeople,
  setIsError,
  setNotificationMessage,
}) => {
  const handleDeletion = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      setPeople(people.filter((p) => p.id !== person.id));
      peopleService.remove(person.id).catch((error) => {
        setIsError(true);
        setNotificationMessage(
          `${person.name} has already been deleted from the server`,
        );
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
      });
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
