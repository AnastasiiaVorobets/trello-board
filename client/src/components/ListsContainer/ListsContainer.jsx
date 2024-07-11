import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import List from '../List/List';

const ListsContainer = ({ lists, cards }) => {
  if (lists.length === 0) {
    return (
      <div className="empty-board-message">
        The board is empty. Add a list to get started.
      </div>
    );
  }

  return (
    lists.map(list => (
      <Droppable key={list._id} droppableId={list._id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <List
              key={list._id}
              list={list}
              provided={provided}
              cards={cards.filter(card => card.listId && card.listId._id === list._id)}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    ))
  );
};

export default ListsContainer;
