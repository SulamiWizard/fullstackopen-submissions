import AddPersonFormInput from "./AddPersonFormInput";

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
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }
    const NameOject = { name: newName, number: newNumber };
    setPersons(persons.concat(NameOject));
    setNewName("");
    setNewNumber("");
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
