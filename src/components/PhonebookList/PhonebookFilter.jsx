const PhonebookFilter = ({ filter, handleChange }) => {
  return (
    <>
      <span>Find contacts:</span>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </>
  );
};

export default PhonebookFilter;
