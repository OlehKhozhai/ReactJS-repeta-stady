import React from 'react';

const SelectArticles = ({ options, value, onChange }) => (
  <div>
    <select value={value} onChange={e => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectArticles;
