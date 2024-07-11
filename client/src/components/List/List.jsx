import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../redux/slices/listSlice';
import { sortCardsByDate } from '../../redux/slices/cardSlice';
import ListHeader from '../ListHeader/ListHeader';
import CardsList from '../CardsList/CardsList';
import './List.scss';

const List = ({ list, provided, cards }) => {
  const dispatch = useDispatch();
  const [sortDirection, setSortDirection] = useState('asc');

  const handleDeleteList = () => {
    console.log('Deleting list with ID:', list._id);
    dispatch(deleteList(list._id));
  };

  const handleSortCards = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    dispatch(sortCardsByDate({ listId: list._id, direction: newDirection }));
  };

  return (
    <div ref={provided.innerRef} {...provided.droppableProps} className="list">
      <ListHeader
        title={list.title}
        onDelete={handleDeleteList}
        listId={list._id}
        showDeleteButton={cards.length === 0}
      />
      <div className="list__sort-buttons">
        <button
          className='list__sort-button'
          onClick={handleSortCards}
        >
          Sort
        </button>
      </div>
      <CardsList cards={cards} provided={provided} />
    </div>
  );
};

export default List;
