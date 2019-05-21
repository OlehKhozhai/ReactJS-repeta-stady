import React from 'react';

const ToDo = ({ notes = [], deleteNote, completedNote }) => (
  <div>
    <ul>
      {notes.map(({ id, completed, text }) => (
        <li key={id}>
          {text}
          <input
            type="checkbox"
            checked={completed}
            onChange={() => completedNote(id, !completed)}
          />
          <button type="button" onClick={() => deleteNote(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ToDo;
