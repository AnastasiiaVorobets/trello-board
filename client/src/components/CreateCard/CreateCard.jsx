import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { createCard, fetchCards } from '../../redux/slices/cardSlice';
import './CreateCard.scss';

const CreateCard = ({ listId }) => {
  const dispatch = useDispatch();
  const [cardTitle, setCardTitle] = useState('');

  const handleCreateCard = () => {
    if (cardTitle.trim() !== '') {
      const newCard = { listId, title: cardTitle, timestamp: new Date().toISOString() };
      console.log('Creating card:', newCard);
      dispatch(createCard(newCard));
      setCardTitle('');
      dispatch(fetchCards());
    }
  };

  return (
    <div className="create-card">
      <input
        className="create-card__input"
        type="text"
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
        placeholder="Enter card title..."
      />
      <button
        className='create-card__button'
        onClick={handleCreateCard}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default CreateCard;
