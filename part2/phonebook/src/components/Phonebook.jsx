import { useState } from "react";
import SearchBar from "./SearchBar";
import AddPersonForm from "./AddPersonForm";
import NumbersList from "./NumbersList";

const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBar searchName={searchName} setSearchName={setSearchName} />
      <AddPersonForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <NumbersList people={persons} searchName={searchName} />
    </div>
  );
};
export default Phonebook;
