import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCard, fetchCards } from '../../redux/slices/cardSlice';
import './CreateCardModal.scss';

const CreateCardModal = ({ isOpen, onClose, listId }) => {
  const dispatch = useDispatch();
  const [cardTitle, setCardTitle] = useState('');

  const handleCreateCard = async () => {
    if (cardTitle.trim() !== '') {
      const newCard = { listId, title: cardTitle, timestamp: new Date().toISOString() };
      console.log('Creating card:', newCard);
      await dispatch(createCard(newCard));
      setCardTitle('');
      await dispatch(fetchCards());
      onClose();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className={`create-card-modal ${isOpen ? 'open' : ''}`}>
      <div className="create-card-modal__content">
        <span className="create-card-modal__close" onClick={onClose}>&times;</span>
        <h2 className="create-card-modal__title">Create Card</h2>
        <input
          className="create-card-modal__input"
          type="text"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
          placeholder="Enter card title..."
        />
        <div className="create-card-modal__buttons">
        <button
            className='create-card-modal__button create-card-modal__button--cancel'
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className='create-card-modal__button create-card-modal__button--create'
            onClick={handleCreateCard}
          >
             Create Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCardModal;
