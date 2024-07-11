import React from 'react';
import './ConfirmModal.scss';

const ConfirmModal = ({ isOpen, onRequestClose, onConfirm, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="confirm-modal__overlay">
      <div className="confirm-modal__content">
        <h2 className="confirm-modal__message">{message}</h2>
        
        <div className="confirm-modal__buttons">
          <button
            className="confirm-modal__button confirm-modal__button--cancel" 
            onClick={onRequestClose}
          >
            No
          </button>
          <button
            className="confirm-modal__button confirm-modal__button--confirm"
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
