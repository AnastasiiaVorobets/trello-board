import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../redux/slices/listSlice';
import ListHeader from '../ListHeader/ListHeader';
import CardsList from '../CardsList/CardsList';
import './List.scss';

const List = ({ list, provided, cards }) => {
  const dispatch = useDispatch();

  const handleDeleteList = () => {
    console.log('Deleting list with ID:', list._id);
    dispatch(deleteList(list._id));
  };

  return (
    <div ref={provided.innerRef} {...provided.droppableProps} className="list">
      <ListHeader
        title={list.title}
        onDelete={handleDeleteList}
        listId={list._id}
        showDeleteButton={cards.length === 0}
      />
      <CardsList cards={cards} provided={provided} />
    </div>
  );
};

export default List;
