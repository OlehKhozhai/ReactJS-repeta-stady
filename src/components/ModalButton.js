import React from 'react';

const ModalButton = ({ handleOpenToggleModalWindow }) => (
  <button type="button" className="btn btn-primary" onClick={handleOpenToggleModalWindow}>
    Modal Window
  </button>
);

export default ModalButton;
