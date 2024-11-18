import Notification from "./Notification";
import NumbersListElement from "./NumbersListElement";

const NumbersList = ({
  people,
  searchName,
  setPersons,
  notificationMessage,
  setNotificationMessage,
  isError,
  setIsError,
}) => {
  const peopleToShow = searchName
    ? people.filter((person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase()),
      )
    : people;

  return (
    <div>
      <h2>Numbers</h2>
      <Notification message={notificationMessage} isError={isError} />
      {peopleToShow.map((person) => (
        <NumbersListElement
          key={person.id}
          person={person}
          people={people}
          setPeople={setPersons}
          setNotificationMessage={setNotificationMessage}
          setIsError={setIsError}
        />
      ))}
    </div>
  );
};

export default NumbersList;
