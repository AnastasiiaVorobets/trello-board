import React from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { deleteCard } from '../../redux/slices/cardSlice';
import { parseDate, formatDistance } from '../../utils/DateUtils';
import useCurrentTime from '../../hooks/useCurrentTime';
import DeleteButton from '../DeleteButton/DeleteButton';
import './Card.scss';

const Card = ({ card, index }) => {
  const dispatch = useDispatch();
  useCurrentTime();

  const handleDeleteCard = () => {
    console.log('Deleting card with ID:', card._id);
    dispatch(deleteCard(card._id));
  };

  const updatedAt = parseDate(card.updatedAt);

  return (
    <Draggable key={card._id} draggableId={card._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card"
        >
          <div className="card__header">
            <p className='card__title'>{card.title}</p>
            <DeleteButton onDelete={handleDeleteCard} />
          </div>
          <p className="card__updated-time">Last updated: {formatDistance(updatedAt)}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
