import { useEffect, useState } from "react";
import axios from "axios";
import Country from "./components/Country";

function App() {
  const [search, setSearch] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterCountries = () => {
    setFilteredCountries(
      countries.filter((country) => country.name.common.contains(search)),
    );
  };

  const countriesToShow = search
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()),
      )
    : countries;

  return (
    <>
      <div>
        <label htmlFor="Country">Country </label>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Find Countries"
        />
      </div>
      <div>
        {countriesToShow.length > 10 ? (
          <div>Too many matches, specify another filter.</div>
        ) : countriesToShow.length === 1 ? (
          <Country country={countriesToShow[0]} />
        ) : (
          countriesToShow.map((country) => (
            <div key={country.name.common}>{country.name.common}</div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
