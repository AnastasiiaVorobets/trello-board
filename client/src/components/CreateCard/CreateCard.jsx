import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './CreateCard.scss';

const CreateCard = ({ onOpenModal }) => {
  return (
    <div className="create-card">
      <button
        className='create-card__button'
        onClick={onOpenModal}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default CreateCard;
