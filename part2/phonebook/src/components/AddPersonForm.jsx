import AddPersonFormInput from "./AddPersonFormInput";
import peopleService from "../services/people";
import Notification from "./Notification";

const AddPersonForm = ({
  persons,
  newName,
  newNumber,
  setPersons,
  setNewName,
  setNewNumber,
  notificationMessage,
  setNotificationMessage,
  isError,
  setIsError,
}) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    // Check if person already exists
    const personExists = persons.find((person) => person.name === newName);

    // Prompt user for confirmation
    if (personExists) {
      const confirmUpdate = confirm(
        `${newName} has already been added to the phonebook. Would you like to replace ${newName}'s number with ${newNumber}?`,
      );

      // Update the number if confirmed
      if (confirmUpdate === true) {
        const updatedPerson = { ...personExists, number: newNumber };
        peopleService
          .update(personExists.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personExists.id ? person : returnedPerson,
              ),
            );
            setIsError(false);
            setNotificationMessage(
              `Successfully updated ${newName}'s phone number`,
            );
            setTimeout(() => {
              setNotificationMessage(null);
            }, 5000);
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            console.log("FAIL");
            alert(
              `The person '${newName}' was already removed from the server`,
            );
            setPersons(
              persons.filter((person) => person.id !== personExists.id),
            );
          });
      }
      return;
    }

    // Do nothing if denied
    // Else add a new person to the database
    const nameOject = {
      name: newName,
      number: newNumber,
    };
    peopleService.create(nameOject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setIsError(false);
      setNotificationMessage(`Sucessfully added ${newName} to phonebook.`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
      setNewName("");
      setNewNumber("");
    });
  };

  return (
    <div>
      <h2>Add a person</h2>
      <Notification message={notificationMessage} isError={isError} />
      <form onSubmit={addPerson}>
        <AddPersonFormInput
          placeholderText={"Name"}
          value={newName}
          handleOnChange={handleNameChange}
        />
        <AddPersonFormInput
          placeholderText={"Number"}
          value={newNumber}
          handleOnChange={handleNumberChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddPersonForm;
