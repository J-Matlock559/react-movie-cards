import React from "react";
import "./MovieModal.css";

function MovieModal({ children, show, onModalClose }) {
  if (!show) {
    return null;
  }

  return (
    <div onClick={onModalClose} className="modal-body">
      <div onClick={(e) => e.stopPropagation()} className="modal-card">
        <button onClick={onModalClose} className="modal-button">
          <b>X</b>
        </button>

        {children}
      </div>
    </div>
  );
}

export default MovieModal;
