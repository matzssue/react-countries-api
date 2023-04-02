const SelectFilterInput = (props) => {
  return (
    <select className={props.className}>
      <option value="">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
export default SelectFilterInput;