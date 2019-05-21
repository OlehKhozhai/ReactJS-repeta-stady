import React from 'react';

const ToDoSearch = ({ value, onChange }) => (
  <>
    <input type="text" value={value} onChange={e => onChange(e.target.value)} />
  </>
);

export default ToDoSearch;
