import React from 'react';
import ToDoFormContainer from './ToDoForm/ToDoFormContainer';
import ToDoSearchContainer from './ToDoSearch/ToDoSearchContainer';
import ToDoContainer from './ToDoContainer';

const MainToDo = () => (
  <div>
    <ToDoSearchContainer />
    <ToDoFormContainer />
    <ToDoContainer />
  </div>
);

export default MainToDo;
