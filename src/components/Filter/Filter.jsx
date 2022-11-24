const Filter = ({ filter, handelFilterChange }) => {
  return (
    <div>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handelFilterChange}
      />
    </div>
  );
};

export default Filter;
