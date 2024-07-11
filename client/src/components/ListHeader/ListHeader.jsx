import React from 'react';
import CreateCard from '../CreateCard/CreateCard';
import DeleteButton from '../DeleteButton/DeleteButton';
import './ListHeader.scss';

const ListHeader = ({ title, onDelete, listId, showDeleteButton }) => {
  return (
    <div className="list-header">
      <h2 className='list-header__title'>{title}</h2>
      {showDeleteButton && (
        <DeleteButton onDelete={onDelete} />
      )}
      <CreateCard listId={listId}/>
    </div>
  );
};

export default ListHeader;
