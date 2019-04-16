import React from 'react';

const Modal = ({ containerRef, onToggleCloseModalWindow }) => (
  <div className="Backdrop">
    <div className="ModalWindow" ref={containerRef}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellat fugiat sunt doloremque
        fugit. Non placeat dolorem laboriosam ea illum.
      </p>
      <button type="button" className="btn btn-primary" onClick={onToggleCloseModalWindow}>
        Close
      </button>
    </div>
  </div>
);

export default Modal;
