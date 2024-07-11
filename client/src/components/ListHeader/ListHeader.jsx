import React, { useState } from 'react';
import CreateCardModal from '../CreateCardModal/CreateCardModal';
import DeleteButton from '../DeleteButton/DeleteButton';
import CreateCard from '../CreateCard/CreateCard'
import './ListHeader.scss';

const ListHeader = ({ title, onDelete, listId, showDeleteButton }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="list-header">
      <h2 className='list-header__title'>{title}</h2>
      {showDeleteButton && (
        <DeleteButton onDelete={onDelete} />
      )}
      <CreateCardModal isOpen={isModalOpen} onClose={handleCloseModal} listId={listId} />
      <CreateCard onOpenModal={handleOpenModal} />
    </div>
  );
};

export default ListHeader;
