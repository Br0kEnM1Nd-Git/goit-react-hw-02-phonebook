const PhonebookFilter = ({ filter, handleChange }) => {
  return (
    <>
      <span>Search by filter</span>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </>
  );
};

export default PhonebookFilter;
