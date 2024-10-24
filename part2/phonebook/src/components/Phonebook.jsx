import { useState, useEffect } from "react";
import axios from "axios";
import people from "../services/people";

import SearchBar from "./SearchBar";
import AddPersonForm from "./AddPersonForm";
import NumbersList from "./NumbersList";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      // console.log(response.data);
      setPersons(response.data);
    });
  }, []);

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
      <NumbersList
        people={persons}
        searchName={searchName}
        setPersons={setPersons}
      />
    </div>
  );
};
export default Phonebook;
