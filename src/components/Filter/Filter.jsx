import { FilterContainer, Input } from './Filter.styled';
const Filter = ({ filter, handelFilterChange }) => {
  return (
    <FilterContainer>
      <span>Find contacts by name</span>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handelFilterChange}
      />
    </FilterContainer>
  );
};

export default Filter;
