const Select = ({
  options = [],
  onChange = () => {},
  shortCode = "",
}) => {
  return (
    <select onChange={onChange} value={shortCode}>
      {options?.map((el) =>
      <option value={el.short_code} key={el.id}>
      {el.name} {el.symbol}
    </option>
        // el.short_code === shortCode ? (
        //   <option value={el.name} key={el.id} selected>
        //     {el.name} {el.symbol}
        //   </option>
        // ) : (
        //   <option value={el.name} key={el.id}>
        //     {el.name} {el.symbol}
        //   </option>
        // )
      )}
    </select>
  );
};

export default Select;
