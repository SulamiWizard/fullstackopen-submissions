const AddPersonFormInput = ({ placeholderText, value, handleOnChange }) => {
  return (
    <div>
      <input
        placeholder={placeholderText}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default AddPersonFormInput;
