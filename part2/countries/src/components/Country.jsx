const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <br />
      capital {country.capital}
      <br />
      area {country.area}
      <br />
      <h2>Languages:</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <br />
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        style={{ width: "200px" }}
      />
    </div>
  );
};

export default Country;
