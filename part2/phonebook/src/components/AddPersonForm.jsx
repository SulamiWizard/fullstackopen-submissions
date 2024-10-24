import AddPersonFormInput from "./AddPersonFormInput";
import peopleService from "../services/people";

const AddPersonForm = ({
  persons,
  newName,
  newNumber,
  setPersons,
  setNewName,
  setNewNumber,
}) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    // if (persons.some((person) => person.name === newName)) {
    //   alert(`${newName} is already adde to phonebook`);
    //   console.log(person.name);
    //   return;
    // }

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
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
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
      setNewName("");
      setNewNumber("");
    });
  };

  return (
    <div>
      <h2>Add a person</h2>
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
