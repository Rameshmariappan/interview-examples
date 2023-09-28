import React, { useEffect, useRef, useState } from "react";
function getRandomNumber(max = 100) {
  return Math.floor(Math.random() * max);
}
const INITIAL_LIST = Array.from({ length: 100 }, (_, index) => index + 1);
const GridLayout = () => {
  const [arrayValues, setArrayValues] = useState(INITIAL_LIST);
  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event) => {
    let changedValue = event.target.value.toString();
    setSearchValue(event.target.value);
    console.log(changedValue);
    const filteredValue = arrayValues.filter((item) =>
      item.toString().includes(changedValue)
    );
    setArrayValues(filteredValue);
  };

  useEffect(() => {
    if (inputRef && inputRef.current && inputRef.current.value === "") {
      setArrayValues(INITIAL_LIST);
    }
  }, [searchValue]);

  const handleFilterChanged = (e) => {
    switch (e.target.value) {
      case "0-20":
        let filteredValues = INITIAL_LIST.filter((item) => item <= 20);
        setArrayValues(filteredValues);
        break;
      case "21-40":
        setArrayValues(INITIAL_LIST.filter((item) => item > 20 && item <= 40));
        break;
      case "41-60":
        setArrayValues(INITIAL_LIST.filter((item) => item > 40 && item <= 60));
        break;
      case "61-80":
        setArrayValues(INITIAL_LIST.filter((item) => item > 60 && item <= 80));

        break;
      case "81-100":
        setArrayValues(INITIAL_LIST.filter((item) => item > 80 && item <= 100));

        break;
      case "Select":
        setArrayValues(INITIAL_LIST);
        break;
      default:
        setArrayValues(INITIAL_LIST);
        break;
    }
  };

  return (
    <div className="overall-container">
      <div className="filters-container">
        <input
          type={"search"}
          placeholder={"Search by number"}
          onChange={handleSearch}
          ref={inputRef}
          value={searchValue}
        />
        <select name="cars" id="cars" onChange={handleFilterChanged}>
          <option value="Select">Select</option>
          <option value="0-20">0-20</option>
          <option value="21-40">21-40</option>
          <option value="41-60">41-60</option>
          <option value="61-80">61-80</option>
          <option value="81-100">81-100</option>
        </select>
      </div>

      <div className="grid-container">
        {arrayValues &&
          arrayValues.length > 0 &&
          arrayValues.map((item) => {
            return <div className="grid-item">{item}</div>;
          })}
      </div>
    </div>
  );
};

export default GridLayout;
