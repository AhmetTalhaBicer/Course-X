import React, { useState } from "react";
import Select from "react-select";
import { HiSearch, HiX } from "react-icons/hi";
import courses from "../data/courses";

function SearchBar({ onSearch }) {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "2px solid #e2e8f0",
      borderRadius: "0.375rem",
      width: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }),
    input: (provided) => ({
      ...provided,
      color: "black",
      marginLeft: "20px",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "blue" : "white",
      color: state.isSelected ? "white" : "black",
    }),
    placeholder: (provided) => ({
      ...provided,
      marginLeft: "20px",
    }),
  };

  const handleClear = () => {
    setFilteredOptions([]);
    setInputValue("");
    onSearch("");
  };

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      setInputValue(selectedOption.value);
      onSearch(selectedOption.value);
    }
  };

  const handleInputChange = (inputText) => {
    setInputValue(inputText);
    if (inputText) {
      const filtered = courses.filter((course) =>
        course.title.toLowerCase().includes(inputText.toLowerCase())
      );
      setFilteredOptions(
        filtered.map((course) => ({
          label: course.title,
          value: course.title,
        }))
      );
    } else {
      setFilteredOptions([]);
    }
  };

  return (
    <div className="relative">
      <Select
        options={filteredOptions}
        styles={customStyles}
        placeholder="Search for courses..."
        isSearchable
        onInputChange={handleInputChange}
        onChange={handleChange}
        inputValue={inputValue}
      />
      <div className="absolute top-3 right-4">
        <HiX
          className="text-gray-500 cursor-pointer"
          style={{ marginRight: "25px" }}
          onClick={handleClear}
        />
      </div>
      <div className="absolute right-55 top-3">
        <HiSearch className="text-gray-500" style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
}

export default SearchBar;
