import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import useLists from '../../hooks/useLists';
import useCards from '../../hooks/useCards';
import useHandleDragEnd from '../../hooks/handleDragEnd';
import CreateList from '../CreateList/CreateList';
import ListsContainer from '../ListsContainer/ListsContainer';
import './Board.scss';

const Board = () => {
  const lists = useLists();
  const cards = useCards();
  const handleDragEnd = useHandleDragEnd();

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="board-container">
        <CreateList />
        <div className="lists-container">
          <ListsContainer lists={lists} cards={cards} />
        </div>
      </div>
    </DragDropContext>
  );
};

export default Board;