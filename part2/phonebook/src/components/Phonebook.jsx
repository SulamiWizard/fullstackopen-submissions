import { useState, useEffect } from "react";
import axios from "axios";

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
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [numbersMessage, setNumbersMessage] = useState(null);
  const [isError, setIsError] = useState(true);

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
        notificationMessage={notificationMessage}
        setNotificationMessage={setNotificationMessage}
        isError={isError}
        setIsError={setIsError}
      />
      <NumbersList
        people={persons}
        searchName={searchName}
        setPersons={setPersons}
        notificationMessage={numbersMessage}
        setNotificationMessage={setNumbersMessage}
        isError={isError}
        setIsError={setIsError}
      />
    </div>
  );
};
export default Phonebook;
