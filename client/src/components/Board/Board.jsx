import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { fetchLists } from '../../redux/slices/listSlice';
import { fetchCards, moveCard } from '../../redux/slices/cardSlice';
import List from '../List/List';
import CreateList from '../CreateList/CreateList';
import './Board.scss';

const Board = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists.lists);
  const cards = useSelector(state => state.cards.cards);

  useEffect(() => {
    dispatch(fetchLists());
    dispatch(fetchCards());
  }, [dispatch]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      dispatch(moveCard({
        cardId: result.draggableId,
        destinationListId: destination.droppableId
      })).then(() => {
        dispatch(fetchCards());
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="board-container">
        <div className="lists-container">
          {lists.map(list => (
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
          ))}
          <CreateList />
        </div>
      </div>
    </DragDropContext>
  );
};

export default Board;
