import React from 'react';
import Card from '../Card/Card';
import './CardsList.scss'

const CardsList = ({ cards, provided }) => {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <Card key={card._id} card={card} index={index} />
      ))}
      {provided.placeholder}
    </div>
  );
};

export default CardsList;
