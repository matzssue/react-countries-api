const SelectFilterInput = (props) => {
  return (
    <select onChange={props.onChange} className={props.className}>
      <option value="">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
export default SelectFilterInput;
