const SearchBar = ({ searchName, setSearchName }) => {
  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <input
      type="search"
      value={searchName}
      placeholder="Search"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
