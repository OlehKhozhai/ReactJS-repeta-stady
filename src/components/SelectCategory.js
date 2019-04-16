import React from 'react';

const SelectCategory = ({ options, category, onChangeCategory }) => (
  <div className="form-group">
    <select value={category} onChange={onChangeCategory} className="custom-select">
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default SelectCategory;
